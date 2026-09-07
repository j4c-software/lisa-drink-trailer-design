# Lisa Drink Trailer — Master Dimensional Parameter Register

**Revision:** 0.2 — September 7, 2026
**Status:** DRAFT — AWAITING GATE 1 AND GATE 2 APPROVAL
**Purpose:** Provisional dimensional source for purchase-selection modeling and conversion coordination before the donor trailer is acquired and measured

## 1. Authority and permitted use

This register implements the immediate next action in `10-PARAMETRIC-MODELING-PLAN.md`. It translates the current canonical written design into explicit parameters without changing any approved requirement.

This draft is not yet canonical and does not override the Master Design Spec, Option A/B/C files or Decisions Log. If this register conflicts with those files, the canonical file wins and the conflict must be resolved before approval.

Until Gate 1 and Gate 2 approval, this register may be used only to:

- audit dimensional completeness and consistency;
- evaluate modeling systems;
- construct non-released test geometry; and
- identify measurements required for candidate-trailer screening.

It may not be used to authorize purchase, structural cutting, equipment procurement, cabinetry release, fabrication, permitting or construction documentation.

## 2. Governing sources

| Code | Source | Use in this register |
|---|---|---|
| MDS | `01-MASTER-DESIGN-SPEC.md`, Revision 4.2 | Shared envelope, equipment, clearance and regulatory dimensions |
| DL | `02-DECISIONS-LOG.md`, Revision 2.6 | Approved parametric-workflow decision and current holds |
| OA | `03-OPTION-A.md`, Revision 1.8 | Option A geometry and equipment sequence |
| OB | `04-OPTION-B.md`, Revision 1.7 | Option B geometry and equipment sequence |
| OC | `05-OPTION-C.md`, Revision 1.7 | Conditional Option C geometry and equipment sequence |
| PMP | `10-PARAMETRIC-MODELING-PLAN.md`, Revision 1.0 | Parameter classifications, modeling phases and approval gates |
| REF-54738 | Documented 1989 Circle J two-horse straight-load bumper-pull reference, Horse Trailer Trader stock 54738 | Representative exterior dimensions and visual platform reference only |
| PRE-PIN-290763719708099062 | [Pinterest “Double horse box trailer dimensions” plan](https://ar.pinterest.com/pin/290763719708099062/) | Non-governing comparable-layout precedent only; not evidence of REF-54738 or the future donor trailer |
| EXT-BOSCH | [Bosch Tronic 3000T installation manual](https://www.bosch-homecomfort.com/ca/media/country_pool/documents/installation-manuals/6720801072_tronic3000t_es2.5-4-8_iom_en_sp_06.2024.pdf), 2024/06 | ES4 physical envelope and installation orientation; checked September 7, 2026 |
| EXT-PENTAIR | [Pentair Shurflo marine catalog](https://www.pentair.com/content/dam/extranet/web/nam/shurflo/catalogs/shurflo-emea-marine-catalog.pdf) | Aqua King II 4148-153-E75 physical envelope; checked September 7, 2026 |
| EXT-REGENCY | [Regency 60B2101413RK specification sheet](https://www.webstaurantstore.com/documents/specsheets/regency_tables_sinks_60b2101413rk_specsheet.pdf) | A/B sink overall and work-surface dimensions; checked September 7, 2026 |
| EXT-KROWNE | [Krowne KR19-22C product specification](https://www.webstaurantstore.com/krowne-royal-series-kr19-22c-2-bowl-underbar-sink-with-faucet-24-x-19/75BKR1922C.html) | Option C sink overall and work-surface dimensions; checked September 7, 2026 |
| EXT-SQUARE | [Square Terminal technical specifications](https://squareup.com/us/en/hardware/terminal/specs) | POS physical envelope; checked September 7, 2026 |
| EXT-SUMMIT | [Summit FF1843BIF product specification](https://www.summitappliance.com/catalog/model/FF1843BIF) | Refrigerator closed/open envelopes and latch-width effect; checked September 7, 2026 |

Existing SVG drawings are coordination references, not dimensional sources. No dimension has been inferred from SVG scale or generated imagery in this revision.

## 3. Parameter rules

### 3.1 Required status values

| Status | Meaning |
|---|---|
| **VERIFIED REFERENCE** | Supported for the representative reference trailer, but not verified for the future donor trailer |
| **ESTIMATED** | Inferred from incomplete documentation, photographs or comparable trailers |
| **DESIGN ASSUMPTION** | Intentionally selected to permit controlled concept development |
| **UNKNOWN** | Not supportable yet and not safe to infer |

No parameter in this pre-acquisition register is field-verified for the future donor trailer.

### 3.2 Units and model conventions

- Linear dimensions are inches unless explicitly stated otherwise.
- Weight is pounds; liquid volume is US gallons.
- Front means tongue end; rear means double-door end.
- Curb means customer/service-window side; street means opposite/utility side.
- The provisional interior coordinate system is: `X` front-to-rear, `Y` street-to-curb and `Z` finished-floor-up.
- `X = 0` is the inside face of the finished front/nose datum at floor level.
- `Y = 0` is the provisional interior centerline.
- `Z = 0` is the provisional finished floor.
- A range is not permission for the modeler to choose silently. The `Provisional model input` column controls the first model; alternatives require a recorded revision.
- `TBD` means the parameter remains intentionally unset and dependent geometry must not be released.

## 4. Representative reference record

These values describe only the documented reference trailer. They are retained separately so a design assumption is never mislabeled as a verified reference.

| ID | Parameter | Reference value | Status | Source | Notes |
|---|---|---:|---|---|---|
| REF-001 | Exterior body length | 120 | VERIFIED REFERENCE | MDS / REF-54738 | Excludes tongue |
| REF-002 | Exterior body width | 60 | VERIFIED REFERENCE | MDS / REF-54738 | Reference listing dimension |
| REF-003 | Exterior body height | 81.6 | VERIFIED REFERENCE | MDS / REF-54738 | Source states 6.8 ft; retained without rounding |
| REF-004 | Trailer type | Two-horse, straight-load, bumper-pull | VERIFIED REFERENCE | MDS / REF-54738 | Configuration, not a dimension |
| REF-005 | Exact wheelbase, post locations, frame sections and opening sizes | TBD | UNKNOWN | MDS | Explicitly prohibited uses of the photo proxy |
| REF-006 | Front axle center aft of front body datum | Approximately 68 | ESTIMATED | REF-54738 photo 001 scaled against REF-001 | Photo-derived visualization input; allow at least ±3 inches pending direct measurement |
| REF-007 | Rear axle center aft of front body datum | Approximately 100 | ESTIMATED | REF-54738 photo 001 scaled against REF-001 | Photo-derived visualization input; allow at least ±3 inches pending direct measurement |
| REF-008 | Axle spacing | Approximately 32 | ESTIMATED | Difference of REF-006 and REF-007 | Photo-derived visualization input; allow at least ±2 inches pending direct measurement |
| REF-009 | Tire outside diameter | Approximately 29 | ESTIMATED | REF-54738 photos 001 and 004 | Visual range approximately 28–31 inches; tire specification remains unknown |
| REF-010 | Overall width over fenders | Approximately 78 | ESTIMATED | REF-54738 rear photo 004 scaled against 60-inch body width | Reference estimate only; SH-005 retains the 84-inch maximum clearance envelope |
| REF-011 | Fender longitudinal envelope aft of front body datum | Approximately 54–120 | ESTIMATED | REF-54738 photo 001 | Photo-derived outer envelope; internal wheel-well geometry remains unknown |
| REF-012 | Visible tongue projection from front body datum to coupler region | Approximately 34–40 | ESTIMATED | REF-54738 photo 001 scaled against REF-001 | Perspective-limited; SH-009 retains 48 inches as the conservative clearance-planning assumption |
| REF-013 | Curb-side front-corner small-window longitudinal envelope | Approximately X 0–15 | ESTIMATED | REF-54738 photos 001 and 003 scaled against REF-001 | Visible outer opening envelope only; wraps the curved front corner; approximately 15 W × 9–10 H |
| REF-014 | Curb-side forward small-window longitudinal envelope | Approximately X 22–43 | ESTIMATED | REF-54738 photo 001 scaled against REF-001 | Visible outer opening envelope only; approximately 21 W × 9–10 H |
| REF-015 | Curb-side large rear-window longitudinal envelope | Approximately X 74–118 | ESTIMATED | REF-54738 photo 001 scaled against REF-001 | Visible outer opening envelope only; approximately 44 W × 14–16 H |
| REF-016 | Street-side escape-door outer frame envelope | Approximately X 15–38 | ESTIMATED | REF-54738 photo 002 mapped to the 120-inch listed body | Highly oblique view; approximately 22 ±4 W × 72 ±4 H; clear opening remains unknown |
| REF-017 | Street-side escape-door upper window | Approximately 5–7 W × 9–11 H | ESTIMATED | REF-54738 photo 002 | Low-confidence visible aperture estimate; position is high in the door leaf |
| REF-018 | Twin front-face windows | Approximately 20 W × 10 H each | ESTIMATED | REF-54738 photo 003 scaled against REF-002 | Perspective-limited outer opening envelopes; lateral offsets and clear sizes remain unknown |
| REF-019 | Rear portal visible opening envelope | Approximately 50 W × 78 H | ESTIMATED | REF-54738 photos 004 and 005 scaled against REF-002/REF-003 | Approximately ±3 inches; visible envelope is not a verified clear opening or structural rough opening |
| REF-020 | Rear double-door leaf face envelope | Approximately 25 W × 78 H each | ESTIMATED | REF-54738 photo 004 | Approximately ±2 W and ±3 H per leaf; center overlap, stops, seals and hardware reduce usable clearance |

The photo-derived values above were scaled manually from perspective raster images on September 7, 2026. They establish representative proportions only and are not suitable for purchase acceptance, interference approval or fabrication.

## 5. Provisional master-shell register

### 5.1 Exterior envelope

| ID | Model parameter | Provisional model input | Allowed/design range | Status | Source | Replacement trigger / note |
|---|---|---:|---:|---|---|---|
| SH-001 | Exterior body length | 120 | 120 maximum design basis | DESIGN ASSUMPTION | MDS 1A | Replace with direct donor measurement |
| SH-002 | Exterior body width | 60 | 60 maximum design basis | DESIGN ASSUMPTION | MDS 1A | Replace with widths at multiple heights |
| SH-003 | Exterior body height | 84 | 82–84 | DESIGN ASSUMPTION | MDS 1A | Conservative top of locked range; excludes rooftop equipment |
| SH-004 | Overall length including tongue | 168 | Approximately 168 | DESIGN ASSUMPTION | MDS 1A | Implies approximately 48-inch tongue projection |
| SH-005 | Overall width over fenders | 84 | 78–84 | DESIGN ASSUMPTION | MDS 1A | Use maximum for clearance planning |
| SH-006 | Overall road height with rooftop equipment | TBD | TBD | UNKNOWN | MDS 13 | Requires donor height, roof structure and selected HVAC |
| SH-007 | Ground clearance at lowest fixed point | TBD | TBD | UNKNOWN | MDS 4.2 | Direct measurement required |
| SH-008 | Floor/deck height above deployed grade | 24 | 18–24 | DESIGN ASSUMPTION | MDS 1A | Use conservative maximum for access studies |
| SH-009 | Tongue/A-frame longitudinal envelope | 48 nominal | Reference photo suggests approximately 34–40 | DESIGN ASSUMPTION | Derived from SH-004 minus SH-001; compare REF-012 | Retain conservative 48-inch clearance envelope; shape, attachment and exact coupler datum remain unknown |
| SH-010 | Front/nose plan geometry | Broad front face with rounded corners; radius TBD | TBD | ESTIMATED | MDS 1B; REF-54738 photos 001 and 003 | Visual character is supported by the locked reference; do not substitute the different R875 continuous-arc nose shown in PRE-PIN-290763719708099062; dimension the Circle J radius/tangency only when measured |
| SH-011 | Roof profile/radius | TBD | TBD | UNKNOWN | PMP 3 | Requires photo analysis for purchase model and field survey after acquisition |

### 5.2 Finished interior envelope

| ID | Model parameter | Provisional model input | Allowed/design range | Status | Source | Replacement trigger / note |
|---|---|---:|---:|---|---|---|
| IN-001 | Interior clear length | 114 | 114 design basis | DESIGN ASSUMPTION | MDS 1A | After finished wall lining |
| IN-002 | Interior clear width | 56 | 56 design basis | DESIGN ASSUMPTION | MDS 1A | Governing layout width |
| IN-003 | Interior clear centerline height | 76 | 76–80 | DESIGN ASSUMPTION | MDS 1A | Uses the conservative bottom of the locked clear-height range; 80-inch high case is secondary |
| IN-004 | Minimum clear aisle headroom | 74 | 74 minimum | DESIGN ASSUMPTION | MDS 1A, 7 | Regulatory control; verify complete aisle in low-roof case |
| IN-005 | Nominal finished sidewall thickness per side | 2 | TBD | ESTIMATED | Derived from SH-002 and IN-002 | Includes shell/lining allowance only; actual wall build-up unknown |
| IN-006 | Finished floor build-up | TBD | TBD | UNKNOWN | MDS 11 | Needed to reconcile exterior and interior vertical datums |
| IN-007 | Finished ceiling build-up | TBD | TBD | UNKNOWN | MDS 11 | Needed before equipment and headroom release |
| IN-008 | Sidewall curvature at counter height | TBD | TBD | UNKNOWN | MDS 4.3 | Measure at floor, counter, shoulder and roof-spring heights |

### 5.3 Longitudinal zones

| ID | Model parameter | Provisional model input | Allowed/design range | Status | Source | Replacement trigger / note |
|---|---|---:|---:|---|---|---|
| LZ-001 | Front employee-support nook depth | 24 | 24 | DESIGN ASSUMPTION | MDS 1A; OA/OB/OC | Open to work aisle; no partition |
| LZ-002 | Main work-zone length | 90 | 90 | DESIGN ASSUMPTION | MDS 6E; OA/OB/OC | Supports opening piers and exact equipment schedules |
| LZ-003 | Total allocated interior length | 114 | 114 | DESIGN ASSUMPTION | LZ-001 + LZ-002 | Equals IN-001; no unallocated longitudinal tolerance |
| LZ-004 | Front work-zone boundary from interior front datum | 24 | 24 | DESIGN ASSUMPTION | Derived | Start datum for service opening and equipment sequence |
| LZ-005 | Rear work-zone boundary from interior front datum | 114 | 114 | DESIGN ASSUMPTION | Derived | Coincides nominally with rear finished datum |

### 5.4 Required shell assertions

The first parametric implementation must stop with an error rather than regenerate silently when any of these assertions fails:

| Assertion | Required expression | Purpose |
|---|---|---|
| AS-001 | `LZ-001 + LZ-002 = IN-001` | Keeps the front nook and main work zone tied to the finished interior length |
| AS-002 | `2 × IN-005 + IN-002 = SH-002` only while walls are modeled as vertical proxies | Makes the inferred wall allowance explicit; disable and replace after wall sections are known |
| AS-003 | `CV-001 + CV-003 = IN-002` | Enforces the locked 24-inch counter plus 32-inch aisle arrangement |
| AS-004 | `CV-003 >= 30` at every operating projection and door position | Enforces minimum regulatory aisle width |
| AS-005 | `CV-008 + CV-005 + CV-009 = LZ-002` | Keeps the centered opening and nominal piers coordinated |
| AS-006 | `OP-001 >= 48` and `OP-002 >= 72` for the provisional rear-door case | Enforces the conservative rear-opening assumption |
| AS-007 | Option A/B module widths total 90 | Rejects accidental module drift |
| AS-008 | Option C module widths total 90 | Rejects accidental module drift |
| AS-009 | B/C opposite lower-wall floor projection = 0 | Protects the full aisle and prohibition on a second counter |
| AS-010 | No option geometry intersects a door, wheel well, egress volume, roof opening or protected structural zone | Converts unknown geometry into an explicit hold, never an assumed fit |

Unknown objects must be represented as disabled or visibly unresolved model layers. They may not be replaced with invented dimensions merely to make an option appear to fit.

### 5.5 Chassis and fixed obstructions

| ID | Model parameter | Provisional model input | Status | Source / required evidence |
|---|---|---:|---|---|
| CH-001 | Axle count | 2 | DESIGN ASSUMPTION | MDS 1A; verify axle tags and donor configuration |
| CH-002 | Axle nominal capacity, each | 3,500 lb | DESIGN ASSUMPTION | MDS 1A; unverified weight control |
| CH-003 | Front axle center from rear body datum | Approximately 52 forward of rear datum | ESTIMATED | REF-006 converted from the front datum; direct measurement required |
| CH-004 | Rear axle center from rear body datum | Approximately 20 forward of rear datum | ESTIMATED | REF-007 converted from the front datum; direct measurement required |
| CH-005 | Axle spacing | Approximately 32 | ESTIMATED | REF-008; direct measurement required |
| CH-006 | Wheel-well length | TBD | UNKNOWN | Candidate measurement and field survey |
| CH-007 | Wheel-well interior projection | TBD | UNKNOWN | Candidate measurement and field survey |
| CH-008 | Wheel-well height above finished floor | TBD | UNKNOWN | Candidate measurement and field survey |
| CH-009 | Fender envelope | X approximately 54–120 from front body datum; approximately 78 overall width | ESTIMATED | REF-010 and REF-011; candidate measurement and field survey required |
| CH-010 | Frame-rail positions/sections | TBD | UNKNOWN | Structural map required before underfloor placement |
| CH-011 | Cross-member positions/sections | TBD | UNKNOWN | Structural map required before penetrations or tanks |
| CH-012 | Floor construction and thickness | TBD | UNKNOWN | Physical inspection required |
| CH-013 | Tire outside diameter | Approximately 29 | ESTIMATED | REF-009; tire size, load range and clearance remain unknown |

### 5.6 Existing openings and structure

| ID | Model parameter | Provisional model input | Allowed/design range | Status | Source | Replacement trigger / note |
|---|---|---:|---:|---|---|---|
| OP-001 | Rear-door clear width | 48 | 48–54 | DESIGN ASSUMPTION | MDS 1A; compare REF-019/REF-020 | Fit design to 48 until measured; photo-visible portal is approximately 50 inches wide but does not establish clear width |
| OP-002 | Rear-door clear height | 72 | 72–76 | DESIGN ASSUMPTION | MDS 1A; compare REF-019/REF-020 | Fit design to 72 until measured; photo-visible portal is approximately 78 inches high but does not establish clear height |
| OP-003 | Street-side donor-door position | TBD | Reference proxy outer frame approximately X 15–38 | UNKNOWN | MDS 6H; OA/OB/OC; compare REF-016 | B/C retain and protect; A permanently infills if present; candidate position must be measured |
| OP-004 | Street-side donor-door clear width | TBD | Reference proxy outer frame approximately 22 ±4 | UNKNOWN | MDS 6H; compare REF-016 | Outer photo envelope is not a clear-opening dimension; controls B/C backbar breaks and egress |
| OP-005 | Street-side donor-door clear height | TBD | Reference proxy outer frame approximately 72 ±4 | UNKNOWN | MDS 6H; compare REF-016 | Outer photo envelope is not a clear-opening dimension; controls B/C backbar bridge zone |
| OP-006 | Existing curb-side openings | TBD | Reference proxy envelopes REF-013 through REF-015 | UNKNOWN | MDS 4.3 | Map every candidate opening before service-window design; photo estimates do not authorize cutting or reuse |
| OP-007 | Existing roof openings | TBD | TBD | UNKNOWN | PMP 3 | Coordinate HVAC and Option A escape hatch |
| ST-001 | Wall-post/rib positions | TBD | TBD | UNKNOWN | PMP 3; MDS 4.4 | No structural opening release without field map |
| ST-002 | Roof-bow positions | TBD | TBD | UNKNOWN | PMP 3; MDS 4.4 | Controls HVAC and escape hatch |
| ST-003 | Front bulkhead structure | TBD | TBD | UNKNOWN | MDS 4.4 | Controls electrical panel and employee nook |
| ST-004 | Rear portal structure | TBD | TBD | UNKNOWN | MDS 4.4 | Protect door frame and egress |

## 6. Common conversion-geometry register

### 6.1 Aisle, counter and service opening

| ID | Model parameter | Provisional model input | Allowed/design range | Status | Source | Replacement trigger / note |
|---|---|---:|---:|---|---|---|
| CV-001 | Primary production-counter depth | 24 | 24 | DESIGN ASSUMPTION | MDS 1A | One full-depth counter only |
| CV-002 | Primary production-counter height | 36 | 36 | DESIGN ASSUMPTION | MDS 1A | Standard concept counter height |
| CV-003 | Clear employee aisle width | 32 | 30–34; 30 minimum | DESIGN ASSUMPTION | MDS 1A, 12 | Nominal result of IN-002 minus CV-001 |
| CV-004 | Second full-depth counter allowance | 0 | 0 | DESIGN ASSUMPTION | MDS 1A, 6E | Prohibited in every option |
| CV-005 | Service-opening width | 60 | 60 maximum | DESIGN ASSUMPTION | MDS 1A, 6E | Reduce if measured structure requires |
| CV-006 | Service-opening height | 30 | 30 maximum | DESIGN ASSUMPTION | MDS 1A, 6E | Full open use not approved by health authority |
| CV-007 | Service-opening longitudinal zone | X = 39 to 99; center X = 69 | Centered in 90-inch work zone | DESIGN ASSUMPTION | MDS 6E; derived from LZ-004, CV-005 and CV-008 | Provisional only; relocate/reduce after structure map if required |
| CV-008 | Front solid wall pier | 15 | 15 nominal | DESIGN ASSUMPTION | MDS 6E | Not a verified structural pier |
| CV-009 | Rear solid wall pier | 15 | 15 nominal | DESIGN ASSUMPTION | MDS 6E | Not a verified structural pier |
| CV-010 | Service-opening sill elevation | TBD | Coordinate to 36–40 service counter | UNKNOWN | MDS 6E | Set only after clear height/header band is verified |
| CV-011 | Remaining header band | TBD | TBD | UNKNOWN | MDS 6E | Structural design required |
| CV-012 | Active regulatory pass-through width | 18 | 18 nominal | DESIGN ASSUMPTION | MDS 1A | Represents 12 × 18 provisional aperture; orientation subject to approval |
| CV-013 | Active regulatory pass-through height | 12 | 12 nominal | DESIGN ASSUMPTION | MDS 1A | 216 sq in maximum under cited current guide |
| CV-014 | Customer ledge operating depth | 15 | 14–16 | DESIGN ASSUMPTION | MDS 1A | Nominal midpoint for modeling |
| CV-015 | Customer ledge elevation | 36 | 36–40 general | DESIGN ASSUMPTION | MDS 1A | Accessible segment is separately controlled at 36 maximum |
| CV-016 | Accessible transaction-section length | 36 | 36 provisional | DESIGN ASSUMPTION | MDS 1C | Applicability and final dimension require review |
| CV-017 | Accessible transaction-section height | 36 | 36 maximum | DESIGN ASSUMPTION | MDS 1C | Must retain full ledge depth and adjacent floor space |
| CV-018 | Counter-equipment cleaning clearance | 4 | 4 minimum unless readily movable under the stated exception | DESIGN ASSUMPTION | MDS 7 | Must be modeled around applicable counter equipment |
| CV-019 | Separation between multiple active pass-through openings | 18 | 18 minimum | DESIGN ASSUMPTION | MDS 7 | Current base concept uses one provisional active aperture |

### 6.2 Sanitation geometry controls

| ID | Parameter | Controlled value | Status | Source / note |
|---|---|---:|---|---|
| SA-001 | Minimum hand-sink bowl | 9 × 9 × 5 | DESIGN ASSUMPTION | MDS 7; catalog basis matches |
| SA-002 | Hand-to-warewashing splashguard height | 6 | DESIGN ASSUMPTION | Required unless drainboards are at least 24 inches apart |
| SA-003 | Drainboard separation alternative | 24 minimum | DESIGN ASSUMPTION | Alternative to SA-002 under cited control |
| SA-004 | Three-compartment basin alternative 1 | 12 × 12 × 10 minimum each | DESIGN ASSUMPTION | Required redesign basis if two-compartment procedure is rejected |
| SA-005 | Three-compartment basin alternative 2 | 10 × 14 × 10 minimum each | DESIGN ASSUMPTION | Required redesign basis if two-compartment procedure is rejected |
| SA-006 | Drainboard plan envelope | At least one basin in plan | DESIGN ASSUMPTION | Two integral drainboards where three-compartment sink is required |
| SA-007 | Drainboard slope | 1/8 per 12 minimum | DESIGN ASSUMPTION | Slope toward basin |
| SA-008 | Drainboard lip/rim | 1/2 minimum | DESIGN ASSUMPTION | Final detail subject to approved equipment |

### 6.3 Egress, access and deployed elements

| ID | Model parameter | Provisional model input | Allowed/design range | Status | Source | Replacement trigger / note |
|---|---|---:|---:|---|---|---|
| EG-001 | Minimum second-exit clear width | 24 | 24 minimum | DESIGN ASSUMPTION | MDS 1A, 7 | Final configuration requires authority approval |
| EG-002 | Minimum second-exit clear height | 36 | 36 minimum | DESIGN ASSUMPTION | MDS 1A, 7 | Final configuration requires authority approval |
| EG-003 | Option A roof escape-hatch clear opening | 24 × 36 | 24 × 36 minimum | DESIGN ASSUMPTION | MDS 6H; OA | Listed product, position and reinforcement TBD |
| EG-004 | Option A roof escape-hatch position | Rear-third aisle | TBD within rear-third zone | DESIGN ASSUMPTION | MDS 6H; OA | Exact coordinates must coordinate roof bows, HVAC and access |
| EG-005 | Deployable staff-step geometry | TBD | TBD | UNKNOWN | MDS 1E | B/C street-side door; grade and product unknown |
| EG-006 | Grab-handle position/envelope | TBD | TBD | UNKNOWN | MDS 1E | B/C street-side door |
| EG-007 | Exterior service apron | TBD | TBD | UNKNOWN | MDS 1C | Venue-specific and accessibility-controlled |

### 6.4 Storage, backbars and lighting

| ID | Model parameter | Provisional model input | Allowed/design range | Status | Source | Replacement trigger / note |
|---|---|---:|---:|---|---|---|
| SB-001 | Option A outboard-storage depth | 6 | 6 maximum | DESIGN ASSUMPTION | MDS 1A; OA | Interior face must remain flush |
| SB-002 | Option A outboard-storage longitudinal extent | TBD | Below opening/ledge zone | UNKNOWN | OA | Door divisions and supports not set |
| SB-003 | Option B Linear Gallery depth | TBD | No reduction of 32-inch aisle | UNKNOWN | OB | Requires wall/door/upper-service envelope |
| SB-004 | Option B Linear Gallery mounting height | TBD | TBD | UNKNOWN | OB | Requires reach, door and structural studies |
| SB-005 | Option B Linear Gallery width | TBD | Stop/break/bridge around door | UNKNOWN | OB | Door position controls composition |
| SB-006 | Option C Twin-Wing Backbar depth | TBD | No reduction of 32-inch aisle | UNKNOWN | OC | Requires wall/door/upper-service envelope |
| SB-007 | Option C Twin-Wing mounting height | TBD | TBD | UNKNOWN | OC | Requires two-bartender reach study |
| SB-008 | Option C overall width and wing widths | TBD | Symmetrical where door permits | UNKNOWN | OC | Door position may force controlled revision |
| LT-001 | Exterior bulkhead fixture visible size | 5 W × 8 H approximately | Approximate | ESTIMATED | MDS 1D | Exact listed exterior-rated product remains VERIFY |
| LT-002 | Exterior bulkhead fixture locations | TBD | Two matching fixtures | UNKNOWN | MDS 1D | Photometrics, mounting and structure required |
| LT-003 | Interior task-light locations | TBD | Above sinks/prep | UNKNOWN | MDS 6G | Set after equipment and ceiling model |
| LT-004 | Backbar/customer light-datum locations | TBD | Option-specific | UNKNOWN | OB/OC | Fixed after option geometry approval |

## 7. Catalog-equipment envelope register

Operational equipment must retain catalog dimensions. A substitution requires a documented equal and a register revision.

| ID | Applies to | Equipment | Envelope W × D × H | Status | Source / dimensional note |
|---|---|---|---:|---|---|
| EQ-001 | All | Waring BB300S removable blender | 7.63 × 8.38 × 16 | VERIFIED REFERENCE | Manufacturer/catalog dimensions recorded in MDS; travel dock TBD |
| EQ-002 | All | Summit FF1843BIF refrigerator | 17.75 × 24 × 34.25 | VERIFIED REFERENCE | Modeled in an 18-inch module |
| EQ-003 | All | Regency 600HS12HSP hand sink | 11.94 × 15.56 × 12.81 | VERIFIED REFERENCE | 9 × 9 × 5 bowl; modeled in a 12-inch module |
| EQ-004 | All, preliminary | Bosch Tronic 3000 T ES4 water heater | 13.75 W × 13.5 D × 13.75 H | VERIFIED REFERENCE | EXT-BOSCH; vertical installation only; connection and service envelopes remain to be modeled |
| EQ-005 | All, preliminary | SHURflo Aqua King II 4148-153-E75 pump | 10 × 5 × 4.75 overall | VERIFIED REFERENCE | EXT-PENTAIR; orientation, strainer, fittings and service envelope remain to be modeled |
| EQ-006 | A/B | Regency 60B2101413RK two-compartment sink | 36 × 18.75 × 33 overall | VERIFIED REFERENCE | EXT-REGENCY; 30-inch work surface plus 3-inch backsplash; two 10 × 14 × 10 bowls |
| EQ-007 | A/B | Regency 600IB1824 cocktail station | 24 × 18 × 33 | VERIFIED REFERENCE | Raise/support to final counter relationship |
| EQ-008 | C only | Krowne KR19-22C compact two-compartment sink | 24 × 19 × 36.5 overall | VERIFIED REFERENCE | EXT-KROWNE; 30-inch work surface plus 6.5-inch backsplash; two 10 × 14 × 10 bowls; no drainboards |
| EQ-009 | C only | Regency 600IB1812 cocktail station, each | 12 × 18 × 33 | VERIFIED REFERENCE | Each centered within an 18-inch station module |
| EQ-010 | All | Square Terminal/POS | 3.4 W × 5.6 D × 2.5 H | VERIFIED REFERENCE | EXT-SQUARE; swing/deployable mount and cable envelopes remain TBD |
| EQ-011 | All | HVAC | Physical envelope TBD | UNKNOWN | Performance range only: approximately 9,000–13,500 Btu/h |

### 7.1 Equipment operating and installation envelopes

| ID | Equipment/control | Controlled envelope or rule | Status | Coordination effect |
|---|---|---|---|---|
| EO-001 | Refrigerator with door at 90 degrees | 17.75 W × 40 D | VERIFIED REFERENCE | Projects 16 inches beyond the 24-inch counter line, leaving 16 inches of the nominal aisle while fully open |
| EO-002 | Refrigerator width with optional factory travel latch | 19.25 | VERIFIED REFERENCE | Does not fit the locked 18-inch module; that latch option is blocked unless the module is revised |
| EO-003 | Refrigerator door width at 90 degrees | 18.63 | VERIFIED REFERENCE | Check adjacent cabinet, rear-door and bartender conflicts |
| EO-004 | Water-heater piping, relief discharge and service clearance | TBD | UNKNOWN | Physical unit envelope alone is insufficient for bay approval |
| EO-005 | Pump with strainer/fittings and service clearance | TBD | UNKNOWN | Physical unit envelope alone is insufficient for bay approval |
| EO-006 | A/B sink work-surface lift to 36-inch datum | 6 nominal | ESTIMATED | Based on 30-inch catalog work surface; support, legs and drain clearance require design |
| EO-007 | A/B sink resulting backsplash top if lifted uniformly | 39 nominal | ESTIMATED | Must coordinate window/shelf and splash geometry |
| EO-008 | Option C sink work-surface lift to 36-inch datum | 6 nominal | ESTIMATED | Based on 30-inch catalog work surface; support, legs and drain clearance require design |
| EO-009 | Option C sink resulting backsplash top if lifted uniformly | 42.5 nominal | ESTIMATED | May conflict with service opening and requires a resolved section |
| EO-010 | Cocktail-station lift to 36-inch datum | 3 nominal | ESTIMATED | Applies to 33-inch-high stations; support and rim definition require design |

### 7.2 Module-fit rules

- Module coordinates define maximum occupied width, including equipment, support, cabinet skin, fillers and installation tolerance.
- Catalog equipment geometry must be modeled at its actual reference dimensions inside the module; it may not be stretched to the nominal module width.
- The hand sink leaves 0.06 inch nominally within its 12-inch module.
- The standard refrigerator leaves 0.25 inch nominally within its 18-inch module before cabinet construction. The optional factory latch is excluded by EO-002.
- The A/B sink and cocktail station consume their full 36-inch and 24-inch modules respectively; no side tolerance is currently allocated.
- Each Option C 12-inch cocktail station sits within an 18-inch module with exactly 6 inches reserved for the approved tool/work allowance.
- The Option C sink consumes its full 24-inch module; no side tolerance or splashguard thickness is currently allocated.
- Any positive overlap, negative aisle clearance or unavailable service access is a failed fit. The model must report it; it may not redistribute module widths automatically.

## 8. Option configuration registers

### 8.1 Option A — opposite-wall service line

| ID | Parameter | Provisional model input | Status | Source / note |
|---|---|---:|---|---|
| OA-001 | Service-line wall | Street | DESIGN ASSUMPTION | OA locked arrangement |
| OA-002 | Module 1 — hand sink | X = 24–36; 12 W | DESIGN ASSUMPTION | Forward end |
| OA-003 | Module 2 — sink/drainboard | X = 36–72; 36 W | DESIGN ASSUMPTION | Conditional two-compartment procedure |
| OA-004 | Module 3 — cocktail station | X = 72–96; 24 W | DESIGN ASSUMPTION | Catalog equipment centered/aligned within module |
| OA-005 | Module 4 — refrigerator | X = 96–114; 18 W | DESIGN ASSUMPTION | Rear/pickup end; catalog width 17.75 |
| OA-006 | Total nominal line length | 90 | DESIGN ASSUMPTION | Exact sum; no filler/end-panel allowance |
| OA-007 | Curb-side below-ledge interior intrusion | 0 | DESIGN ASSUMPTION | Outboard storage must stay flush inside |
| OA-008 | Street-side donor-door operational clearance | 0 | DESIGN ASSUMPTION | Door is permanently infilled if present; engineered design TBD |

### 8.2 Option B — under-window single-bartender line

| ID | Parameter | Provisional model input | Status | Source / note |
|---|---|---:|---|---|
| OB-001 | Service-line wall | Curb, beneath opening | DESIGN ASSUMPTION | OB locked arrangement |
| OB-002 | Module 1 — hand sink | X = 24–36; 12 W | DESIGN ASSUMPTION | Forward/order end |
| OB-003 | Module 2 — sink/drainboard | X = 36–72; 36 W | DESIGN ASSUMPTION | Conditional two-compartment procedure |
| OB-004 | Module 3 — cocktail station | X = 72–96; 24 W | DESIGN ASSUMPTION | Central production |
| OB-005 | Module 4 — refrigerator | X = 96–114; 18 W | DESIGN ASSUMPTION | Rear/pickup end |
| OB-006 | Total nominal line length | 90 | DESIGN ASSUMPTION | Exact sum; no filler/end-panel allowance |
| OB-007 | Opposite lower-wall floor projection | 0 | DESIGN ASSUMPTION | No cabinet or second counter |
| OB-008 | Linear Gallery envelope | TBD | UNKNOWN | Preserve aisle and retained street-side door |

### 8.3 Option C — conditional two-bartender line

**FUTURE WRITTEN HEALTH-AUTHORITY PERMISSION REQUIRED**

| ID | Parameter | Provisional model input | Status | Source / note |
|---|---|---:|---|---|
| OC-001 | Service-line wall | Curb, beneath opening | DESIGN ASSUMPTION | OC locked arrangement |
| OC-002 | Module 1 — hand sink | X = 24–36; 12 W | DESIGN ASSUMPTION | Forward end |
| OC-003 | Module 2 — Station A | X = 36–54; 18 W | DESIGN ASSUMPTION | 12-inch cocktail station plus 6-inch tool/work allowance |
| OC-004 | Module 3 — centered sink | X = 54–78; 24 W | DESIGN ASSUMPTION | Conditional compact two-compartment sink |
| OC-005 | Module 4 — Station B | X = 78–96; 18 W | DESIGN ASSUMPTION | 12-inch cocktail station plus 6-inch tool/work allowance |
| OC-006 | Module 5 — refrigerator | X = 96–114; 18 W | DESIGN ASSUMPTION | Rear end |
| OC-007 | Total nominal line length | 90 | DESIGN ASSUMPTION | Exact sum; no filler/end-panel allowance |
| OC-008 | Opposite lower-wall floor projection | 0 | DESIGN ASSUMPTION | No cabinet or second counter |
| OC-009 | Twin-Wing Backbar envelope | TBD | UNKNOWN | Preserve aisle, symmetry and retained street-side door |
| OC-010 | Splash separation at both sink sides | TBD | UNKNOWN | Written health-authority acceptance required |
| OC-011 | Drainboard/drying envelope | TBD | UNKNOWN | No integral drainboards in selected concept sink |

## 9. Systems and utility planning zones

These are relational constraints rather than fabrication coordinates. Absolute coordinates remain unknown until the chassis and structure are mapped.

| ID | Parameter/zone | Provisional relationship | Status | Source / note |
|---|---|---|---|---|
| SY-001 | Potable tank | Laterally centered, immediately forward of axle-group center | DESIGN ASSUMPTION | Capacity, shape, supports and clearance TBD |
| SY-002 | Wastewater tank | Laterally centered, immediately aft of potable tank, near axle-group center | DESIGN ASSUMPTION | Capacity at least 150% of potable; exact volume TBD |
| SY-003 | Tank service panel | Divided, lockable, street side | DESIGN ASSUMPTION | Longitudinal position TBD |
| SY-004 | Water-service bay A/B | Below or beside 36-inch warewashing module | DESIGN ASSUMPTION | Equipment and plumbing clearances incomplete |
| SY-005 | Water-service bay C | Beneath centered 24-inch sink | DESIGN ASSUMPTION | Compact fit is unresolved |
| SY-006 | Shore inlet/main disconnect | Weather-protected street-side utility zone | DESIGN ASSUMPTION | Exact coordinates and 30-A/50-A selection TBD |
| SY-007 | Battery/inverter | Ventilated tongue box | DESIGN ASSUMPTION | Box envelope and tongue-weight effect TBD |
| SY-008 | Interior distribution panel | High, dry, guarded on open front employee-support wall | DESIGN ASSUMPTION | Working-clearance envelope TBD |
| SY-009 | HVAC | Roof centerline, near axle group | ESTIMATED | Exact product, roof structure and clearances TBD |
| SY-010 | Relief/exhaust | High street side or roof, toward rear work zone | ESTIMATED | Exact product and penetration TBD |
| SY-011 | Transit cases | Low over/near axle group during travel only | DESIGN ASSUMPTION | Case count/size and floor anchors TBD |
| SY-012 | Chemical locker | Low enclosure at hand-sink end | DESIGN ASSUMPTION | Exact usable envelope TBD |
| SY-013 | Staff waste/recycling/broken glass | Residual undercounter volume near wash line | ESTIMATED | Catalog bins and service clearances unresolved |

## 10. Dimensional coordination findings

These findings do not revise the design. They identify issues that must be accepted, tested or resolved before Gate 1 or Gate 2 approval.

| Finding | Severity | Observation | Required resolution |
|---|---|---|---|
| F-001 | CONTROLLED | The 114-inch finished interior length equals the 24-inch front nook plus the 90-inch work zone exactly. There is no unallocated longitudinal zone. | Use the finished-face datums and AS-001. Any measured shortfall fails the fit test and requires design review. |
| F-002 | HIGH | Each A/B equipment schedule totals exactly 90 inches, and the Option C module schedule also totals exactly 90 inches. Catalog widths, end panels, fillers, side clearances, plumbing offsets and shell irregularity have no allocated tolerance. | Create a module-tolerance strategy and test low/high catalog envelopes before Gate 2. Do not resize operational equipment silently. |
| F-003 | CONTROLLED | The 56-inch interior width equals one 24-inch counter plus the 32-inch nominal aisle exactly. Any backsplash build-out, handle projection, wall irregularity or opposite-wall lower element can reduce the aisle. | Measure counter depth from finished wall to maximum operating projection and enforce AS-003, AS-004 and AS-009. Any intrusion fails the fit test. |
| F-004 | HIGH | B/C retain a street-side door, but its position and dimensions are unknown while both backbar compositions depend on it. | Hold final backbar widths, mounting and symmetry until a candidate door is measured. |
| F-005 | HIGH | The 60-inch opening centered in the 90-inch zone creates nominal 15-inch end piers, but all structural members and roof-load paths are unknown. | Treat the opening and piers as graphic/design assumptions only until structural mapping and engineering. |
| F-006 | HIGH | Option C lacks resolved drainboard/drying and two-sided splash-separation envelopes. | Retain the mandatory health-authority condition and block procurement/fabrication/permit use. |
| F-007 | MEDIUM | The 60-inch exterior body width and 56-inch finished interior width imply only 2 inches per side for structure, wall curvature, insulation and lining. | Measure widths at several heights and define the actual wall assembly before relying on the implied thickness. |
| F-008 | MEDIUM | The selected refrigerator is 34.25 inches high below a 36-inch counter, leaving 1.75 inches nominally for countertop/support/clearance. | Verify manufacturer ventilation, leveling and top-clearance requirements and model the complete assembly. |
| F-009 | MEDIUM | The 33-inch cocktail stations require support/raising to meet the 36-inch counter relationship. | Define support thickness, restraint, drainage and finished rim elevation. |
| F-010 | MEDIUM | The conservative finished clear-height case is 76 inches while the minimum aisle headroom is 74 inches, leaving only a 2-inch margin for local roof curvature or equipment/fixture projections. | Use 76 inches as the base clear-height model, test 80 inches secondarily and reject any aisle point below 74 inches. |
| F-011 | MEDIUM | The general service-counter range extends to 40 inches, but the accessible transaction section is provisionally limited to 36 inches maximum. | Model a 36-inch accessible section and resolve any transition to a higher counter only after accessibility review. |
| F-012 | MEDIUM | Option A's six-inch outboard storage and 14–16-inch ledge share the customer-side wall zone, but their support, door swing and travel envelopes are not defined. | Develop a coordinated section after wall structure is established. |
| F-013 | MEDIUM | The roof HVAC and Option A escape hatch both depend on unmapped roof bows and occupy the roof/aisle region. | Reserve separate no-conflict zones and do not select products until the roof map exists. |
| F-014 | MEDIUM | Underfloor tank relationships depend on an unknown axle group, frame rails, cross-members and road clearance. | Keep tank sizes and coordinates unset until candidate and purchased-trailer measurements exist. |
| F-015 | LOW | The reference height is 81.6 inches while the locked exterior design range is 82–84 inches. | Retain both values separately; use 84 inches only as a conservative design assumption. |
| F-016 | HIGH | The refrigerator projects 16 inches beyond the counter front with its door at 90 degrees, reducing the nominal 32-inch aisle to 16 inches while open. | Model the complete door-swing volume in every option and resolve workflow/egress before Gate 4. Do not evaluate fit from the closed box alone. |
| F-017 | HIGH | The optional refrigerator travel latch produces a 19.25-inch width, exceeding the locked 18-inch module. | Exclude that factory option unless the canonical module is revised; develop a compliant external travel-restraint strategy or approved equal. |
| F-018 | HIGH | The A/B and C sinks have 30-inch catalog work surfaces, six inches below the 36-inch counter datum. Uniformly lifting the Option C sink places its 6.5-inch backsplash top at 42.5 inches. | Develop dimensioned support and wall sections; check drain/service clearances and service-opening interference before option-model approval. |
| F-019 | CONTROLLED | The drawing generator encoded the Option A roof-hatch proxy as 24 × 18 inches, and the committed SVG labeled it at a forward location, conflicting with the locked 24 × 36-inch minimum in the rear-third aisle. | Corrected the generator to 24 × 36 and corrected `A-PL-01.svg` to label and place the proxy in the rear-third zone. Exact position/product remain VERIFY. |
| F-020 | HIGH | Running the current drawing generator does not reproduce the committed approved SVG set; it replaces substantial hand-coordinated content beyond the hatch correction. | Do not bulk-regenerate the approved SVGs. Reconcile generator source and approved outputs through a separately reviewed drawing-pipeline change before treating generation as reproducible. |

## 11. Candidate-measurement minimum set

The following measurements are needed to convert the most consequential `UNKNOWN` parameters into candidate-specific inputs before purchase:

1. Exterior body length, width at beltline and maximum body height.
2. Overall length, width over fenders and road height.
3. Interior clear length at floor and counter height.
4. Interior width at floor, wheel wells, 36-inch counter height, shoulder height and roof spring.
5. Interior height at centerline and along both aisle edges at 12-inch longitudinal stations.
6. Floor height above level grade.
7. Rear-door clear width and height.
8. Every side-door/opening edge located from fixed front and floor datums, plus clear width and height.
9. Wheel-well length, interior projection, height and longitudinal position.
10. Front and rear axle centerlines from the rear body datum and axle spacing.
11. Fender limits and tire-clearance envelope.
12. Tongue/A-frame plan dimensions and coupler position.
13. Visible wall posts/ribs located from front and floor datums.
14. Visible roof bows located from front datum.
15. Frame-rail and cross-member positions where safely visible.
16. Roof profile at representative cross-sections.
17. Front/nose plan profile and usable tack-nook geometry.
18. Existing floor, wall and ceiling assembly thickness where safely observable.
19. Clear unobstructed curb-wall region available for the proposed service opening.
20. Photographs tied to each measurement, including a visible tape/scale and measurement datum.

These measurements support purchase screening only. A complete physical survey remains required after acquisition.

## 12. Gate review

### Gate 1 — provisional envelope

**Current recommendation:** NOT YET APPROVED.

The envelope is sufficiently explicit to construct a provisional test shell and evaluate modeling tools, but the following must be accepted as deliberate purchase-selection assumptions before the shell is approved for candidate mockups:

- 120 × 60 × 84-inch exterior body envelope;
- 114 × 56 × 76-inch conservative finished-clear interior envelope, with an 80-inch high case retained only as a secondary range test;
- 24-inch front nook plus 90-inch work zone with no unallocated longitudinal tolerance;
- provisional 48 × 72-inch rear-door opening; and
- all chassis, wheel-well, structural-member, roof-profile and side-door geometry remaining `UNKNOWN`.

### Gate 2 — dimensional conversion specification

**Current recommendation:** NOT YET APPROVED.

Before Gate 2 approval:

1. Review the controls for F-001 and F-003 and resolve or explicitly accept findings F-002, F-004 and F-005.
2. Define counter and aisle measurement datums and projection rules.
3. Define nominal opening-sill and header-band geometry for test modeling.
4. Establish tolerance/filler policy for both 90-inch equipment schedules.
5. Decide how unknown B/C door geometry will be represented in the provisional shell.
6. Keep B/C backbar envelopes unset until a safe no-intrusion rule is modeled.
7. Retain Option C's mandatory conditional statement and unresolved sanitation envelopes.
8. Add missing installation/service envelopes for the water heater, pump and POS, plus physical envelopes for the HVAC, panels, tanks, bins and travel cases before interference approval.
9. Resolve refrigerator door-swing and travel-restraint conflicts F-016 and F-017.
10. Resolve sink support/counter/opening coordination in F-018.

## 13. Approval record

| Gate | Status | Approved by | Date | Scope / conditions |
|---|---|---|---|---|
| Gate 1 — provisional envelope | PENDING | — | — | Purchase-selection mockups only |
| Gate 2 — conversion parameters | PENDING | — | — | Required before option geometry construction |

Approval of this register does not verify the future donor trailer and does not release procurement, cutting, fabrication, permitting or construction documentation.
