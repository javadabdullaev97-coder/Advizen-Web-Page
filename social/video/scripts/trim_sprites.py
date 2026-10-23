"""Crops the sprite renders to fixed boxes.

The boxes are fixed rather than found, so the three company cards (solid,
graphite, hollow) stay registered on one another and a crossfade between
them does not jump. UboConduit.tsx holds the same sizes.
"""

import sys

from PIL import Image

BOX = {
    "man": (437, 629, 647, 1296),
    "ooo": (60, 722, 1008, 1231),
    "holding": (60, 722, 1008, 1231),
    "hollow": (60, 722, 1008, 1231),
    "cash": (234, 800, 874, 1114),
    "budget": (60, 722, 1008, 1231),
}

src, dst = sys.argv[1], sys.argv[2]
for kind, box in BOX.items():
    im = Image.open(f"{src}/{kind}.png").convert("RGBA")
    bbox = im.getbbox()
    # A render that spills out of its box means the camera or the model moved.
    assert bbox and bbox[0] >= box[0] and bbox[1] >= box[1] and bbox[2] <= box[2] and bbox[3] <= box[3], (kind, bbox)
    im.crop(box).save(f"{dst}/{kind}.png", optimize=True)
    print(kind, box[2] - box[0], "x", box[3] - box[1])
