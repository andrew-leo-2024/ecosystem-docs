---
sidebar_position: 6
title: "Visual Glossary — Entity & System Relationships"
description: "Visual companion to the text glossary — relationship diagrams showing how the 21 core systems, 8 entities, products, revenue streams, compounding assets, PCP/PEP protocols, and the byproduct economy interconnect."
---

# Visual Glossary -- Entity & System Relationships

This page is a visual companion to the [text glossary](/docs/glossary). While the glossary defines terms alphabetically, this page shows how they **relate to each other** through Mermaid diagrams.

---

## 1. The 21 Core Systems -- Dependency Graph

How the 21 core AINEFF systems depend on each other. Arrows indicate structural dependencies -- the downstream system cannot function without the upstream system's output.

**Source:** [21 Core AINEFF Systems](/docs/systems/21-core-systems)

```mermaid
flowchart TB
    subgraph MANUFACTURE["Manufacturing Layer"]
        EMS["EMS
        Enterprise Manufacturing"]
        EGMS["EGMS
        Group Manufacturing"]
    end

    subgraph REGISTRY["Registry Layer"]
        GAAGR["GAAGR
        Global Registry"]
        IRMS["IRMS
        Identity & Role"]
    end

    subgraph CONTROL["Control Layer"]
        ACP["ACP
        Control Plane"]
        PIES["PIES
        Policy Enforcement"]
        JAL["JAL
        Jurisdiction Adapter"]
        AGK["AGK
        Autonomous Governance"]
    end

    subgraph INTEGRITY["Integrity Layer"]
        ACTS["ACTS
        Audit & Trace"]
        KIMS["KIMS
        Knowledge Integrity"]
        HAAS["HAAS
        Human Accountability"]
        GKMS["GKMS
        Governance Knowledge"]
    end

    subgraph RISK["Risk & Fairness Layer"]
        PAME["PAME
        Power Asymmetry"]
        CCRS["CCRS
        Cartel Risk"]
        DEFS["DEFS
        Defensive Economics"]
        CRMS["CRMS
        Cross-Registry Monitoring"]
    end

    subgraph LIFECYCLE["Lifecycle Layer"]
        FMS["FMS
        Failure Management"]
        TDES["TDES
        Time, Decay & Exit"]
        HMS["HMS
        Human Management"]
        ECS["ECS
        Compliance"]
        IPS["IPS
        Inter-Protocol"]
    end

    %% Manufacturing to Registry
    EMS --> GAAGR
    EGMS --> GAAGR

    %% Registry to Control
    GAAGR --> ACP
    IRMS --> ACP

    %% Control internal
    ACP --> PIES
    ACP --> ACTS
    PIES --> JAL
    AGK --> GKMS
    AGK --> PIES

    %% Control to Integrity
    ACTS --> KIMS
    ACTS --> HAAS

    %% Risk internal
    PAME --> CCRS
    CCRS --> DEFS
    CRMS --> PAME

    %% Lifecycle
    FMS --> TDES
    HMS --> IRMS
    HMS --> HAAS
    ECS --> CRMS
    IPS --> ACP

    %% Cross-layer
    TDES --> GAAGR
    TDES --> IRMS

    style MANUFACTURE fill:#1a3a3a,stroke:#4ababa,color:#fff
    style REGISTRY fill:#1a1a3a,stroke:#6a6aba,color:#fff
    style CONTROL fill:#2a1a3a,stroke:#8a4aba,color:#fff
    style INTEGRITY fill:#1a3a1a,stroke:#4aba6a,color:#fff
    style RISK fill:#3a3a1a,stroke:#baba4a,color:#fff
    style LIFECYCLE fill:#3a1a1a,stroke:#ba6a6a,color:#fff
```

---

## 2. The 8 Entities -- Hierarchy and Lateral Relationships

How the 8 named entities relate vertically (hierarchy) and laterally (mutual constraint).

**Source:** [Entities & Platforms](/docs/entities/)

