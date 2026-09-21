#!/usr/bin/env python3
"""
Draw the cards for one post.

    python3 social/render.py social/posts/deadlock.toml

Writes public/social/<slug>/01.png … so the images deploy with the site and
are reachable at advizenco.com/social/<slug>/01.png. Instagram fetches the
image by public URL rather than accepting bytes, so the card has to be live
on the site before anything can be published.

Drawing costs nothing per post: this is ordinary code, and no model takes
part in it. Only writing the text costs anything, once a month.
"""

import sys
import tomllib
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

import cards  # noqa: E402
import theme as T  # noqa: E402
import typeset as ts  # noqa: E402

REPO = Path(__file__).parent.parent
OUT_ROOT = REPO / "public" / "social"

REQUIRED_FONTS = [T.SERIF, T.SERIF_MD, T.SANS, T.MONO]


def die(message: str) -> None:
    print(f"error: {message}", file=sys.stderr)
    raise SystemExit(1)


def check_fonts() -> None:
    missing = [n for n in REQUIRED_FONTS if not (T.FONT_DIR / f"{n}.ttf").exists()]
    if missing:
        die(f"fonts missing: {', '.join(missing)}\n"
            f"       run: bash social/fonts/fetch.sh")


def load(path: Path) -> dict:
    if not path.exists():
        die(f"no such post: {path}")
    with path.open("rb") as fh:
        post = tomllib.load(fh)

    for key in ("slug", "category", "title"):
        if not post.get(key):
            die(f"{path.name}: '{key}' is required")
    if not post.get("slide"):
        die(f"{path.name}: a post needs at least one [[slide]]")

    for i, slide in enumerate(post["slide"], start=2):
        kind = slide.get("type")
        if kind not in cards.TYPES:
            die(f"{path.name}: slide {i} has type '{kind}'; "
                f"known types are {', '.join(sorted(cards.TYPES))}")
    return post


def render(post: dict) -> list[Path]:
    out_dir = OUT_ROOT / post["slug"]
    out_dir.mkdir(parents=True, exist_ok=True)

    total = len(post["slide"]) + 1
    written: list[Path] = []

    specs = [dict(type="cover", category=post["category"], title=post["title"],
                  deck=post.get("deck", ""), image=post.get("image"))]
    specs += post["slide"]

    for index, spec in enumerate(specs, start=1):
        spec = dict(spec)
        kind = spec.pop("type")
        # A slide may name its own eyebrow; otherwise it inherits the category.
        spec.setdefault("eyebrow", post["category"])
        # Image paths are written relative to the repository root, on the
        # cover and on any slide that takes one.
        if spec.get("image"):
            path = REPO / spec["image"]
            if not path.exists():
                die(f"slide {index}: image not found: {spec['image']}")
            spec["image"] = path
        image = cards.TYPES[kind](counter=f"{index:02d}/{total:02d}", **spec)

        path = out_dir / f"{index:02d}.png"
        ts.finish(image).save(path)
        written.append(path)
    return written


def main() -> None:
    if len(sys.argv) != 2:
        die("usage: python3 social/render.py social/posts/<name>.toml")
    check_fonts()

    post = load(Path(sys.argv[1]))
    written = render(post)

    print(f"{post['slug']}: {len(written)} cards")
    for p in written:
        print(f"  {p.relative_to(REPO)}  →  /social/{post['slug']}/{p.name}")


if __name__ == "__main__":
    main()
