# Lisa Drink Trailer — Project Bootstrap

**Revision:** 1.5 — September 7, 2026  
**Status:** REQUIRED ENTRY POINT FOR EVERY NEW CHAT

## Mandatory bootstrap rule

Before making recommendations, changing specifications, producing presentation content or generating images:

1. Read this file in full.
2. Read `01-MASTER-DESIGN-SPEC.md` in full.
3. Read the applicable option file: `03-OPTION-A.md`, `04-OPTION-B.md` or `05-OPTION-C.md`.
4. Read `02-DECISIONS-LOG.md`.
5. For presentation work, read `06-PRESENTATION-SPEC.md`.
6. For any visual or rendering work, read `07-RENDERING-CONTROLS.md` immediately before the work.
7. For any specific image, read its locked entry in `08-RENDER-BRIEF-MATRIX.md`.
8. Before accepting or reusing a generated candidate, check and update `09-VISUAL-QA-REGISTER.md`.
9. Internally summarize the current locked design state and check for unresolved holds before acting.

Do not reconstruct a specification from chat history, project memory, a prior summary, a reference image or a rendering when a canonical file exists.

### Project-configuration requirement

The ChatGPT Project Instructions must contain this directive:

> Before doing any work, read `00-PROJECT-BOOTSTRAP.md` and follow its required reading order and authority hierarchy. Do not reconstruct design specifications from chat memory or prior summaries. Do not generate images until the canonical rendering hold has been explicitly released.

The file cannot force itself to be opened. This project-level directive is what makes the bootstrap automatic in each new chat.

## Repository authority

The public GitHub repository `j4c-software/lisa-drink-trailer-design` is the sole authoritative project record. Chat transcripts, ChatGPT Library copies, local workspace copies, generated images and exported presentations are working copies or derivatives unless their governing decision is committed to the repository.

## Authority order

**01-MASTER-DESIGN-SPEC → applicable OPTION FILE → 02-DECISIONS-LOG → 06-PRESENTATION-SPEC → 07-RENDERING-CONTROLS → 08-RENDER-BRIEF-MATRIX → 09-VISUAL-QA-REGISTER → chat discussion**

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
| `03-OPTION-A.md` | Approved differences for rear-wall service Option A |
| `04-OPTION-B.md` | Approved differences for single-bartender Option B |
| `05-OPTION-C.md` | Approved differences for conditional two-bartender Option C |
| `06-PRESENTATION-SPEC.md` | Locked 24-page presentation structure and visual rules |
| `07-RENDERING-CONTROLS.md` | Non-negotiable controls for future image generation |
| `08-RENDER-BRIEF-MATRIX.md` | Locked image-by-image purposes, camera, option, state and compliance requirements |
| `09-VISUAL-QA-REGISTER.md` | Candidate-image approval/rejection history and release status |

Only these ten files are design authority. Archived working files, source photographs and prior conceptual images are supporting evidence only.

## Current phase and prohibitions

- Current phase: approved concept specification; presentation visual production authorized.
- Mike approved the coordinated concept-specification review on September 6, 2026. This approval authorizes presentation planning but not fabrication, procurement or image generation.
- Mike explicitly released the project-wide rendering hold on September 7, 2026. Image production may proceed only under `07-RENDERING-CONTROLS.md` and its asset-specific holds.
- Option A assumes no usable street-side staff door: any existing horse/escape door is permanently infilled through engineered construction. Rear double doors serve as the staff entrance/primary exit, with a standard listed 24 × 36-inch minimum roof escape hatch reserved as the second egress, subject to approval.
- Do not order equipment, release cabinetry, cut the trailer, issue fabrication drawings or submit permit drawings from the current concept package.
- The actual trailer has not been acquired or measured. All stated trailer dimensions remain controlled concept assumptions unless explicitly marked verified.

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