```mermaid
graph TB
    subgraph VERTICAL["Vertical Hierarchy (Authority Flows Down)"]
        AINEFF["AINEFF
        Constitutional Law
        Never executes
        Never touches money"]
        AINEF["AINEF OS
        Venture Factory
        Controls capital flow
        Spawns all entities"]
        AINEG["AINEG
        Federation Layer
        Coordinates portfolios
        4 subtypes"]
        AINE["AINE
        Productive Enterprise
        Revenue generation
        Client delivery"]
    end

    subgraph LATERAL["Lateral Entities (Mutual Constraint)"]
        FM["Frankmax
        Governance System
        Accountability
        Pre-incident review"]
        LUM["LevelUpMax
        Talent Refinery
        Operator certification
        6-stage progression"]
        ORF["ORF Protocol
        Obligation Settlement
        Protocol taxation
        Cross-entity settlement"]
        WGE["WGE
        Work Genesis Engine
        Swarm orchestration
        Task decomposition"]
    end

    AINEFF -->|"constrains"| AINEF
    AINEF -->|"spawns"| AINEG
    AINEG -->|"coordinates"| AINE

    AINEFF -->|"defines law for"| FM
    FM -->|"governs"| AINEF
    FM -->|"audits"| AINE
    LUM -->|"supplies operators to"| AINE
    LUM -->|"certifies talent for"| AINEF
    ORF -->|"settles obligations"| AINEG
    ORF -->|"infrastructure for"| AINE
    WGE -->|"orchestrates"| AINE

    style VERTICAL fill:#1a1a2e,stroke:#4a4a8a,color:#fff
    style LATERAL fill:#1a2e1a,stroke:#4a8a4a,color:#fff
```

### Entity Characteristics Matrix

| Entity | Touches Money | Executes | Employs People | Creates Entities | Authority Source |
|---|---|---|---|---|---|
| **AINEFF** | Never | Never | Never | Defines roles only | Self (constitutional) |
| **AINEF OS** | Controls capital flow | Yes (manufacturing) | Yes (factory staff) | Yes (all entities) | AINEFF charter |
| **AINEG** | Membership fees only | Yes (coordination) | No | No | AINEF mandate |
| **AINE** | Primary revenue | Yes (production) | Yes (AI + human) | No | AINEG + AINEF |
| **Frankmax** | Service fees | Yes (governance) | Yes (reviewers) | No | AINEFF charter |
| **LevelUpMax** | Training fees | Yes (education) | Yes (trainers) | No | AINEF mandate |
| **ORF Protocol** | Protocol taxation | Yes (settlement) | Minimal | No | AINEFF charter |
| **WGE** | Allocation only | Yes (orchestration) | Minimal | No | AINEF mandate |

---

## 3. Products Map to Systems Map to Entities

How user-facing products trace back to underlying systems and the entities that own them.

```mermaid
flowchart LR
    subgraph PRODUCTS["Products (User-Facing)"]
        DOCUFLOW["DocuFlow
        SaaS $19-499/mo"]
        CHOKEPOINT["Chokepoint Intelligence
        $5K-$25K"]
        BILLING["Billing Leakage
        $3K-$25K"]
        CLAIMS["Insurance Claims
        $7.5K-$12K"]
        PIAR_P["PIAR
        $25K-$75K"]
        GOV_GAP["Governance Gap
        Free lead gen"]
        OPERATOR_T["Operator Training
        $500-$1,500"]
        IP_LIC["IP Licensing
        Variable"]
    end

    subgraph SYSTEMS["Underlying Systems"]
        ACTS_S["ACTS (Audit & Trace)"]
        PIES_S["PIES (Policy Enforcement)"]
        ECS_S["ECS (Compliance)"]
        HAAS_S["HAAS (Human Accountability)"]
        AGK_S["AGK (Governance Kernel)"]
        IRMS_S["IRMS (Identity & Role)"]
        EMS_S["EMS (Enterprise Manufacturing)"]
        HMS_S["HMS (Human Management)"]
    end

    subgraph ENTITIES["Owning Entities"]
        AINE_E["AINE
        (Enterprise)"]
        FM_E["Frankmax
        (Governance)"]
        LUM_E["LevelUpMax
        (Talent)"]
        AINEF_E["AINEF
        (Factory)"]
    end

    DOCUFLOW --> ACTS_S & PIES_S
    CHOKEPOINT --> ACTS_S & ECS_S
    BILLING --> ACTS_S & ECS_S
    CLAIMS --> ACTS_S & PIES_S
    PIAR_P --> HAAS_S & AGK_S
    GOV_GAP --> ECS_S
    OPERATOR_T --> HMS_S & IRMS_S
    IP_LIC --> EMS_S

    ACTS_S & PIES_S & ECS_S --> AINE_E
    HAAS_S & AGK_S --> FM_E
    HMS_S & IRMS_S --> LUM_E
    EMS_S --> AINEF_E

    style PRODUCTS fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style SYSTEMS fill:#1a1a3a,stroke:#6a6aba,color:#fff
    style ENTITIES fill:#2a2a1a,stroke:#baba4a,color:#fff
```

