---

sidebar_position: 2
title: "Complete Ecosystem Map"
description: "Master visual guide showing how everything connects -- entities, data flow, money flow, talent flow, governance flow, and technology stack in one unified view."
tags: [guide, reference]
custom_status: active
custom_owner: Andrew Leo
custom_last_review: 2026-03-01
custom_next_review: 2026-06-01
---

# Complete Ecosystem Map

This page provides six master diagrams that show how the AINEFF Ecosystem connects at every level. Each diagram reveals a different dimension of the same underlying system.

---

## 1. Entity Relationship Diagram

The complete structural hierarchy from constitutional law down to atomic skills, including all lateral relationships between entities.

```mermaid
graph TB
    AINEFF["AINEFF
    Constitutional Law Layer
    (Non-Operating Foundation)"]

    AINEF["AINEF OS
    Venture Factory /
    Manufacturing Layer"]

    FM["Frankmax
    Pre-Incident
    Governance System"]

    LUM["LevelUpMax
    Talent Refinery &
    Certification Authority"]

    ORF["ORF Protocol
    Obligation & Responsibility
    Finality"]

    WGE["WGE
    Work Genesis Engine
    Swarm Architecture"]

    subgraph FederationLayer["AINEG Federation Layer"]
        G01["AINEG-01
        Same-Industry"]
        G02["AINEG-02
        Cross-Industry"]
        G03["AINEG-03
        Gov-Enterprise"]
        G04["AINEG-04
        Cross-Border"]
    end

    AINE["AINE
    Single Productive
    Enterprise"]

    subgraph OrgLevels["Enterprise Internals"]
        AINEOU["AINEOU
        Organization Unit"]
        AINEOUT["AINEOUT
        Team"]
        AINEOUTM["AINEOUTM
        AI Employee"]
        AINEOUTMJ["AINEOUTMJ
        Job Role"]
    end

    subgraph Skills["AINEOUTMJS Skills"]
        PR["Primitive Role
        (Atomic)"]
        CYR["Capability Role
        (Composed)"]
        CTR["Composite Role
        (Multi-Domain)"]
    end

    subgraph Brands["Ecosystem Brand Vehicles"]
        LPI["LPI"]
        UV["UniVenture"]
        SON["Sonarchy"]
        MOB["Mobivault"]
        AUR["Aureya"]
    end

    %% Vertical hierarchy
    AINEFF -->|"constitutes & constrains"| AINEF
    AINEFF -->|"defines law for"| FM
    AINEF -->|"spawns & funds"| G01
    AINEF -->|"spawns & funds"| G02
    AINEF -->|"spawns & funds"| G03
    AINEF -->|"spawns & funds"| G04
    G01 & G02 & G03 & G04 -->|"coordinates"| AINE
    AINE --> AINEOU --> AINEOUT --> AINEOUTM --> AINEOUTMJ
    AINEOUTMJ --> PR & CYR & CTR

    %% Lateral relationships
    FM -->|"governs accountability"| AINEF
    FM -->|"audits"| AINE
    LUM -->|"supplies operators"| AINE
    LUM -->|"certifies talent"| AINEF
    ORF -->|"settles obligations"| G01 & G02 & G03 & G04
    WGE -->|"orchestrates swarm"| AINE
    AINE -->|"operates"| LPI & UV & SON & MOB & AUR

    style AINEFF fill:#1a1a3a,stroke:#6a6aba,color:#fff
    style AINEF fill:#1a3a1a,stroke:#6aba6a,color:#fff
    style FM fill:#3a1a3a,stroke:#ba6aba,color:#fff
    style LUM fill:#2a3a1a,stroke:#8aba4a,color:#fff
    style ORF fill:#3a2a1a,stroke:#ba8a4a,color:#fff
    style WGE fill:#1a3a3a,stroke:#4ababa,color:#fff
    style FederationLayer fill:#2a2a1a,stroke:#baba4a,color:#fff
    style AINE fill:#3a1a1a,stroke:#ba6a6a,color:#fff
```

---

## 2. Data Flow Diagram

