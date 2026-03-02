---
sidebar_position: 11
title: "EMS Specification"
description: "Full specification for the Enterprise Manufacturing System (EMS) -- the authoritative factory subsystem of AINEF responsible for creating, instantiating, governing, and retiring AI-Native Enterprises as atomic legal-economic units."
tags: [system, technical, aine, ainef-os]
custom_status: active
custom_owner: Andrew Leo
custom_last_review: 2026-03-01
custom_next_review: 2026-06-01
---

# Enterprise Manufacturing System (EMS)

The Enterprise Manufacturing System (EMS) is the authoritative factory subsystem of AINEF responsible for creating, instantiating, governing, and retiring AI-Native Enterprises (AINEs) as atomic legal-economic units. EMS converts approved blueprints into running enterprises.

---

## System Overview

### What the System Does
- Manufactures AINEs as standalone, governed enterprises
- Enforces canonical constraints at creation time
- Produces legally auditable enterprise artifacts
- Registers AINEs into GAAGR

### What the System Explicitly Does NOT Do
- Does not create AINEGs (enterprise groups)
- Does not execute business operations
- Does not host cognition or agents
- Does not make decisions on behalf of AINEs
- Does not bypass jurisdictional law

---

## Canonical Positioning

| Property | Value |
|---|---|
| **Layer** | Factory Layer (AINEF Core) |
| **Upstream Dependencies** | Canonical Constitution, Jurisdiction Adapter Layer (JAL), Canonical Vocabulary & Semantics System (CVSS) |
| **Downstream Dependents** | GAAGR, PEP (indirectly, post-instantiation), GBL, PAME, ACTS |

### Why This System Must Exist
Without EMS, AINEs would be:
- Informally created
- Inconsistently governed
- Legally ambiguous
- Non-auditable

This system prevents uncontrolled AI-enterprise creation.

---

## Scope Definition

### In Scope
- AINE instantiation
- Mandate and scope validation
- Industry classification enforcement
- Power ceiling assignment
- Failure and exit rule binding
- Ownership graph initialization
- GAAGR registration

### Out of Scope
- Group creation (AINEG)
- Agent creation
- Workflow execution
- Revenue processing
- Cognition, prompts, or models

---

## Functional Requirements

1. EMS shall create exactly one AINE per manufacturing request
2. EMS shall require a complete Mandate Declaration before instantiation
3. EMS shall bind at least one jurisdiction to every AINE
4. EMS shall enforce mandatory industry classifications (NAICS, ISIC minimum)
5. EMS shall assign default power ceilings based on industry and jurisdiction
6. EMS shall generate a Canonical Enterprise Record (CER)
7. EMS shall prevent creation if prohibited-action rules are violated
8. EMS shall register the AINE with GAAGR upon successful creation
9. EMS shall refuse creation if ownership graph violates concentration limits
10. EMS shall version all AINE creation artifacts immutably

---

## Non-Functional Requirements

| Requirement | Target |
|---|---|
| **Security** | Creation endpoints must require strong identity verification |
| **Privacy** | No personal or cognitive data stored beyond ownership metadata |
| **Reliability** | >= 99.9% availability |
| **Scalability** | Support millions of AINEs globally |
| **Latency** | Creation decision \<= 5 seconds |
| **Replaceability** | EMS must be hot-swappable without orphaning AINEs |

---

## Governance and Control Requirements

- Human authority required for high-risk industry AINEs and sovereign-linked AINEs
- Jurisdictional rules enforced via JAL
- EMS must not override constitutional constraints
- All rejections must be explainable and logged

---

## Data Model

### Stored
- Mandate summary
- Prohibited actions
- Industry classifications
- Jurisdiction bindings
- Power ceilings
- Ownership graph references
- Exit conditions

### Referenced
- Jurisdiction rules
- Canonical vocabulary
- Power calibration tables

### Forbidden
- Agent definitions
- Business strategies
- Prompts
- Financial transactions
- Personal behavior data

### Retention
Creation records retained permanently (append-only)

---

## APIs and Interfaces

### Inbound
```
POST /ems/create-aine
Auth: Government-grade or enterprise-grade identity
```

### Outbound
```
POST /gaagr/register
POST /acts/log
```

