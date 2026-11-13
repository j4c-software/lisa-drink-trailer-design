# Lisa Drink Trailer — Project Bootstrap

**Revision:** 2.1 — September 25, 2026
**Status:** REQUIRED ENTRY POINT FOR EVERY NEW CHAT

## Mandatory bootstrap rule

Before making recommendations, changing specifications, producing presentation content or generating images:

1. Read this file in full.
2. Read `01-MASTER-DESIGN-SPEC.md` in full.
3. Read `03-OPTION-A.md`, the sole active option. Read `04-OPTION-B.md` or `05-OPTION-C.md` only when reviewing superseded history.
4. Read `02-DECISIONS-LOG.md`.
5. For presentation work, read `06-PRESENTATION-SPEC.md`.
6. For any visual or rendering work, read `07-RENDERING-CONTROLS.md` immediately before the work.
7. For any specific image, read its locked entry in `08-RENDER-BRIEF-MATRIX.md`.
8. Before accepting or reusing a generated candidate, check and update `09-VISUAL-QA-REGISTER.md`.
9. For geometry, modeling, drawings or construction-document planning, read `10-PARAMETRIC-MODELING-PLAN.md`.
10. Before any equipment work, read `13-EQUIPMENT-INVENTORY.md`.
11. Internally summarize the current locked design state and check for unresolved holds before acting.

Do not reconstruct a specification from chat history, project memory, a prior summary, a reference image or a rendering when a canonical file exists.

### Project-configuration requirement

The ChatGPT Project Instructions must contain this directive:

> Before doing any work, read `00-PROJECT-BOOTSTRAP.md` and follow its required reading order and authority hierarchy. Do not reconstruct design specifications from chat memory or prior summaries. Do not generate images until the canonical rendering hold has been explicitly released.

The file cannot force itself to be opened. This project-level directive is what makes the bootstrap automatic in each new chat.

## Repository authority

The public GitHub repository `j4c-software/lisa-drink-trailer-design` is the sole authoritative project record. Chat transcripts, ChatGPT Library copies, local workspace copies, generated images and exported presentations are working copies or derivatives unless their governing decision is committed to the repository.

## Authority order

**01-MASTER-DESIGN-SPEC → applicable OPTION FILE → 02-DECISIONS-LOG → 13-EQUIPMENT-INVENTORY → 10-PARAMETRIC-MODELING-PLAN → 06-PRESENTATION-SPEC → 07-RENDERING-CONTROLS → 08-RENDER-BRIEF-MATRIX → 09-VISUAL-QA-REGISTER → chat discussion**

- If a chat summary conflicts with a canonical file, the file wins.
- If a rendering conflicts with a canonical file, the rendering is wrong.
- Reference images establish visual direction only; they do not establish geometry, equipment or construction.
- Nothing becomes authoritative merely because it appeared in a chat, drawing or rendering.
- When Mike approves a design change, update the Master Design Spec or applicable Option File and the Decisions Log before any downstream work continues.

## Canonical file set

| File | Purpose |
| --- | --- |
| `00-PROJECT-BOOTSTRAP.md` | Deterministic startup and authority rules |
| `01-MASTER-DESIGN-SPEC.md` | All shared geometry, equipment, utilities, workflow, materials and operating requirements |
| `02-DECISIONS-LOG.md` | Dated approved, conditional, superseded and open decisions |
| `03-OPTION-A.md` | Sole active design; historical Option A name retained, all equipment unplaced |
| `04-OPTION-B.md` | Superseded Option B history; no downstream design work |
| `05-OPTION-C.md` | Superseded Option C history; no downstream design work |
| `06-PRESENTATION-SPEC.md` | Active nine-page Option A presentation structure and visual rules |
| `07-RENDERING-CONTROLS.md` | Non-negotiable controls for future image generation |
| `08-RENDER-BRIEF-MATRIX.md` | Locked image-by-image purposes, camera, option, state and compliance requirements |
| `09-VISUAL-QA-REGISTER.md` | Candidate-image approval/rejection history and release status |
| `10-PARAMETRIC-MODELING-PLAN.md` | Canonical parametric geometry and concept-to-construction workflow |
| `13-EQUIPMENT-INVENTORY.md` | Active equipment-list gate; all listed items remain unplaced until explicit approval |

Only these twelve files are design authority. Archived working files, source photographs and prior conceptual images are supporting evidence only.

## Current phase and prohibitions

- Active scope: design **Option A only** for personal/private use. Options B and C are superseded and may not receive new drawings, renderings, equipment coordination or presentation production.
- The shell is a fixed design restriction: use the 120 × 60 × 84-inch exterior and 114 × 56 × 76-inch finished-clear planning envelopes. Do not widen, lengthen or enlarge the design to solve fit conflicts. A smaller measured donor forces reduction or recoordination; a larger donor does not enlarge the approved design without a new explicit decision.
- Current phase: **equipment inventory only**. Complete and explicitly approve `13-EQUIPMENT-INVENTORY.md` before assigning any equipment to a wall, zone, sequence or coordinate.
- Use basis: personal/private operation, not public vending or a commercial mobile-food-facility program. Former SFDPH/HCD/SFFD commercial requirements remain archived references and are not active design gates unless the intended use changes. This scope decision is not a legal determination; roadworthiness, structural, electrical, plumbing, fire, towing and alcohol-safety responsibilities remain.
- Controlling side terminology: **driver side = customer/service side**; **passenger side = non-customer/utility side**. D1 is on the passenger/utility side and the new service window is on the driver/customer side. Do not use `curb` or `street` as side labels in new work.
- Mike approved the coordinated concept-specification review on September 6, 2026. This approval authorizes presentation planning but not fabrication, procurement or image generation.
- Mike explicitly released the project-wide rendering hold on September 7, 2026. Image production may proceed only under `07-RENDERING-CONTROLS.md` and its asset-specific holds.
- Option A retains the donor side door and rear double doors as the base-shell egress candidates. All earlier equipment distributions, including the 90-inch and 60-inch studies, are superseded. Placement will restart from an empty fixed-shell model after inventory approval. No automatic roof escape hatch is included.
- Do not order fitted equipment, release cabinetry, cut the trailer or issue fabrication drawings from the current concept package.
- The actual trailer has not been acquired or measured. All stated trailer dimensions remain controlled concept assumptions unless explicitly marked verified.
- The **Fabrication Shell** is the approved provisional spatial-control state for Gate 2 coordination. It remains **NOT FOR FABRICATION** until reconciled to the VIN-specific survey and approved reinforcement; provisional coordinates may not be released as cut lines.

## Required response behavior in a new chat

After bootstrap, answer from the canonical files without making the user re-explain the project. If a required fact is absent:

1. Identify it as open rather than guessing.
2. Recommend a specific decision if appropriate.
3. Do not represent the recommendation as approved until the canonical files are updated.

## Change-control sequence

1. Discuss and evaluate the proposed change.
2. Obtain Mike’s explicit approval.
3. Update the Master Design Spec or applicable Option File.
4. Add a dated entry to the Decisions Log.
5. Update Presentation or Rendering controls if affected.
6. Update the applicable image brief and visual QA record when affected.
7. Commit the changes to the authoritative GitHub repository.
8. Only then resume downstream plans, images or documents.