How data moves through the 15 coordination systems, from raw events through to external oversight.

```mermaid
flowchart LR
    subgraph SOURCES["Data Sources"]
        EV["Events & Actions"]
        DEC["Decisions & Authorizations"]
        OBL["Obligations & Contracts"]
    end

    subgraph CAPTURE["Capture Layer"]
        S1["System of Record
        (Immutable Logs)"]
        S9["System of Meaning
        (Canonical Definitions)"]
    end

    subgraph PROCESS["Processing Layer"]
        S3["System of Coordination
        (Intent Routing)"]
        S4["System of Governance
        (Rule Evaluation)"]
        S7["System of Incentives
        (Reputation Ledgers)"]
        S8["System of Trust
        (Reliability Scores)"]
    end

    subgraph EVIDENCE["Evidence Layer"]
        S6["System of Evidence
        (Tamper-Evident Proofs)"]
        S11["System of Irreversibility
        (One-Way Commits)"]
    end

    subgraph CONTROL["Control Layer"]
        S5["System of Enforcement
        (External Authorities)"]
        S10["System of Boundary
        (Authority Scopes)"]
        S13["System of Silence
        (Information Minimization)"]
    end

    subgraph OUTPUT["Output Layer"]
        S14["System of Legibility
        (Regulatory Dashboards)"]
        S15["System of Human Discipline
        (Human-in-the-Loop Gates)"]
        S12["System of Decay
        (Expiry & Cleanup)"]
    end

    subgraph CONSUMERS["Data Consumers"]
        REG["Regulators"]
        COURTS["Courts"]
        INV["Investors"]
        PUB["Public"]
        OPS["Operators"]
    end

    EV & DEC & OBL --> S1
    S1 --> S6
    S9 --> S4
    S4 --> S3
    S8 --> S3
    S7 --> S3
    S3 --> S2_exec["System of Execution
    (Action Handoff)"]
    S6 --> S5
    S10 --> S3
    S11 --> S1
    S13 --> S14
    S15 --> S11
    S4 --> S12
    S12 --> S8

    S14 --> REG & COURTS & INV & PUB
    S15 --> OPS

    style SOURCES fill:#1a3a3a,stroke:#4ababa,color:#fff
    style CAPTURE fill:#1a1a3a,stroke:#6a6aba,color:#fff
    style PROCESS fill:#1a3a1a,stroke:#4aba6a,color:#fff
    style EVIDENCE fill:#2a2a1a,stroke:#baba4a,color:#fff
    style CONTROL fill:#3a1a1a,stroke:#ba6a6a,color:#fff
    style OUTPUT fill:#3a1a3a,stroke:#ba6aba,color:#fff
    style CONSUMERS fill:#2a3a1a,stroke:#8aba4a,color:#fff
```

---

## 3. Money Flow Diagram

How revenue flows from clients through entities, products, and operators back into the ecosystem.

