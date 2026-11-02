"""Generate aveon-logo-inverted.png for dark backgrounds from aveon-logo.png."""
from __future__ import annotations

import colorsys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src" / "assets" / "images" / "aveon-logo.png"
OUT = ROOT / "src" / "assets" / "images" / "aveon-logo-inverted.png"


def is_orange(r: int, g: int, b: int, a: int) -> bool:
    if a < 8:
        return False
    h, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
    return 0.02 <= h <= 0.14 and s >= 0.35 and v >= 0.25


def is_navy(r: int, g: int, b: int, a: int) -> bool:
    if a < 8:
        return False
    if is_orange(r, g, b, a):
        return False
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return lum < 220 and b >= r * 0.85


def main() -> None:
    img = Image.open(SRC).convert("RGBA")
    pixels = img.load()
    w, h = img.size

    out_img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    out_px = out_img.load()

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a < 8:
                continue
            if is_orange(r, g, b, a):
                nr = min(255, int(r * 1.02 + 4))
                ng = min(255, int(g * 1.02 + 2))
                nb = min(255, int(b * 1.02))
                out_px[x, y] = (nr, ng, nb, a)
            elif is_navy(r, g, b, a):
                # Light wordmark on dark backgrounds; preserve edge alpha
                lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
                t = 1.0 - min(1.0, lum / 140.0)
                v = int(200 + 55 * t)
                out_px[x, y] = (v, v, v, a)
            else:
                lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
                if lum > 180:
                    out_px[x, y] = (255, 255, 255, a)
                else:
                    t = 1.0 - min(1.0, lum / 255.0)
                    v = int(220 + 35 * t)
                    out_px[x, y] = (v, v, v, a)

    out_img.save(OUT, optimize=True)
    print(f"Wrote {OUT} ({w}x{h})")


if __name__ == "__main__":
    main()
