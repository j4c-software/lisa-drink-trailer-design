# Lisa Drink Trailer — Parametric Modeling and Concept-to-Construction Plan

**Revision:** 1.0 — September 7, 2026  
**Status:** CANONICAL WORKFLOW  
**Purpose:** Establish the controlled path from pre-purchase concept design to consistent mockups, trailer selection, measured redesign and eventual construction documentation.

## 1. Governing principle

The project will no longer rely on independently generated illustrations, elevations or perspective images to establish geometry.

The approved design intent remains governed by the Master Design Spec, Option A/B/C files and Decisions Log. However, future plans, elevations, sections and presentation views must be derived from a single dimensionally controlled 3D master model wherever geometry is represented.

The master model is initially **provisional** because the actual donor trailer has not yet been purchased or measured.

The project therefore uses two accuracy milestones:

1. **Purchase-selection accuracy** — a geometrically consistent, dimensionally credible model based on a representative Circle J two-horse straight-load trailer and explicit assumptions.
2. **Construction accuracy** — a VIN-specific model updated from physical measurements of the acquired trailer and then used as the basis for fabrication documentation.

No provisional geometry is to be represented as field-verified construction geometry.

---

## 2. Source-of-truth hierarchy

Until an actual trailer is acquired:

1. `01-MASTER-DESIGN-SPEC.md` governs shared design requirements.
2. `02-DECISIONS-LOG.md` governs approved decisions and supersessions.
3. `03-OPTION-A.md`, `04-OPTION-B.md`, and `05-OPTION-C.md` govern option-specific design intent.
4. This document governs the modeling and concept-to-construction workflow.
5. The parametric master model governs geometric consistency once created and approved at the applicable gate.
6. Existing SVG concept drawings remain approved concept references, but they are not fabrication drawings and are not to override verified model geometry after the parametric master is approved.
7. Presentation renderings must conform to the approved model geometry and the rendering-control documents.

After the donor trailer is acquired and surveyed, the measured VIN-specific model becomes the geometric source of truth for construction development.

---

## 3. Phase 1 — Provisional trailer envelope

Create a master dimensional parameter register for the representative Circle J two-horse straight-load bumper-pull trailer.

Each shell parameter must carry one status:

- **VERIFIED REFERENCE** — supported by a reliable reference for the representative trailer.
- **ESTIMATED** — inferred from photographs, comparable trailers or incomplete documentation.
- **DESIGN ASSUMPTION** — intentionally selected to permit concept development.
- **UNKNOWN** — not yet supportable and not safe to infer.

The register should include at minimum:

### Shell
- interior usable length
- interior clear width
- interior clear height
- floor elevation above grade
- wall thickness assumption
- roof profile/radius
- front/nose geometry

### Chassis and obstructions
- axle group position
- wheel-well length, width and height
- fender envelope
- tongue/A-frame envelope
- likely frame rails and cross-members

### Existing openings
- rear-door clear opening
- existing side-door locations and dimensions
- existing window/opening locations
- roof opening constraints

### Structural planning zones
- likely wall posts/ribs
- likely roof bows
- protected structural zones
- candidate service-window region

### Conversion constraints
- maximum practical service-opening region
- minimum required aisle
- counter-depth envelope
- headroom envelope
- utility-routing zones

### Gate 1

Approve the provisional envelope as sufficiently representative for **purchase-selection mockups only**.

Approval at Gate 1 does not authorize fabrication, structural cutting, procurement based on fit, or permitting.

---

## 4. Phase 2 — Dimensional conversion specification

Translate the approved written design into explicit geometric parameters.

Typical controlled parameters include:

- service-window width and height
- service-window sill height
- customer-ledge depth and elevation
- production-counter depth and height
- back-bar depth and height
- sink envelopes
- hand-sink envelope
- refrigeration envelope
- ice-storage envelope
- blender/removable-equipment envelope
- cabinet modules
- glass-storage envelope
- bartender clear aisle
- staff-door clearances
- rear-door clearance
- roof-escape-hatch clearance where applicable
- lighting fixture locations
- plumbing/electrical service zones