```mermaid
flowchart TB
    subgraph CLIENTS["Revenue Sources"]
        SMB["SMB Clients
        $5K-$50K deals"]
        ENT["Enterprise Clients
        $50K-$500K deals"]
        PLATFORM["Platform Users
        $19-$499/mo"]
        LICENSE["Licensees
        $100K-$500K"]
    end

    subgraph PRODUCTS["Product Revenue Channels"]
        CHOKE["Chokepoint Sprint
        $5K-$25K"]
        DOCUFLOW["DocuFlow SaaS
        $19-$499/mo"]
        BILLING["Billing Leakage
        $3K-$25K"]
        GOV["Governance Module
        $5K-$15K/mo"]
        CLAIMS["Insurance Claims
        $7.5K-$12K"]
        PIAR["PIAR Engagement
        $25K-$75K"]
        OPERATOR["Operator Training
        $500-$1,500"]
        IP["IP Licensing
        Variable"]
    end

    subgraph ENTITIES["Entity Revenue Allocation"]
        AINE_REV["AINE Revenue
        (Primary P&L)"]
        FM_REV["Frankmax Fees
        (Governance Services)"]
        LUM_REV["LevelUpMax Fees
        (Training & Certification)"]
        ORF_REV["ORF Protocol
        (Obligation Flow Tax)"]
        AINEF_REV["AINEF Capital
        (Factory Allocation)"]
    end

    subgraph REINVESTMENT["Reinvestment"]
        PRODUCT_DEV["Product Development"]
        OP_NET["Operator Network Growth"]
        REG_CRED["Regulatory Credibility"]
        PROTO_DEV["Protocol Development"]
        DATA_INFRA["Data Infrastructure"]
    end

    SMB --> CHOKE & BILLING & CLAIMS
    ENT --> GOV & PIAR & CHOKE
    PLATFORM --> DOCUFLOW
    LICENSE --> IP

    CHOKE & DOCUFLOW & BILLING & GOV & CLAIMS & PIAR --> AINE_REV
    PIAR --> FM_REV
    OPERATOR --> LUM_REV
    IP --> AINEF_REV

    AINE_REV -->|"70% retained"| REINVESTMENT
    AINE_REV -->|"30% operator share"| OP_NET
    FM_REV -->|"100% governance ops"| REG_CRED
    LUM_REV -->|"100% talent pipeline"| OP_NET
    ORF_REV -->|"100% protocol"| PROTO_DEV
    AINEF_REV -->|"allocated to ventures"| PRODUCT_DEV

    style CLIENTS fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style PRODUCTS fill:#1a2a3a,stroke:#4a6aba,color:#fff
    style ENTITIES fill:#2a2a1a,stroke:#baba4a,color:#fff
    style REINVESTMENT fill:#2a1a3a,stroke:#6a4aba,color:#fff
```

### Revenue Transition Over Time

```mermaid
flowchart LR
    Y1["Year 1
    Services-Led (85%)
    $228K total
    Chokepoint: 45%
    DocuFlow: 25%
    Other: 30%"] --> Y2["Year 2
    Product-Led (65%)
    $909K total
    DocuFlow: 35%
    Enterprise: 30%
    Governance: 20%
    Other: 15%"]

    Y2 --> Y3["Year 3
    Platform-Led (70%)
    $3.4M total
    Platform: 40%
    Enterprise: 30%
    Governance: 20%
    Protocol: 10%"]

    Y3 --> Y5["Year 5
    Infrastructure (95%)
    $50M+ total
    Protocol Fees: 60%
    Platform: 25%
    Enterprise: 15%"]

    style Y1 fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style Y2 fill:#1a2a3a,stroke:#4a6aba,color:#fff
    style Y3 fill:#2a1a3a,stroke:#6a4aba,color:#fff
    style Y5 fill:#3a1a1a,stroke:#ba4a4a,color:#fff
```

---

## 4. Talent Flow Diagram

How operators move through LevelUpMax into venture cells and the broader ecosystem.