### Failure Behavior
- Partial creation rolls back completely
- No orphan AINE states allowed

---

## Failure Modes and Safety

### Failure Classes
| Class | Example |
|---|---|
| Invalid mandate | Vague, aspirational, or narrative language |
| Jurisdiction conflict | Incompatible jurisdiction combinations |
| Ownership concentration | Single entity exceeding control limits |
| Power ceiling violation | Requested power exceeds industry/jurisdiction bounds |

### Detection
- Pre-creation validation
- Ownership graph resolution

### Containment
- Hard rejection
- No partial persistence

### Escalation
- Human review for sovereign or defense-linked AINEs

### Shutdown
- EMS failure does not affect existing AINEs

---

## Auditability and Evidence

- All creation events logged
- CER is court-admissible
- Creation decisions traceable to rules
- No black-box approvals

---

## Power and Abuse Prevention

- Enforces power ceilings at birth
- Blocks hidden ownership chains
- Prevents rapid AINE mass-creation by a single actor
- Throttles suspicious creation patterns

---

## Lifecycle Management

| Phase | Mechanism |
|---|---|
| **Creation** | Via validated request |
| **Versioning** | CER versions immutable |
| **Updates** | Only via amendment system |
| **Deprecation** | Not applicable |
| **Termination** | Delegated to TDES, not EMS |

---

## Artifacts Generated (Mandatory)

### Canonical Enterprise Record (CER)
- Mandate and scope
- Industry classifications (NAICS/SIC/ISIC/GICS/UNSPSC/HS)
- Power ceilings
- Failure budgets
- Exit protocol
- Ownership graph

---

## Google Cloud Implementation

### Tool Mapping

| Component | Google Cloud Tool | Rationale |
|---|---|---|
| CI/CD Pipeline | Cloud Build | Deterministic, auditable factory pipeline |
| Execution Environment | GKE | Policy-enforceable execution substrate (OPA, Workload Identity, Binary Auth) |
| Code Generation | Jules | AI engineer writes manufacturing code under constraint |

**Critical constraint:** EMS must never call runtime Vertex inference. Jules operates offline / build-time only.

---

## EMS Agent Inventory

### Core Agents (10 -- always-on, mandatory)

#### 1. Mandate Validator Agent
**Purpose:** Validate that the mandate is constitutional, not narrative.

Responsibilities:
- Enforce verb whitelist
- Detect vague language ("optimize", "maximize", "responsibly")
- Require explicit prohibitions
- Require scope x jurisdiction x industry binding

Inputs: Mandate declaration, CVSS vocabulary (read-only)
Outputs: VALID / REJECT, Structured mandate AST (machine-readable)

#### 2. Jurisdiction Binding Agent
**Purpose:** Bind legal domicile and enforce conflicts before instantiation.

Responsibilities:
- Validate jurisdiction combinations
- Detect conflicts (EU + US + dual-use, etc.)
- Enforce primary vs secondary jurisdiction semantics

Inputs: Selected jurisdictions, JAL rules (read-only)
Outputs: Jurisdiction binding record, Conflict flags (hard / soft)

#### 3. Industry Classification Agent
**Purpose:** Ensure the AINE exists inside known economic reality.

Responsibilities:
- Enforce NAICS + ISIC minimum
- Reject deprecated or incompatible codes
- Detect industry-jurisdiction mismatches

Inputs: Industry codes, Canonical classification tables
Outputs: Final industry binding, Regulatory sensitivity tags

#### 4. Ownership Graph Validator Agent
**Purpose:** Prevent hidden control and concentration at birth.

Responsibilities:
- Validate total equity = 100%
- Enforce individual / DAO / AI agent caps
- Detect circular ownership
- Flag proxy dominance patterns

Inputs: Ownership topology, OGCRS rules (read-only)
Outputs: Ownership approval / rejection, Control-risk score

#### 5. Power Ceiling Assignment Agent
**Purpose:** Assign constitutional power limits at genesis.

Responsibilities:
- Compute max compute %
- Assign energy policy
- Assign TPS / memory caps
- Lock irreversible ceilings

Inputs: Mandate scope, Industry risk tier, Jurisdiction sensitivity
Outputs: Immutable power ceiling record

**Critical rule:** Can only reduce power, never increase. Post-birth tuning not allowed.