---

## 4. Revenue Streams Map to Market Wedges Map to Buyer Personas

How revenue connects to markets and the people who make buying decisions.

```mermaid
flowchart TB
    subgraph PERSONAS["Buyer Personas"]
        COO["COO / VP Operations
        Measured on: throughput,
        efficiency, compliance"]
        CFO["CFO / VP Finance
        Measured on: cost reduction,
        margin improvement, audit"]
        CRO["CRO / VP Risk
        Measured on: regulatory exams,
        operational loss, compliance"]
        CLAIMS_D["Claims Director
        Measured on: turnaround,
        denial rate, accuracy"]
        SAFETY["Safety Director
        Measured on: incident rate,
        OSHA compliance, training"]
    end

    subgraph WEDGES["6 Market Wedges"]
        MFG["Manufacturing
        $13.4T market"]
        LOGISTICS["Logistics
        $9.7T market"]
        PROF["Professional Services
        $6.2T market"]
        BANKING["Banking
        $6.5T market"]
        CONSTRUCT["Construction
        $12.7T market"]
        HEALTH["Healthcare
        $8.5T market"]
    end

    subgraph STREAMS["Revenue Streams"]
        CHOKE_R["Chokepoint Sprint
        $5K-$25K"]
        DOCU_R["DocuFlow SaaS
        $19-$499/mo"]
        BILL_R["Billing Leakage
        $3K-$25K"]
        CLAIMS_R["Insurance Claims
        $7.5K-$12K"]
        GOV_R["Governance Module
        $5K-$15K/mo"]
        PIAR_R["PIAR
        $25K-$75K"]
        ENT_R["Enterprise Contract
        $50K-$500K/yr"]
    end

    COO --> MFG & LOGISTICS & CONSTRUCT
    CFO --> BANKING & PROF
    CRO --> BANKING
    CLAIMS_D --> HEALTH
    SAFETY --> CONSTRUCT

    MFG --> CHOKE_R & BILL_R & GOV_R
    LOGISTICS --> CHOKE_R & BILL_R
    PROF --> DOCU_R & CHOKE_R
    BANKING --> BILL_R & PIAR_R & GOV_R
    CONSTRUCT --> CHOKE_R & PIAR_R
    HEALTH --> CLAIMS_R & DOCU_R & GOV_R

    CHOKE_R & DOCU_R & BILL_R & CLAIMS_R & GOV_R & PIAR_R -->|"upsell ladder"| ENT_R

    style PERSONAS fill:#1a3a3a,stroke:#4ababa,color:#fff
    style WEDGES fill:#1a2a3a,stroke:#4a6aba,color:#fff
    style STREAMS fill:#1a3a1a,stroke:#4aba4a,color:#fff
```

---

## 5. The 7 Compounding Assets -- How They Feed Each Other

The seven asset classes and how each one strengthens the others.

**Source:** [Compounding Leverage Model](/docs/execution/compounding-leverage)

