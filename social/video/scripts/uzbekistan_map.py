"""Builds src/world/uzbekistan.json from Natural Earth (public domain).

Regions (admin-1, 1:10m) are projected equirectangularly with the
longitude squeezed by cos(mean latitude), simplified, and scaled so the
country is MAP_W units wide, centred on the origin. x runs east, z runs
south, so the map lies on the studio floor the way it reads on paper.

Usage: python3 scripts/uzbekistan_map.py <dir with ne_10m_admin_1_states_provinces.geojson>
"""

import json
import math
import sys

MAP_W = 10.0
TOL = 0.012  # degrees, Douglas–Peucker

CITIES = {
    "Ташкент": (41.311, 69.280),
    "Самарканд": (39.654, 66.976),
    "Бухара": (39.775, 64.421),
    "Нукус": (42.460, 59.603),
    "Фергана": (40.384, 71.786),
    "Наманган": (40.998, 71.672),
    "Андижан": (40.783, 72.344),
    "Навои": (40.084, 65.379),
    "Карши": (38.861, 65.789),
    "Термез": (37.224, 67.278),
    "Ургенч": (41.550, 60.631),
    "Джизак": (40.116, 67.842),
    "Гулистан": (40.490, 68.784),
}


def simplify(pts, tol):
    if len(pts) < 4:
        return pts
    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        a, b = stack.pop()
        (x1, y1), (x2, y2) = pts[a], pts[b]
        dx, dy = x2 - x1, y2 - y1
        n = math.hypot(dx, dy) or 1e-12
        best, idx = 0.0, -1
        for i in range(a + 1, b):
            x0, y0 = pts[i]
            d = abs(dy * x0 - dx * y0 + x2 * y1 - y2 * x1) / n
            if d > best:
                best, idx = d, i
        if best > tol and idx > 0:
            keep[idx] = True
            stack += [(a, idx), (idx, b)]
    return [p for p, k in zip(pts, keep) if k]


def simplify_ring(ring, tol):
    # A closed ring starts and ends on the same point, which leaves
    # Douglas–Peucker no baseline: simplify its two halves separately.
    m = len(ring) // 2
    return simplify(ring[: m + 1], tol) + simplify(ring[m:], tol)[1:]


def main(src):
    data = json.load(open(f"{src}/ne_10m_admin_1_states_provinces.geojson"))
    feats = [f for f in data["features"] if f["properties"].get("adm0_a3") == "UZB"]
    polys = lambda g: g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]
    allpts = [p for f in feats for poly in polys(f["geometry"]) for ring in poly for p in ring]
    lo0, lo1 = min(p[0] for p in allpts), max(p[0] for p in allpts)
    la0, la1 = min(p[1] for p in allpts), max(p[1] for p in allpts)
    k = math.cos(math.radians((la0 + la1) / 2))
    s = MAP_W / ((lo1 - lo0) * k)
    cx, cz = (lo0 + lo1) / 2, (la0 + la1) / 2
    proj = lambda lo, la: [round((lo - cx) * k * s, 4), round((cz - la) * s, 4)]
    regions = []
    for f in feats:
        p = f["properties"]
        parts = []
        for poly in polys(f["geometry"]):
            rings = [simplify_ring(ring, TOL) for ring in poly]
            rings = [r for r in rings if len(r) >= 4]
            if rings:
                parts.append([[proj(*pt) for pt in r] for r in rings])
        regions.append({"name": p.get("name_ru") or p.get("name"), "parts": parts})
    out = {
        "source": "Natural Earth 1:10m admin-1, public domain",
        "width": MAP_W,
        "depth": round((la1 - la0) * s, 4),
        "regions": regions,
        "cities": {n: proj(lo, la) for n, (la, lo) in CITIES.items()},
    }
    json.dump(out, open("src/world/uzbekistan.json", "w"), ensure_ascii=False, separators=(",", ":"))
    print(len(regions), "regions,", sum(len(r) for reg in regions for part in reg["parts"] for r in part), "points")


main(sys.argv[1])