#### 6. Failure and Exit Profile Agent
**Purpose:** Define how the enterprise is allowed to die.

Responsibilities:
- Assign kill triggers
- Bind exit protocol class
- Set post-exit data retention window

Inputs: Risk class, Jurisdictional rules
Outputs: Exit and termination profile

#### 7. Canonical Enterprise Record (CER) Generator Agent
**Purpose:** Create the court-admissible birth certificate.

Responsibilities:
- Assemble mandate
- Embed ownership
- Embed power ceilings
- Hash and sign record

Outputs: Immutable CER, Versioned genesis hash

**No edits allowed after this.**

#### 8. GAAGR Registration Agent
**Purpose:** Register existence with the global registry.

Responsibilities:
- Write AINE record to GAAGR
- Assign global ID
- Set initial compliance state

Failure behavior: If GAAGR fails -> rollback entire creation. No orphan enterprises allowed.

#### 9. Creation Orchestrator Agent
**Purpose:** Sequence everything safely.

Responsibilities:
- Enforce order of operations
- Stop on first failure
- Guarantee atomicity

Tools: Cloud Workflows / Composer. No business logic of its own.

#### 10. Rejection and Explanation Agent
**Purpose:** Make every "no" explainable.

Responsibilities:
- Produce human-readable rejection reasons
- Reference violated rules
- Log to ACTS

---

### Conditional Agents (Up to 5 -- risk-triggered)

#### 11. Sovereign Sensitivity Review Agent
**Instantiated only if:** Defense / energy / telecom / compute-heavy sectors, sovereign ownership flags, cross-border capital + sensitive industry.

Role: Force human escalation via HOES, add sovereign-risk annotations to CER.

#### 12. Dual-Use Risk Classifier Agent
**Instantiated only if:** NAICS/ISIC flagged as dual-use, export control or sanctions adjacency detected.

Role: Classify as civilian-only / dual-use / restricted, tighten power ceilings automatically (downward only).

#### 13. Control Inference Agent
**Instantiated only if:** Ownership graph complexity \> threshold, DAOs + individuals + agents mixed, proxy risk score elevated.

Role: Infer de facto control beyond equity, flag veto/voting/contractual dominance.

#### 14. Pre-Genesis Simulation Agent
**Instantiated only if:** User requests "preview", high-risk class enterprise, regulated industry.

Role: Dry-run creation, predict rejection points, show immutable verdict preview.

**Important:** This agent does not change outcomes. It only reveals them early.

#### 15. Constitution Drift Detector (Pre-Mint)
**Instantiated only if:** Multiple edits to mandate, suspicious language churn, attempted scope creep before submission.

Role: Detect intent laundering, force clean re-declaration.

---

### Explicitly NOT EMS Agents

These do not belong in EMS:
- "Mandate Optimizer Agent"
- "Business Fit Agent"
- "Success Probability Agent"
- "Suggested Power Increase Agent"
- "Smart Ownership Rebalancer"
- Any agent that says "you could also..."

**The moment EMS starts helping people win, it stops protecting the system.**

### Agent Count Summary

| Category | Count |
|---|---|
| Core Agents (always-on, mandatory) | 10 |
| Conditional Agents (risk-triggered) | Up to 5 |
| Total Possible Agents | Max 15 |
| Default Active at Birth | 10 |

---

## 21 AINEFF Systems and Google Cloud Tools

