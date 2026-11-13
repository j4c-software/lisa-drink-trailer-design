# Lisa Drink Trailer — Parametric Modeling and Concept-to-Construction Plan

**Revision:** 2.0 — September 25, 2026
**Status:** OPTION A-ONLY CANONICAL WORKFLOW — EQUIPMENT INVENTORY GATE ACTIVE
**Purpose:** Establish the controlled path from pre-purchase concept design to consistent mockups, trailer selection, measured redesign and eventual construction documentation.

## 1. Governing principle

The project will no longer rely on independently generated illustrations, elevations or perspective images to establish geometry.

The approved design intent remains governed by the Master Design Spec, Option A file and Decisions Log. Options B and C are superseded historical references. Future Option A plans, elevations, sections and presentation views must be derived from a single dimensionally controlled 3D master model wherever geometry is represented.

The exterior **120 × 60 × 84-inch** and finished-clear **114 × 56 × 76-inch** envelopes are fixed design restrictions. The model may not enlarge them to solve fit conflicts.

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
3. `03-OPTION-A.md` governs the sole active option-specific design intent; `04-OPTION-B.md` and `05-OPTION-C.md` are history only.
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

## 4. Phase 2 — Provisional fabrication shell definition

Immediately after Gate 1, derive a separate controlled state from the approved provisional envelope:

**Lisa Trailer — Fabrication Shell • PROVISIONAL / NOT FOR FABRICATION**

This step comes before interior placement because the service-window opening, its reinforcement reserve, the wall assembly and the retained structural bands determine the genuinely usable space available to counters, equipment, circulation and utilities.

The model must keep three independently visible and exportable layers:

