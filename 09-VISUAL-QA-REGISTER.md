# Lisa Drink Trailer — Visual QA Register

**Revision:** 1.0 — September 7, 2026  
**Status:** CANONICAL VISUAL ACCEPTANCE RECORD

No generated image is approved merely because it appears in chat. An image may enter the presentation only when its exact candidate record is marked **APPROVED FOR PRESENTATION**.

## Status vocabulary

- **CANDIDATE:** awaiting complete specification check.
- **REJECTED:** conflicts with an authoritative requirement; may not be reused as design evidence.
- **STYLE REFERENCE ONLY:** acceptable atmosphere or finish cue, but not geometry or equipment evidence.
- **APPROVED FOR PRESENTATION:** passed canonical QA and received Mike's approval.

## Existing candidates

| Candidate | Intended asset | Status | Reason/control |
|---|---|---|---|
| `exec-203a4c05-1951-464e-a310-b0bc24234268.png` | `COVER-EX-01` | CANDIDATE | Exterior direction is potentially usable, but it has not received complete page-level QA or Mike's presentation approval. |
| `exec-0206af83-7f38-473f-b09e-2fbb586ebc74.png` | `A-IN-01` | REJECTED | Does not reliably reproduce the final authoritative Option A elevations/equipment details. |
| `exec-36be461c-87b4-4575-a8e7-a96c226955f0.png` | `B-IN-01` | REJECTED | Developed before the recovered elevations were made an explicit prompt control; do not use as geometry evidence. |
| `exec-7bce4cc9-5b94-4c11-97fc-31785106e8b7.png` | `C-IN-01` | REJECTED | Developed before the recovered elevations were made an explicit prompt control; do not use as geometry evidence. |
| Earlier exterior/B/C iterations | Various | REJECTED | Superseded exploratory candidates; not presentation assets. |

## Candidate review record

For each new image add one row:

| Candidate filename | Asset ID | Date | Geometry | Equipment | Option identity | Materials/light | Operations/egress | Required labels | Mike approval | Final status |
|---|---|---|---|---|---|---|---|---|---|---|
| _none_ | | | | | | | | | | |

Use **PASS**, **FAIL**, or **N/A** for each technical column. Any **FAIL** requires **REJECTED** status.

## Mandatory review sequence

1. Identify the exact asset ID before generation.
2. Assemble the full brief from `08-RENDER-BRIEF-MATRIX.md` and its governing files.
3. Generate one candidate without changing the brief.
4. Compare it directly against the cited plan/elevations and equipment arithmetic.
5. Record every deviation; do not describe a near match as compliant.
6. Reject or present the candidate to Mike for approval.
7. Record Mike's decision before the image is placed in the deck or reused.