| # | System | Primary Google Tools | Rationale |
|---|---|---|---|
| 1 | EMS (Enterprise Manufacturing System) | Cloud Build, GKE, Jules | Cloud Build orchestrates CI/CD, Jules writes manufacturing code, GKE is execution environment |
| 2 | EGMS (Enterprise Group Manufacturing System) | Cloud Build, Cloud Run | Separates AINEGs into distinct deployment boundaries |
| 3 | GAAGR (Global AINE & AINEG Registry) | Cloud Firestore, Cloud SQL | Secure, high-availability, globally replicated database for canonical metadata |
| 4 | ACP (AINEF Control Plane) | Cloud Composer/Workflows, GKE | Orchestrates multi-step dependency graph of factory and governance jobs |
| 5 | PIES (Policy Ingestion & Enforcement System) | Policy Controller, Cloud Armor | OPA-based security rules at GKE level, Cloud Armor protects endpoints |
| 6 | JAL (Jurisdiction Adapter Layer) | AURORA Agent, Secret Manager | Dynamic, geo-specific compliance rules via Secret Manager |
| 7 | ACTS (Audit & Causal Trace System) | Cloud Logging, BigQuery | Immutable central sink for logs, BigQuery for forensic analysis |
| 8 | PAME (Power Asymmetry Metric Engine) | Vertex AI Evaluation, Cloud Monitoring | Analyzes and flags resource over-consumption |
| 9 | CCRS (Cartel & Coordination Risk System) | AURORA Agent, Neo4j on GKE | Graph analysis of communication patterns in ACTS logs |
| 10 | FMS (Failure Management System) | Cloud Monitoring, Cloud Debugger | Real-time error detection and root-cause analysis |
| 11 | TDES (Time, Decay & Exit System) | Cloud Functions/Cloud Run, GKE | Event-driven kill-switch logic |
| 12 | OGCRS (Ownership Graph & Control Resolution) | Cloud Firestore, IAM | Permission control and logical relationship tracking |
| 13 | HOES (Human Oversight & Escalation System) | SCHOLA Agent, Firebase Auth | Verified human auditor interface |
| 14 | NPOS (Non-Participation & Opt-Out System) | GAAGR, Cloud Functions | Triggers TDES process for specific AINE opt-out |
| 15 | CVSS (Canonical Vocabulary & Semantics System) | Vertex AI Vector Search, NEXUS Agent | RAG engine for single source of truth |
| 16 | MIDC (Misinterpretation Index & Drift Control) | Vertex AI Evaluation | Custom metric for detecting behavioral drift |
| 17 | PEP (Private Enterprise Protocol) | VPC Service Controls, GKE Network Policy | Security perimeter and Zero-Trust firewall rules |
| 18 | RAMS (Role, Authority & Mandate System) | Gemini Enterprise (via ADK), AI Studio | System Prompt constraints via Agent Development Kit |
| 19 | ACOS (Agent Composition & Orchestration System) | Cloud Run, Firebase Studio | Scalable proxy/routing layer |
| 20 | GBL (Governance Boundary Layer) | IAM, VPC Service Controls | Resource access control and hardened perimeter |
| 21 | PDES (Pattern-Derived Enterprise Synthesis) | Jules, AI Studio | ADK agent code generation from pattern library |

---

## UX Design Principles

### Mandate Declaration
Mandates must be:
- **Declarative** -- not aspirational
- **Machine-verifiable** -- not narrative
- **Prosecutable in court** -- not vague

Required subfields:
1. **Authorized Actions** (verb-limited)
2. **Explicit Prohibitions** (must-not-do)
3. **Optimization Priority Order** (1 \> 2 \> 3)

### Ownership Graph Visualization
- Read-only graph visualization
- Nodes: Entity, Individual, System Root (EMS)
- Edges: OWNS (%), CONTROLS (locked / restricted)
- Violations highlighted visually: 49% = amber, 51% = red (blocker)
- No editing ownership from this view

### Power Ceilings
Split into two categories:
- **Constitutional Ceilings** (set pre-mint, immutable): max compute %, energy cap, kill trigger class
- **Operational Tunables** (post-mint, bounded): retry attempts, alert thresholds, SLO targets

Power should only go down, never up.

### Pre-Genesis Verdict Panel
Before minting, a cold, factual verdict:

> **EMS Verdict**
>
> This enterprise will be born with:
> - Compute ceiling: 75%
> - Energy policy: Throttled
> - Kill condition: Automatic on Severity-1 breach
> - Ownership risk: Medium (45% individual)
>
> This enterprise will never be allowed to:
> - Exceed X TPS
> - Operate outside NA
> - Reassign capital autonomously

No buttons. No edits. Just truth.

---

## Readiness Checklist

| Question | Answer |
|---|---|
| Buildable? | Yes |
| Auditable? | Yes |
| Killable? | Yes |
| Replaceable? | Yes |

---

## Final Statement

EMS does not help you build a business. **EMS decides whether a business is allowed to exist.**

Most AI platforms ask: "What do you want to build?"
EMS asks: "What are you allowed to bring into existence?"