```mermaid
flowchart TD
    A1["1. REVENUE CAPITAL
    Cash from operations
    15-25% MoM growth
    Active from Day 1"]

    A2["2. CLIENT RELATIONSHIPS
    Trust and access
    10-20% MoM growth
    Active from Month 2"]

    A3["3. OPERATIONAL DATA
    Patterns and benchmarks
    20-30% MoM growth
    Active from Month 3"]

    A4["4. OPERATOR NETWORK
    Delivery capacity
    5-15% MoM growth
    Active from Month 4"]

    A5["5. PRODUCT INFRASTRUCTURE
    Software and tools
    10-15% MoM growth
    Active from Month 3"]

    A6["6. REGULATORY CREDIBILITY
    Governance authority
    3-8% MoM growth
    Active from Month 6"]

    A7["7. PROTOCOL POSITION
    Structural irreversibility
    1-5% MoM, accelerating
    Active from Month 10"]

    A1 -->|"funds"| A5
    A1 -->|"funds"| A4
    A2 -->|"generates"| A1
    A2 -->|"produces"| A3
    A3 -->|"improves"| A5
    A3 -->|"supports"| A6
    A4 -->|"scales"| A2
    A5 -->|"attracts"| A2
    A5 -->|"feeds"| A7
    A6 -->|"enables"| A2
    A6 -->|"legitimizes"| A7
    A7 -->|"locks in"| A1

    style A1 fill:#3a1a1a,stroke:#ba4a4a,color:#fff
    style A2 fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style A3 fill:#1a1a3a,stroke:#4a4aba,color:#fff
    style A4 fill:#1a3a3a,stroke:#4ababa,color:#fff
    style A5 fill:#2a2a1a,stroke:#baba4a,color:#fff
    style A6 fill:#2a1a2a,stroke:#ba4aba,color:#fff
    style A7 fill:#3a2a1a,stroke:#ba8a4a,color:#fff
```

### The Compounding Rule

Every action must build at least two asset classes simultaneously:

| Revenue Activity | Asset Classes Built |
|---|---|
| Chokepoint Sprint | Revenue Capital + Client Relationships + Operational Data + Product Infrastructure |
| DocuFlow Subscription | Revenue Capital + Client Relationships + Operational Data + Product Infrastructure |
| Billing Leakage Audit | Revenue Capital + Client Relationships + Operational Data |
| Governance Module | Revenue Capital + Client Relationships + Regulatory Credibility + Protocol Position |
| Enterprise Contract | Revenue Capital + Client Relationships + Operational Data + Regulatory Credibility |
| Operator Training | Operator Network + Client Relationships + Regulatory Credibility |

**Any action that builds only one asset class, or none, is waste.**

---

## 6. PCP vs PEP Traffic Flow

How the Protocol Control Plane and Protocol Execution Plane interact through the IPS boundary.

**Source:** [Protocol Architecture](/docs/architecture/protocol-architecture)

```mermaid
sequenceDiagram
    participant GOV as PCP<br/>(Governance Layer)
    participant IPS as IPS<br/>(Inter-Protocol System)
    participant EXEC as PEP<br/>(Execution Layer)
    participant EXT as External Systems<br/>(Real World)

    Note over GOV: Governance decision made<br/>Policy compiled by PIES<br/>Constraint propagated via ACP

    GOV->>IPS: Governance signal<br/>(constraint + authorization)
    Note over IPS: Verify message integrity<br/>Ensure no state leakage<br/>Translate PCP -> PEP format

    IPS->>EXEC: Execution directive<br/>(bounded by constraint)
    Note over EXEC: Agent executes within<br/>authorized function bundle<br/>PEP Runtime enforces scope

    EXEC->>EXT: Action proposal<br/>(Frankmax does NOT have<br/>actuation rights)
    EXT->>EXT: External system executes
    EXT->>EXEC: Execution result

    Note over EXEC: Generate evidence<br/>ACTS causal trace<br/>HAAS accountability record

    EXEC->>IPS: Evidence package<br/>(trace + result + attestation)
    Note over IPS: Verify evidence integrity<br/>Ensure no execution state<br/>leaks into governance

    IPS->>GOV: Verified evidence<br/>(for governance update)
    Note over GOV: Update trust scores<br/>Update knowledge base<br/>Adjust policies if needed
```

### PCP vs PEP Comparison

| Dimension | PCP (Public Civilization Protocol) | PEP (Private Enterprise Protocol) |
|---|---|---|
| **Scope** | Governance, audit, constitutional | Business logic, agent execution, operations |
| **Visibility** | External authorities can inspect | Private to the enterprise |
| **Mutability** | Constraints are versioned and published | Operational state changes continuously |
| **Authority** | Higher (governance overrides execution) | Lower (execution within governance bounds) |
| **Data** | Governance artifacts, audit trails | Business data, operational state |
| **Failure Mode** | Governance paralysis | Operational outage |

