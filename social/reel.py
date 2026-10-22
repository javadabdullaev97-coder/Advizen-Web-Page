#!/usr/bin/env python3
"""
Cut a vertical Reel from a post's cards.

    python3.12 social/reel.py social/posts/ubo.toml

The carousel is 1080×1350 and a Reel is 1080×1920, so the cards are
redrawn at that height rather than letterboxed: the type sits where it
belongs and the photograph still fills the frame. Nothing in the card
system changes — this sets the two module globals that carry the height
and draws through the same `banner()`.

Each card becomes one shot in two layers. The photograph pushes in (or
pulls back, alternating) and the type fades up over it a beat later, so
the frame is alive before the words arrive. Cuts are hard: the look is
graphic, and a dissolve would soften what the cards do deliberately.

The file comes out silent. Instagram's own library is the only safe place
to take music from, and that is added in the app at upload.
"""

import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

import banner  # noqa: E402
import render  # noqa: E402

REPO = Path(__file__).parent.parent
FPS = 30
HEIGHT = 1920
ZOOM = 0.06          # how far the photograph travels over a shot
TEXT_IN = 0.45       # the beat before the type starts to arrive
TEXT_FADE = 0.65


def shot_seconds(spec: dict) -> float:
    """A shot lasts as long as its card takes to read."""
    if spec.get("items"):
        return 2.4 + 0.75 * len(spec["items"])
    if spec.get("title"):          # the cover
        return 3.0
    return 3.2


def vertical(post: dict, work: Path) -> list[tuple[Path, Path, float]]:
    """Draw every card twice: the photograph alone, and the finished card."""
    banner.HEIGHT = HEIGHT
    banner.FOOT_Y = HEIGHT - 150

    specs = render.specs_for(post)
    shots = []
    for index, spec in enumerate(specs, start=1):
        spec = dict(spec)
        if spec.pop("type") != "banner":
            print(f"  skipped {index:02d}: reels are built from banner cards",
                  file=sys.stderr)
            continue
        image = spec.get("image")
        if not image or not (REPO / image).exists():
            print(f"  skipped {index:02d}: no {image}", file=sys.stderr)
            continue
        spec["image"] = REPO / image
        spec.setdefault("tone", post.get("tone", "light"))

        plate = work / f"{index:02d}-plate.png"
        card = work / f"{index:02d}-card.png"

        # The photograph alone, balanced and cropped exactly as the card
        # crops it, with the lockup but no type and no scrim: the scrim
        # then arrives with the words it exists to carry.
        picture = banner._balance(banner._cover(spec["image"]))
        from PIL import ImageDraw
        banner._foot(picture, ImageDraw.Draw(picture),
                     (banner.DARK if spec["tone"] == "dark" else banner.LIGHT)["accent"])
        picture.save(plate)

        banner.banner(**spec).save(card)
        shots.append((plate, card, shot_seconds(spec)))
    return shots


def cut(shots, work: Path, out: Path) -> None:
    parts = []
    for i, (plate, card, seconds) in enumerate(shots):
        frames = round(seconds * FPS)
        rate = ZOOM / frames
        # Alternating the direction keeps six shots from reading as one
        # mechanical move repeated.
        z = (f"1+{rate:.6f}*on" if i % 2 == 0
             else f"{1 + ZOOM:.4f}-{rate:.6f}*on")
        move = (f"scale=2160:3840,zoompan=z='{z}':d=1:"
                f"x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':"
                f"s=1080x{HEIGHT}:fps={FPS},setsar=1")
        part = work / f"part{i:02d}.mp4"
        subprocess.run(
            # -framerate before each input: a looped still arrives at 25fps
            # otherwise, and the shot comes out a sixth short with the move
            # stopping before it is done.
            ["ffmpeg", "-y", "-loglevel", "error",
             "-loop", "1", "-framerate", str(FPS), "-t", f"{seconds}", "-i", str(plate),
             "-loop", "1", "-framerate", str(FPS), "-t", f"{seconds}", "-i", str(card),
             "-filter_complex",
             f"[0:v]{move}[bg];"
             f"[1:v]{move}[fgz];"
             f"[fgz]format=yuva420p,fade=in:st={TEXT_IN}:d={TEXT_FADE}:alpha=1[fg];"
             f"[bg][fg]overlay=format=auto[v]",
             "-map", "[v]", "-c:v", "libx264", "-preset", "medium",
             "-crf", "18", "-pix_fmt", "yuv420p", "-r", str(FPS), str(part)],
            check=True)
        parts.append(part)

    listing = work / "parts.txt"
    listing.write_text("".join(f"file '{p}'\n" for p in parts))
    subprocess.run(
        ["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0",
         "-i", str(listing), "-c", "copy", str(out)], check=True)


def main() -> None:
    if len(sys.argv) != 2:
        print("usage: python3 social/reel.py social/posts/<name>.toml",
              file=sys.stderr)
        raise SystemExit(1)
    if not shutil.which("ffmpeg"):
        print("error: ffmpeg is not installed", file=sys.stderr)
        raise SystemExit(1)

    render.check_fonts()
    post = render.load(Path(sys.argv[1]))
    out = REPO / "public" / "social" / post["slug"] / "reel.mp4"
    out.parent.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory() as tmp:
        work = Path(tmp)
        shots = vertical(post, work)
        if not shots:
            print("error: no banner cards with frames", file=sys.stderr)
            raise SystemExit(1)
        cut(shots, work, out)

    seconds = sum(s for _, _, s in shots)
    print(f"{post['slug']}: {len(shots)} shots, {seconds:.0f}s  →  "
          f"{out.relative_to(REPO)}")


if __name__ == "__main__":
    main()