```mermaid
flowchart TB
    subgraph PIPELINE["Talent Pipeline"]
        RAW["Raw Ambition
        No ecosystem experience"]
        REFER["Referral from
        Existing Operators"]
        ORGANIC["Organic Inbound
        Content & Brand"]
    end

    subgraph LUM_STAGES["LevelUpMax Stages"]
        S1_T["Stage 1: APPLICATION
        Skills assessment
        Belief system mapping"]
        S2_T["Stage 2: ONBOARDING
        Core training
        M-Shaped Mind development"]
        S3_T["Stage 3: SUPERVISED DELIVERY
        3 engagements under guidance
        Quality verification"]
        S4_T["Stage 4: INDEPENDENT DELIVERY
        Solo client work
        Revenue share begins"]
        S5_T["Stage 5: VENTURE CELL LEAD
        Own client portfolio
        Operator recruitment"]
        S6_T["Stage 6: CAPITAL ALLOCATION
        Investment authority
        Strategic decisions"]
    end

    subgraph DEPLOYMENT["Deployment"]
        VC["Venture Cell
        (2-5 operators)"]
        AINE_OP["AINE Operations
        (Enterprise clients)"]
        FM_OP["Frankmax Governance
        (Audit & accountability)"]
        TRAIN["LevelUpMax Trainer
        (Next generation)"]
    end

    subgraph GROWTH["Operator Growth Trajectory"]
        MONTH3["Month 3
        0 operators active
        1 in training"]
        MONTH6["Month 6
        2 operators active
        1 in training"]
        MONTH12["Month 12
        7 operators active
        3 in training"]
        MONTH24["Month 24
        22 operators active
        5 in training"]
        MONTH36["Month 36
        50+ operators active
        8 in training"]
    end

    RAW & REFER & ORGANIC --> S1_T
    S1_T -->|"50% pass"| S2_T
    S2_T -->|"80% pass"| S3_T
    S3_T -->|"70% pass"| S4_T
    S4_T -->|"60% advance"| S5_T
    S5_T -->|"30% advance"| S6_T

    S4_T --> VC & AINE_OP
    S5_T --> VC & FM_OP
    S6_T --> AINE_OP & TRAIN

    MONTH3 --> MONTH6 --> MONTH12 --> MONTH24 --> MONTH36

    style PIPELINE fill:#1a3a3a,stroke:#4ababa,color:#fff
    style LUM_STAGES fill:#2a3a1a,stroke:#8aba4a,color:#fff
    style DEPLOYMENT fill:#1a2a3a,stroke:#4a6aba,color:#fff
    style GROWTH fill:#2a2a1a,stroke:#baba4a,color:#fff
```

---

## 5. Governance Flow Diagram

How decisions flow through the PIAR process, through Frankmax governance, to execution.

```mermaid
flowchart TB
    subgraph TRIGGER["Decision Trigger"]
        NEW_VENTURE["New Venture Proposal"]
        IRREVERSIBLE["Irreversible Action"]
        CAPITAL["Capital Allocation > $10K"]
        RULE_CHANGE["Governance Rule Change"]
        INCIDENT["Incident / Failure"]
    end

    subgraph PIAR_FLOW["PIAR Process"]
        PIAR_INIT["PIAR Initiated
        'If this fails, who is accountable?'"]
        ACC_CHAIN["Map Accountability Chain
        Human endpoint identified"]
        PHASE_CHECK["Phase Check
        Is human at appropriate
        developmental phase?"]
        AFB_CHECK["AFB Check
        Are agents within
        authorized function bundles?"]
        RISK_EVAL["Risk Evaluation
        Quantified impact assessment"]
    end

    subgraph FRANKMAX["Frankmax Governance"]
        CLASSIFY["Classify Decision
        Operational / Capital / Constitutional"]
        S4_GOV["System of Governance
        Apply versioned rules"]
        S15_HUMAN["System of Human Discipline
        Mandatory human gate"]
        S11_IRREVERSIBLE["System of Irreversibility
        One-way commit check"]
    end

    subgraph DECISION["Decision Outcome"]
        APPROVE["APPROVED
        Execute with audit trail"]
        REJECT["REJECTED
        Document reasoning"]
        ESCALATE["ESCALATED
        Higher authority required"]
        KILL["KILLED
        Terminate initiative"]
    end

    subgraph EXECUTION["Post-Decision"]
        S1_RECORD["System of Record
        Immutable event log"]
        S6_EVIDENCE["System of Evidence
        Tamper-evident proof"]
        S2_EXEC["System of Execution
        Action handoff to external"]
        ACTS_LOG["ACTS Causal Trace
        Full decision chain recorded"]
    end

    NEW_VENTURE & IRREVERSIBLE & CAPITAL & RULE_CHANGE & INCIDENT --> PIAR_INIT
    PIAR_INIT --> ACC_CHAIN --> PHASE_CHECK --> AFB_CHECK --> RISK_EVAL

    RISK_EVAL --> CLASSIFY
    CLASSIFY -->|"Operational"| S4_GOV
    CLASSIFY -->|"Capital"| S15_HUMAN
    CLASSIFY -->|"Constitutional"| S11_IRREVERSIBLE

    S4_GOV --> APPROVE & REJECT
    S15_HUMAN --> APPROVE & REJECT & ESCALATE
    S11_IRREVERSIBLE --> APPROVE & REJECT & ESCALATE & KILL

    APPROVE --> S1_RECORD --> S6_EVIDENCE --> S2_EXEC
    APPROVE --> ACTS_LOG
    REJECT --> ACTS_LOG
    ESCALATE --> ACTS_LOG
    KILL --> ACTS_LOG

    style TRIGGER fill:#3a2a1a,stroke:#ba8a4a,color:#fff
    style PIAR_FLOW fill:#3a1a3a,stroke:#ba6aba,color:#fff
    style FRANKMAX fill:#1a1a3a,stroke:#6a6aba,color:#fff
    style DECISION fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style EXECUTION fill:#1a3a3a,stroke:#4ababa,color:#fff
```