Equipment is initially modeled as dimensionally correct envelopes unless detail is necessary for interference or presentation purposes.

A listed 24 × 24 × 34-inch appliance, for example, must occupy the same controlled volume in every applicable view.

### Gate 2

Approve the dimensional parameter register and identify all remaining VERIFY/UNKNOWN items before constructing option geometry.

---

## 5. Phase 3 — Parametric master shell

Build one code-driven or otherwise reliably parametric 3D shell from the approved Phase 1 parameters.

The model must keep trailer geometry separate from conversion geometry.

Recommended logical structure:

```text
MASTER TRAILER
|
|-- Provisional shell
|-- Chassis / wheel-well constraints
|-- Existing openings
|-- Structural planning zones
|-- Utility planning zones
|
|-- OPTION A conversion geometry
|-- OPTION B conversion geometry
`-- OPTION C conversion geometry
```

Critical trailer dimensions must be exposed as editable parameters rather than buried in manually redrawn geometry.

The modeling system should permit a later change such as:

```text
INTERIOR_WIDTH = provisional value -> measured value
```

without rebuilding the project from scratch.

### Gate 3

Verify the empty master shell against the approved provisional parameter register before option geometry proceeds.

---

## 6. Phase 4 — Option A/B/C configurations

Build the three approved design options as configurations within the common shell.

Develop and verify one option at a time.

For each option, derive directly from the model:

- one plan view
- service-wall interior elevation
- opposite-wall interior elevation
- front-wall interior elevation
- rear-wall interior elevation

This produces the required geometric comparison set of:

- **3 plans**
- **12 interior elevations**

These views must be orthographic projections of the same model geometry. They must not be independently redrawn or independently interpreted by image generation.

### Gate 4

For each option, perform a consistency audit covering:

- shell dimensions
- service-window geometry
- wall-opening positions
- equipment dimensions and positions
- counter dimensions
- aisle width
- door/egress clearance
- wheel-well interference
- ceiling/headroom interference
- option-specific workflow
- utility-zone conflicts

Approve each option before presentation views are generated from it.

---

## 7. Phase 5 — Controlled presentation mockups

After the model passes Gate 4, establish fixed comparison cameras.

Recommended common views include:

- customer-side exterior
- service-window interior
- rear looking forward
- front looking rearward
- bartender/workflow perspective

Corresponding A/B/C views should use matching camera logic, scale and shell geometry.

The 3D model controls all hard geometry.

Photorealistic rendering or image-generation tools may be used for:

- materials
- lighting character
- people
- landscaping/event context
- atmosphere
- non-geometric decorative detail

They must not independently redefine:

- window position or size
- counter position or depth
- sink/equipment position
- doors
- walls
- wheel wells
- clearances
- trailer proportions

Any presentation image that conflicts with the approved model is rejected regardless of visual quality.

---

## 8. Phase 6 — Trailer purchasing specification

Use the approved provisional model to derive a **donor-trailer fit specification**.

The purchasing specification should identify minimum or maximum acceptable values for critical shell dimensions, including as applicable:

- minimum interior clear width
- minimum interior clear height
- minimum usable interior length
- acceptable wheel-well envelope
- minimum rear-door opening
- required unobstructed service-wall region
- acceptable axle/fender relationship
- structural regions that cannot conflict with the proposed service opening
- clearance needed for Option A/B/C equipment layouts

The purpose is to evaluate candidate trailers against the conversion design before purchase.

---

## 9. Phase 7 — Candidate trailer verification before purchase

When a candidate trailer is located, do not rely solely on make/model similarity.

Create a candidate-measurement checklist for the seller, dealer or in-person inspection.

Request:

- standardized photographs
- VIN/year/model where available
- approximately 15–25 critical measurements
- visible framing/opening information where safely obtainable

Create a temporary candidate shell using those dimensions.

Run the approved configurations against the candidate shell and classify the result:

- **FIT** — conversion fits within current assumptions with no material conflict identified.
- **FIT WITH MODIFICATIONS** — feasible but requires identified design adaptation.
- **REJECT** — critical geometry or structure is incompatible with the intended conversion.

This is a purchase-screening tool, not a substitute for engineering or final field measurement.

---

## 10. Phase 8 — Purchased-trailer survey

After acquisition, replace provisional shell assumptions with a physical survey of the actual trailer.

Record at minimum:

- VIN/year/model
- actual interior dimensions
- frame and cross-member locations
- wall posts/ribs
- roof bows
- floor construction
- wheel wells
- doors and windows
- axle ratings and GVWR
- tongue/frame geometry
- visible structural condition
- utility-routing constraints

Create the controlled model state:

**Lisa Trailer — As Measured**

Run all approved conversion geometry against the measured shell and resolve any interferences.

### Gate 5 — Design freeze

No construction-document release occurs until the measured model is reconciled and the selected design is frozen.

---

## 11. Phase 9 — Construction documentation

After Gate 5, generate or develop the fabrication-document package from the measured model.

Expected documents may include:

- dimensioned floor plan
- interior elevations
- exterior elevations
- sections
- demolition/removal plan
- new-opening/framing plan
- cabinetry/counter dimensions
- equipment schedule
- plumbing diagram
- electrical/lighting plan
- utility penetrations
- finish/material schedule
- mounting/attachment details
- travel-restraint details
- life-safety/egress information

The design model does not substitute for professional or authority review where required.

Structural modifications, axle/loading verification, electrical compliance, plumbing/health compliance, propane work if any, fire/life-safety requirements, accessibility requirements and stamped engineering remain subject to the appropriate fabricator, engineer, licensed trade or authority having jurisdiction.

---

## 12. Modeling-system selection criteria

Do not choose the modeling platform primarily because it is convenient on iPad.

Select the simplest system that reliably provides:

1. exact parameter-driven 3D geometry;
2. deterministic regeneration after parameter changes;
3. orthographic plan/elevation/section generation;
4. consistent perspective views from fixed cameras;
5. useful export to standard interchange formats such as STEP, DXF, SVG and PDF where practical;
6. a path into conventional CAD/fabrication workflows later;
7. model review on iPad or browser without requiring the iPad to be the authoring machine.

Code-driven modeling systems such as FreeCAD scripting, OpenSCAD or comparable parametric approaches should be evaluated before purchasing a commercial CAD subscription.

---

## 13. iPad role

The iPad Pro is primarily an approval and review interface in this workflow.

Expected iPad tasks:

- rotate and inspect the 3D model
- review plan/elevation sheets
- compare A/B/C configurations
- mark up conflicts
- approve/reject design changes
- review candidate-trailer fit

The user is not required to manually reproduce the model in an iPad CAD application.

---

## 14. Immediate next action

Before any new geometry or presentation rendering is produced, create the **Master Dimensional Parameter Register** for Phases 1 and 2.

The register must expose every material dimensional assumption and label it:

- VERIFIED REFERENCE
- ESTIMATED
- DESIGN ASSUMPTION
- UNKNOWN

The first review objective is to identify hidden contradictions or unsupported dimensions before they propagate into the parametric master.

---

## 15. Current release state

As of September 7, 2026:

- the actual donor trailer has **not** been purchased or physically measured;
- the Circle J two-horse straight-load platform remains the representative concept basis;
- existing approved SVG drawings remain valid concept references;
- those drawings are **not** fabrication drawings;
- future geometry-controlled mockups are to be regenerated from the approved parametric master once built;
- construction documentation remains blocked until the actual trailer is acquired, surveyed and reconciled through Gate 5.
