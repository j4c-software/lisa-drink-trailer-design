# Phase 2 Provisional Fabrication Shell

**Status:** APPROVED FOR OPTION A GATE 2 COORDINATION — PROVISIONAL / NOT FOR FABRICATION
**Model state:** `Lisa Trailer — Fabrication Shell`
**Scope:** Option A shell only; no equipment or cabinetry placement

This package translates the approved Phase 2.1–2.12 planning decisions and the September 25 Option A-only scope into a coordinated spatial-control drawing set. It distinguishes retained construction, proposed removal/cut geometry, new infill or protected reinforcement reserves, unknown protected geometry, conditional reserves and the fixed finished-clear usable boundary.

## Drawing set

| Sheet | Purpose |
|---|---|
| `PH2-FS-PL-01-common-shell-plan.svg/.png` | Option A shell plan; service opening, D1 reserve, usable boundary and protected chassis/floor zones |
| `PH2-FS-EL-01-driver-service-cut-elevation.svg/.png` | Driver/customer exterior service-wall design intent; retained W1, W2/W4 infill and new opening |
| `PH2-FS-EL-02-interior-structural-reserve-elevation.svg/.png` | Interior view of protected header, full-height jamb and sill reserves |
| `PH2-FS-EL-03-passenger-utility-elevation.svg/.png` | Passenger/utility-side D1, W3 infill and utility/relief reserve logic |
| `PH2-FS-RP-01-roof-chassis-reserve-plan.svg/.png` | Optional HVAC/relief reserves and unknown protected chassis/floor geometry |
| `PH2-FS-SE-01-service-wall-sections.svg/.png` | Schematic horizontal and vertical sections through the service wall |
| `PH2-FS-SCHEDULE-01.md` | Opening/reinforcement schedule, provisional coordinate table, verification schedule and review record |
| `PH2-FS-QA-REPORT.md` | Automated and original-resolution visual QA results; spatial-control approval recorded, fabrication release withheld |

## Governing limitations

- The 60 × 30-inch service opening is a maximum provisional design-intent envelope, not a released skin cut.
- `X = 39–99` is measured from the provisional finished-interior front datum in the 114-inch test shell. It is not a fabricator datum and may not be transferred to an exterior skin.
- The 36-inch sill and 66-inch head are measured from the provisional finished-floor datum.
- Header, jamb and sill reserve widths are shown symbolically. Their member sizes, connections and required reserve dimensions remain unknown.
- D1 is a passenger/utility-side 30-inch nominal outer-width planning envelope. Its longitudinal location, clear opening, height, hinge, step, threshold and hardware remain unknown.
- Hatch, ledge, utility, HVAC, relief/exhaust and tank graphics are operating or planning reserves only. They do not release products, holes, supports, brackets or attachments.
- No Option A equipment, cabinetry or floor penetration is approved by this shell package.
- The package must be replaced or reconciled after acquisition using the VIN-specific structural and dimensional survey.

## Generation and validation

Generate the SVG source set:

```sh
node scripts/generate-phase2-fabrication-shell.mjs
```

Validate required labels and geometric assertions:

```sh
node scripts/validate-phase2-fabrication-shell.mjs
xmllint --noout drawings/provisional/phase2/*.svg
```

The PNG files are review derivatives rendered from the SVG files. The SVG files remain the editable drawing source.