### Decision Categories and Human Requirements

```mermaid
flowchart LR
    subgraph CAT["Decision Categories"]
        EXIST["Existential
        Entity dissolution
        Constitutional amendment"]
        STRAT["Strategic
        New entity creation
        Major capital allocation"]
        OPS_H["Operational High-Impact
        Large contracts
        Team restructuring"]
        OPS_S["Operational Standard
        Routine tasks
        Standard procurement"]
        TACT["Tactical
        Routine execution
        Standard tool usage"]
    end

    subgraph REQ["Human Requirements"]
        EXIST_R["AINEFF Board +
        Multi-Human Ratification +
        30-Day Cooling Period"]
        STRAT_R["AINEF Leadership +
        Dual-Human Approval +
        7-Day Cooling Period"]
        OPS_H_R["Enterprise Leadership +
        Single-Human Approval +
        24-Hour Cooling Period"]
        OPS_S_R["Team Lead Approval
        No Mandatory Delay"]
        TACT_R["AI-Autonomous
        + Audit Trail"]
    end

    EXIST --> EXIST_R
    STRAT --> STRAT_R
    OPS_H --> OPS_H_R
    OPS_S --> OPS_S_R
    TACT --> TACT_R

    style CAT fill:#1a1a3a,stroke:#6a6aba,color:#fff
    style REQ fill:#1a3a1a,stroke:#4aba4a,color:#fff
```

---

## 6. Technology Stack Diagram

The complete technology stack from infrastructure layer through to user-facing products.

```mermaid
graph TB
    subgraph L1_INFRA["Layer 1: Infrastructure"]
        COMPUTE["Compute & Energy
        Cloud / On-Prem / Hybrid"]
        STORAGE["Storage
        Append-Only Event Stores
        Knowledge Graphs"]
        NETWORK["Network
        Protocol Routing
        PCP / PEP Isolation"]
    end

    subgraph L2_COGNITIVE["Layer 2: Cognitive Architecture"]
        UMAL["UMAL
        Universal Model
        Abstraction Layer"]
        CPE["CPE
        Cognitive Post-Processing
        Engine"]
        GRIL["GRIL
        Grounded Retrieval
        Intelligence Layer"]
    end

    subgraph L3_DATA["Layer 3: Data, Memory & Identity"]
        OMG["OMG
        Orchestrated Memory
        Graph"]
        IRMS2["IRMS
        Identity & Role
        Management"]
        KIMS2["KIMS
        Knowledge Integrity
        Management"]
    end

    subgraph L4_EXPERIENCE["Layer 4: Experience & Intelligence"]
        UIEE["UIEE
        Unified Intelligence
        Experience Engine"]
        WGE2["WGE
        Work Genesis Engine"]
        MAGE["MAGE
        Meta-Agent
        Governance Engine"]
    end

    subgraph L5_AGENT["Layer 5: Agent Runtime"]
        ARE["ARE
        Agent Runtime
        Environment"]
        AOS["AOS
        Agentic Operating
        System"]
        ACTS2["ACTS
        Audit & Causal
        Trace System"]
    end

    subgraph L6_ECONOMIC["Layer 6: Economic & Trust"]
        ORF2["ORF Protocol
        Obligation Settlement"]
        PAME2["PAME
        Power Asymmetry Engine"]
        DEFS2["DEFS
        Defensive Economics"]
        CCRS2["CCRS
        Cartel & Coordination
        Risk"]
    end

    subgraph L7_PRODUCTS["Layer 7: User-Facing Products"]
        DOCUFLOW2["DocuFlow
        Compliance SaaS"]
        CHOKEPOINT["Chokepoint
        Intelligence Map"]
        BILLING2["Billing Leakage
        Scanner"]
        GOV2["Governance Gap
        Analyzer"]
        CLAIMS2["Insurance Claims
        Automation"]
        PIAR2["PIAR
        Accountability Review"]
        MARKETPLACE["Skills Marketplace"]
    end

    L1_INFRA --> L2_COGNITIVE
    L2_COGNITIVE --> L3_DATA
    L3_DATA --> L4_EXPERIENCE
    L4_EXPERIENCE --> L5_AGENT
    L5_AGENT --> L6_ECONOMIC
    L6_ECONOMIC --> L7_PRODUCTS

    style L1_INFRA fill:#3a1a1a,stroke:#ba6a6a,color:#fff
    style L2_COGNITIVE fill:#3a2a1a,stroke:#ba8a4a,color:#fff
    style L3_DATA fill:#2a2a1a,stroke:#baba4a,color:#fff
    style L4_EXPERIENCE fill:#1a3a1a,stroke:#4aba6a,color:#fff
    style L5_AGENT fill:#1a2a3a,stroke:#4a6aba,color:#fff
    style L6_ECONOMIC fill:#1a1a3a,stroke:#6a6aba,color:#fff
    style L7_PRODUCTS fill:#2a1a3a,stroke:#8a4aba,color:#fff
```

