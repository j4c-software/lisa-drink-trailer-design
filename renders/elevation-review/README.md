# Plan and Elevation Photorealistic Review Process

## Scope

One approved production run creates **15 side-by-side review images**:

- `A/B/C-PL-01` — three plan views
- `A/B/C-EL-01` through `EL-04` — twelve elevations

The approved files in `drawings/concept/` are the sole authority. Option markdown files are advisory cross-checks and cannot override an SVG.

## Single-run sequence

1. Run `node scripts/build-elevation-review.mjs --prepare`.
   - Verifies all 15 approved SVGs are present.
   - Checks required equipment, handedness, opening, egress and dimensional labels.
   - Checks `24 + 90 = 114` and each option's equipment modules total 90 inches.
   - Rasterizes the approved SVG sources and writes `generation-manifest.json`.
2. Generate one photorealistic image for every manifest entry using its approved-source PNG as the primary reference.
   - Palette: accepted `A-EL-03` rendering.
   - Interior-only framing.
   - Service aperture open with countertop/ledge only; no lifted hatch panel.
   - Restrained foliage may appear only through the service aperture.
   - No mirroring, widening, added partitions, extra openings or invented equipment.
3. Save the 15 renders as `photo-renders/{OPTION}-{VIEW}-photo-render.png`.
4. Run `node scripts/build-elevation-review.mjs`.
   - Refuses to continue if any required photorealistic render is missing.
   - Produces 15 boards in `boards/` and the combined contact sheet.
   - Runs source-label, source-dimension, file-completeness and output-dimension checks.
5. Visually compare every right-hand rendering to its left-hand approved SVG.
   - Check handedness and front/tongue direction.
   - Check equipment count, order and relative module widths.
   - Check window, door and clear-egress locations.
   - Check plan envelope against 114 × 56 inches and 24/90 zoning.
   - Reject and rerun any mismatch before presentation use.

## Final outputs

- `all-15-plan-and-elevation-pairs-contact-sheet.png`
- `boards/*-svg-and-illustration.png` (15 files)
- `qa-report.md` and `qa-report.json`
- `visual-qa-report.md`