```text
FABRICATION SHELL
|
|-- Existing retained shell
|-- Removal / cut geometry
`-- New reinforced construction
```

The first and primary feature is the **driver / customer-side** service-window cutout. At provisional maturity, define and visibly classify:

- one Option A opening disposition that retains W1 on both sides as fixed sealed glazing and removes/structurally infills W2, W3 and W4 before locating the new cutout;
- a rear-door conversion layer that closes both leaves' open-air/barred upper portions, reserves a W2-sized fixed window in one Option A-coordinated leaf, leaves the other leaf solid and preserves both leaves' egress hardware and swing;
- a common 30-inch nominal D1 on the **passenger / non-customer / utility side** as a purchase-selection assumption, holding the tongue-side jamb, extending toward the wheels and opening outward; keep hinge side unknown and protect swing/approach clearance for either hinge direction until donor verification;
- the exterior and interior coordinate datums;
- the design-intent rough opening, initially no greater than the approved 60 × 30-inch concept maximum;
- proposed cutout X position, sill elevation and remaining front/rear/header bands;
- candidate cut-line corner radii;
- assumed wall thickness/curvature and explicit unknown post, rail, seam and roof-load-path zones;
- reserved volumes for the future header, full-height jambs, sill/bottom member and connections;
- lift-up hatch frame, hinge, gas-strut, wind-restraint and travel-latch envelopes;
- customer-ledge attachment, drainage, flashing, seals and finish-return envelopes; and
- the resulting finished usable interior boundary against which later equipment and option geometry will be tested.

Provisional outputs:

1. exterior fabrication-intent elevation with dimensioned proposed opening;
2. interior structural-reserve elevation;
3. schematic sill, jamb and header sections;
4. retained / remove / new layer legend;
5. usable-space overlay showing wall, reinforcement, hatch and ledge intrusions; and
6. a complete VERIFY/UNKNOWN schedule identifying every value that must be replaced after acquisition.

The provisional Fabrication Shell may guide spatial design but may not provide a 1:1 cut file, final reinforcement size, connection detail or fabrication release.

At provisional maturity, the header, both full-height jambs and sill/bottom member are modeled as continuous protected exclusion zones with dimensions marked **UNKNOWN**. Equipment, cabinetry, utilities, hatch hardware and finish-dependent attachments may not enter those zones. Cut-line corner radii also remain **UNKNOWN** until the hatch frame and fabrication method are selected.

Use the approved 114 × 56 × 76-inch finished-clear envelope as the provisional usable-space boundary. Preserve two inches nominal at each sidewall and preserve the eight-inch combined floor-plus-roof/ceiling allowance without assigning its split. Locate the service-window sill from finished floor. Actual assembly layers remain unknown and must replace these allowances after donor survey; conversion geometry may not expand into them.

Model the hatch and customer ledge as exterior-only operating and travel envelopes: top-hinged hatch opening outward/upward; future supports, wind restraint and travel latches; 14–16-inch operating ledge folded or removed for travel; and exterior flashing, seal and drainage reserves. Permit no intrusion into the 56-inch finished-clear interior. Keep exact frame size, hardware locations, loads and attachments unknown until product selection and structural review.

Show a passenger/non-customer-side utility reserve rather than individual penetrations. Keep potable fill, wastewater service and weather-protected shore power separate, and keep the driver/customer wall free of service connections. Exact coordinates remain unknown until structure, equipment and routing are coordinated. Exclude D1 swing/approach, rear doors, running gear/chassis, road lighting, structural members and service-window reinforcement. A provisional reserve does not authorize a hole or cut.

Treat HVAC as optional. Show only a conditional low-profile roof-unit reserve near the lateral centerline and longitudinally near the axle group, not installed equipment. Keep the product, opening and coordinates unknown until operating need, heat load, roof bows, service-hatch/header clearance, road height, condensate and weight balance are verified. Reserve relief/exhaust high on the passenger/utility side or roof toward the rear work zone. Show no base roof hatch and no roof cut; any later authority-required roof exit forces re-coordination.

Keep frame rails, crossmembers, internal wheel wells and tire/suspension travel clearances as protected unknown geometry. Do not place floor penetrations or let equipment/cabinetry depend on assumed empty space. Preserve running-gear service access. Show potable/waste tanks only as low centered planning zones near the axle group, with dimensions, supports and mounts unknown until chassis, capacity and weight verification. No provisional floor hole or mounting coordinate is released.

### Phase 2 review status

The provisional Fabrication Shell is approved as the spatial-control basis. Equipment placement remains separately blocked by the active inventory gate.

---

## 5. Phase 3 — Dimensional conversion specification

**CURRENTLY PAUSED FOR EQUIPMENT INVENTORY.** After the inventory is explicitly approved, translate the approved list into explicit geometric parameters and begin with an empty fixed-shell model. Do not reuse the superseded placement study as a starting layout.

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

## 6. Phase 4 — Parametric master shell

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

## 7. Phase 5 — Option A configuration

Build and verify Option A within the fixed common shell. Do not create new B/C configurations.

For each option, derive directly from the model:

- one plan view
- service-wall interior elevation
- opposite-wall interior elevation
- front-wall interior elevation
- rear-wall interior elevation

This produces the active geometric set of:

- **1 plan**
- **4 interior elevations**

These views must be orthographic projections of the same model geometry. They must not be independently redrawn or independently interpreted by image generation.

### Gate 4

For Option A, perform a consistency audit covering:

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

Approve Option A before presentation views are generated from it.

---

## 8. Phase 6 — Controlled presentation mockups

After the model passes Gate 4, establish fixed Option A cameras.

Recommended common views include:

- customer-side exterior
- service-window interior
- rear looking forward
- front looking rearward
- bartender/workflow perspective

All Option A views should use consistent camera logic, scale and shell geometry.

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

## 9. Phase 7 — Trailer purchasing specification

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
- clearance needed for the Option A equipment layout

The purpose is to evaluate candidate trailers against the conversion design before purchase.

---

## 10. Phase 8 — Candidate trailer verification before purchase

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

## 11. Phase 9 — Purchased-trailer survey and fabrication-shell reconciliation

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

Reconcile the provisional Fabrication Shell to the As Measured shell without overwriting either source state. Replace all provisional opening, wall, structure and usable-space assumptions with measured values. Then complete:

1. exterior cut elevation with a single fabricator datum and cut-point table;
2. interior structural elevation identifying retained, removed and new members;
3. sill, jamb and header sections through the actual curved wall assembly;
4. demolition limits and temporary bracing sequence;
5. opening and reinforcement schedule with material, section, thickness and connection specifications supplied or approved by the responsible engineer/fabricator;
6. hatch, hinge, strut, latch, ledge, flashing, drainage, seal and finish-return details;
7. fabrication-ready vector/CAD export at 1:1 units plus a dimensioned PDF control sheet; and
8. signed release record identifying measured-model revision, Fabrication Shell revision and approving parties.

### Gate 5 — Design freeze

No construction-document or structural-cut release occurs until the measured model is reconciled, the Fabrication Shell is coordinated, the selected design is frozen and the service-window reinforcement has responsible engineer/fabricator approval. This gate coordinates with the Master Design Spec's **G5 — Structural cut** hold point.

---

## 12. Phase 10 — Construction documentation

After Gate 5, generate or develop the fabrication-document package from the approved Fabrication Shell, with the As Measured model retained as the immutable existing-condition reference.

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

## 13. Modeling-system selection criteria

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

## 14. iPad role

The iPad Pro is primarily an approval and review interface in this workflow.

Expected iPad tasks:

- rotate and inspect the 3D model
- review plan/elevation sheets
- review the Option A configuration against the fixed shell
- mark up conflicts
- approve/reject design changes
- review candidate-trailer fit

The user is not required to manually reproduce the model in an iPad CAD application.

---

## 15. Immediate next action

The Phase 2 provisional Fabrication Shell is approved as the fixed spatial-control basis. The immediate task is to complete and explicitly approve `13-EQUIPMENT-INVENTORY.md`. Do not create, revise or optimize equipment placement during this step. After approval, open a clean fixed-shell model with all equipment absent and begin placement from scratch.

The register must expose every material dimensional assumption and label it:

- VERIFIED REFERENCE
- ESTIMATED
- DESIGN ASSUMPTION
- UNKNOWN

The next review objective is to complete and explicitly approve the equipment inventory without assigning spatial relationships.

---

## 16. Current release state

As of September 25, 2026:

- the actual donor trailer has **not** been purchased or physically measured;
- the Circle J two-horse straight-load platform remains the representative concept basis;
- Phase 1 / Gate 1 is approved for purchase-selection mockups only;
- Option A is the sole active design; B/C drawings are historical references only;
- existing Option A equipment drawings are superseded placement studies and may not drive new work;
- those drawings are **not** fabrication drawings;
- future geometry-controlled mockups are to be regenerated from the approved parametric master once built;
- the Phase 2 provisional Fabrication Shell is the approved spatial-control state and defines the Option A service-window design intent plus fixed usable-space boundary;
- the active review state is equipment inventory only; all equipment and system placement remains unset;
- construction documentation and structural cutting remain blocked until that state is reconciled to the acquired trailer's survey, completed with approved reinforcement and released through Gate 5.