### Protocol Architecture: PCP vs PEP

```mermaid
flowchart LR
    subgraph PCP["PCP — Public Civilization Protocol"]
        PCP_GOV["Governance Signals"]
        PCP_AUDIT["Audit Flows"]
        PCP_CONSTRAINT["Constraint Propagation"]
        PCP_EVIDENCE["Evidence Emission"]
    end

    subgraph BOUNDARY["IPS Boundary
    (Inter-Protocol System)
    STRICT ISOLATION"]
        IPS_GATE["IPS Gateway
        No state leakage
        Message integrity verified"]
    end

    subgraph PEP["PEP — Private Enterprise Protocol"]
        PEP_BIZ["Business Logic"]
        PEP_AGENT["Agent Execution"]
        PEP_DATA["Operational Data"]
        PEP_MEMORY["Enterprise Memory"]
    end

    PCP_GOV & PCP_AUDIT & PCP_CONSTRAINT -->|"governance in"| IPS_GATE
    IPS_GATE -->|"execution out"| PEP_BIZ & PEP_AGENT
    PEP_DATA & PEP_MEMORY -->|"evidence in"| IPS_GATE
    IPS_GATE -->|"evidence out"| PCP_EVIDENCE

    style PCP fill:#1a1a3a,stroke:#6a6aba,color:#fff
    style BOUNDARY fill:#3a1a1a,stroke:#ba6a6a,color:#fff
    style PEP fill:#1a3a1a,stroke:#4aba6a,color:#fff
```

---

## Summary: The Single-Page View

The AINEFF Ecosystem is a **constitutional economic coordination protocol** where:

1. **AINEFF** (constitutional law) constrains **AINEF** (venture factory) which spawns **AINEGs** (federations) which coordinate **AINEs** (enterprises)
2. **Frankmax** governs accountability across all entities using 15 coordination systems
3. **LevelUpMax** converts raw talent into certified operators through 6 stages
4. **ORF Protocol** settles obligations across entity boundaries
5. **WGE** orchestrates work across autonomous venture cells
6. Revenue flows from 25+ products through enterprises, with 30% operator share and 70% reinvested into 7 compounding asset classes
7. The technology stack spans 7 layers from infrastructure through to user-facing products, with PCP/PEP protocol isolation enforced at every boundary
8. All decisions flow through PIAR accountability review before execution, with human gates at every irreversible action