---

## 7. The Complete Byproduct Economy Stack

The 11 service layers that emerge as natural byproducts of the venture factory.

**Source:** [Factory Byproduct Economy](/docs/systems/factory-byproducts)

```mermaid
flowchart TB
    FACTORY["AINEF Venture Factory
    (Primary Function:
    Manufacture Enterprises)"]

    subgraph BYPRODUCTS["11 Byproduct Service Layers"]
        B1["1. EaaS
        Enterprise-as-a-Service
        Spin up governed enterprises on demand"]
        B2["2. GaaS
        Governance-as-a-Service
        Governance infrastructure without building it"]
        B3["3. CaaS
        Capability-as-a-Service
        Consume capabilities on demand"]
        B4["4. CoaaS
        Compliance-as-a-Service
        Regulatory compliance without internal teams"]
        B5["5. RaaS
        Role-as-a-Service
        Consume job roles on demand"]
        B6["6. SaaS
        Skill-as-a-Service
        Atomic skills as on-demand capabilities"]
        B7["7. WaaS
        Workflow-as-a-Service
        Complete workflows on demand"]
        B8["8. InaaS
        Insurance-as-a-Service
        Risk products from governance data"]
        B9["9. TaaS
        Trust-as-a-Service
        Verifiable trust credentials"]
        B10["10. AaaS
        Audit-as-a-Service
        Continuous audit infrastructure"]
        B11["11. DaaS
        Data-as-a-Service
        Anonymized operational benchmarks"]
    end

    FACTORY -->|"produces as
    natural byproduct"| B1
    FACTORY --> B2
    FACTORY --> B3
    B1 --> B4 & B5
    B2 --> B4 & B8
    B3 --> B6 & B7
    B5 --> B6
    B4 --> B10
    B8 --> B11
    B7 --> B9

    style FACTORY fill:#1a3a3a,stroke:#4ababa,color:#fff
    style BYPRODUCTS fill:#1a1a2e,stroke:#4a4a8e,color:#fff
```

### Byproduct Activation Sequence

| Layer | Activation Phase | Revenue Model | Dependency |
|---|---|---|---|
| GaaS | Phase 2 (Month 4-6) | License + monthly | Core governance module |
| CaaS | Phase 2 (Month 6) | Usage-based | Agent capabilities operational |
| CoaaS | Phase 3 (Month 7-9) | Monthly subscription | Compliance module + JAL |
| RaaS | Phase 3 (Month 9) | Per-role pricing | IRMS + HMS operational |
| SaaS (Skills) | Phase 4 (Month 10-12) | Per-invocation | Skills marketplace live |
| WaaS | Phase 4 (Month 12) | Per-workflow | WGE + agent runtime |
| EaaS | Phase 5 (Year 2) | Per-enterprise | Full EMS operational |
| InaaS | Phase 5 (Year 2) | Premium-based | Insurance pricing system |
| TaaS | Phase 5 (Year 2) | Per-verification | Trust system + PAME |
| AaaS | Phase 6 (Year 3) | Subscription | ACTS + full audit stack |
| DaaS | Phase 6 (Year 3) | Per-query | 1M+ data points accumulated |

---

## Navigating Between Visual and Text

| If You See This Diagram | Read This Page for Full Detail |
|---|---|
| 21 Core Systems Dependency Graph | [21 Core AINEFF Systems](/docs/systems/21-core-systems) |
| Entity Hierarchy | [Entity Hierarchy](/docs/blueprint/entity-hierarchy) + [Entities Overview](/docs/entities/) |
| Products-Systems-Entities Map | [Products Overview](/docs/products/) + [Systems Overview](/docs/systems/) |
| Revenue-Wedges-Personas Map | [Revenue Streams](/docs/products/revenue-streams) + [Market Wedges](/docs/products/market-wedges) |
| Compounding Assets | [Compounding Leverage Model](/docs/execution/compounding-leverage) |
| PCP vs PEP Flow | [Protocol Architecture](/docs/architecture/protocol-architecture) |
| Byproduct Economy | [Factory Byproduct Economy](/docs/systems/factory-byproducts) |
