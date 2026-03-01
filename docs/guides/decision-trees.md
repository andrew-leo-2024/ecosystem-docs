---
sidebar_position: 4
title: "Decision Trees & Flowcharts"
description: "Key decision trees visualized as flowcharts — should we build this, should we kill this, which market to enter, which product to offer, which operator track, how to classify a rule change, incident severity, and investment evaluation."
---

# Decision Trees & Flowcharts

The AINEFF Ecosystem formalizes recurring decisions into explicit decision trees. This page collects all major decision trees into one visual reference. Each tree can be traced back to its source documentation for full context.

---

## 1. Should We Build This System?

The Green / Yellow / Red / Gray priority framework determines when to build each of the 74 systems.

**Source:** [Systems & Modules Overview](/docs/systems/)

```mermaid
flowchart TD
    START["Proposed System or Feature"]
    Q1{"Is the protocol
    non-functional
    without it?"}
    Q2{"Is real obligation
    handling dependent
    on it?"}
    Q3{"Does current scale
    justify the
    engineering cost?"}
    Q4{"Is there a clear
    forcing function
    demanding it?"}

    GREEN["GREEN — Build Now
    Structurally required.
    Without this, nothing works.
    ~21 systems, Years 1-3"]
    YELLOW["YELLOW — Build When Proven
    Required once protocol handles
    real obligations. Defer until
    demand materializes.
    ~18 systems, Years 2-5"]
    RED["RED — Defer
    Important but not urgent.
    Build when scale justifies cost.
    ~20 systems, Years 4-8"]
    GRAY["GRAY — May Never Need
    Theoretically complete but
    practically optional.
    ~15 systems, If ever"]

    START --> Q1
    Q1 -->|"Yes"| GREEN
    Q1 -->|"No"| Q2
    Q2 -->|"Yes"| YELLOW
    Q2 -->|"No"| Q3
    Q3 -->|"Yes"| RED
    Q3 -->|"No"| Q4
    Q4 -->|"Yes"| RED
    Q4 -->|"No"| GRAY

    style GREEN fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style YELLOW fill:#3a3a1a,stroke:#baba4a,color:#fff
    style RED fill:#3a1a1a,stroke:#ba4a4a,color:#fff
    style GRAY fill:#2a2a2a,stroke:#6a6a6a,color:#ccc
```

### Build Priority Examples

| System | Priority | Rationale |
|---|---|---|
| EMS (Enterprise Manufacturing) | Green | Cannot create enterprises without it |
| GAAGR (Global Registry) | Green | Cannot identify entities without it |
| Assembly Line Orchestration | Yellow | Needed when manufacturing at volume |
| Insurance Pool | Red | Needed when group risk pooling begins |
| Intergovernmental Review | Gray | Needed only for cross-border treaty coordination |

---

## 2. Should We Kill This Venture?

The kill criteria decision tree applies to ventures, features, products, and systems at any phase.

**Source:** [Kill Discipline](/docs/execution/kill-criteria)

```mermaid
flowchart TD
    TRIGGER["Kill Trigger Fires
    (Data threshold crossed)"]

    VERIFY{"STEP 1: VERIFY
    Is the data real?
    Sample size sufficient?
    Measurement accurate?"}

    CONTINUE["Continue with
    better measurement"]

    QUANTIFY["STEP 2: QUANTIFY
    Resources consumed?
    Opportunity cost?
    What would reallocation produce?"]

    DECIDE{"STEP 3: DECIDE"}

    KILL["KILL
    Stop all work immediately
    Reallocate resources
    Document learnings"]

    PIVOT["PIVOT
    Change approach, not goal
    Set new kill criteria
    30-day review deadline"]

    PERSIST["PERSIST
    New data expected
    Hard deadline set
    Maximum 30 more days"]

    REDIRECT["STEP 4: REDIRECT
    Where do freed resources go?
    What is the next highest-value activity?"]

    REVIEW["30-Day Mandatory Review
    (If data does not improve, KILL)"]

    TRIGGER --> VERIFY
    VERIFY -->|"Data invalid"| CONTINUE
    VERIFY -->|"Data valid"| QUANTIFY
    QUANTIFY --> DECIDE
    DECIDE -->|"Clear failure,
    no recovery path"| KILL
    DECIDE -->|"Goal valid,
    approach wrong"| PIVOT
    DECIDE -->|"New data
    expected soon"| PERSIST
    KILL --> REDIRECT
    PIVOT --> REDIRECT
    PERSIST --> REVIEW
    REVIEW -->|"Improved"| CONTINUE
    REVIEW -->|"No improvement"| KILL

    style TRIGGER fill:#3a1a1a,stroke:#ba4a4a,color:#fff
    style KILL fill:#3a1a1a,stroke:#ba4a4a,color:#fff
    style REDIRECT fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style PERSIST fill:#3a3a1a,stroke:#baba4a,color:#fff
```

### Mandatory Kill Triggers (Any Phase)

| # | Trigger | Threshold | Action |
|---|---|---|---|
| 1 | Founder health crisis | Significantly impaired | Pause all non-essential activity |
| 2 | Cash runway &lt; 30 days | Cannot cover expenses | Emergency consulting revenue |
| 3 | Zero revenue at Day 90 | $0 collected | Full strategic review |
| 4 | Key dependency failure | Critical tool/partner gone | Migrate in 14 days or kill |
| 5 | Legal/regulatory threat | Cease and desist / lawsuit | Pause, seek counsel |
| 6 | Ethical violation | Atomic Constraint breached | Kill immediately. No exceptions. |
| 7 | Sunk cost escalation | Spending to justify past spending | Kill immediately |

---

## 3. Which Market Wedge to Enter?

Decision tree for selecting target vertical based on existing relationships, regulatory environment, and deal size.

**Source:** [6 Market Wedges](/docs/products/market-wedges)

```mermaid
flowchart TD
    START["Which market wedge?"]

    Q1{"Do you have existing
    relationships in
    a specific vertical?"}

    Q2{"Is the vertical
    heavily regulated?"}

    Q3{"What is the
    typical deal size
    you need?"}

    Q4{"Do you need
    fast sales cycles
    or large deals?"}

    PROF["PROFESSIONAL SERVICES
    Entry: DocuFlow ($19-49/mo)
    Expansion: $25K-$100K ACV
    Fastest self-serve entry
    Phase 0 activation"]

    HEALTH["HEALTHCARE
    Entry: Claims Sprint ($7.5K-$12K)
    Expansion: $75K-$250K ACV
    Highest regulatory demand
    Phase 0-1 activation"]

    MFG["MANUFACTURING
    Entry: Chokepoint Dx ($5K-$15K)
    Expansion: $50K-$200K ACV
    High operational complexity
    Phase 1 activation"]

    LOGISTICS["LOGISTICS
    Entry: Chokepoint Dx ($5K-$15K)
    Expansion: $50K-$200K ACV
    Supply chain opacity
    Phase 1-2 activation"]

    BANKING["BANKING
    Entry: Billing Scanner ($25K)
    Expansion: $100K-$500K ACV
    Very high regulatory
    Phase 2 activation"]

    CONSTRUCT["CONSTRUCTION
    Entry: Chokepoint Dx ($5K-$15K)
    Expansion: $50K-$200K ACV
    Safety and project governance
    Phase 2 activation"]

    START --> Q1
    Q1 -->|"Yes — professional services"| PROF
    Q1 -->|"Yes — healthcare"| HEALTH
    Q1 -->|"Yes — other vertical"| Q2
    Q1 -->|"No existing relationships"| Q2

    Q2 -->|"Very high (banking, healthcare)"| Q3
    Q2 -->|"High (manufacturing, construction)"| Q4
    Q2 -->|"Medium (logistics, prof services)"| Q4

    Q3 -->|"Need $100K+ ACV"| BANKING
    Q3 -->|"Need $50K-$100K ACV"| HEALTH

    Q4 -->|"Fast cycles (2-4 weeks)"| MFG
    Q4 -->|"Large deals over time"| LOGISTICS
    Q4 -->|"Both"| CONSTRUCT

    style PROF fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style HEALTH fill:#1a2a3a,stroke:#4a6aba,color:#fff
    style MFG fill:#2a2a1a,stroke:#baba4a,color:#fff
    style BANKING fill:#2a1a3a,stroke:#6a4aba,color:#fff
    style LOGISTICS fill:#1a3a3a,stroke:#4ababa,color:#fff
    style CONSTRUCT fill:#3a2a1a,stroke:#ba8a4a,color:#fff
```

---

## 4. Which Product to Offer?

Based on buyer persona, pain point, and budget.

**Source:** [Products Overview](/docs/products/), [Revenue Streams](/docs/products/revenue-streams)

```mermaid
flowchart TD
    START["Client conversation
    reveals pain point"]

    Q1{"What is the
    primary pain?"}

    Q2{"What is the
    budget range?"}

    Q3{"Is this a
    one-time or
    ongoing need?"}

    DOCUFLOW["DocuFlow SaaS
    $19-$499/mo
    Compliance documentation
    Self-serve entry"]

    CHOKEPOINT["Chokepoint Intelligence Map
    $5K-$25K one-time
    Bottleneck identification
    5-10 day delivery"]

    BILLING["Billing Leakage Scanner
    $3K-$25K one-time
    Revenue recovery
    Invoice analysis"]

    CLAIMS["Insurance Claims Sprint
    $7.5K-$12K one-time
    Claims automation
    2-4 week delivery"]

    GOVGAP["Governance Gap Analyzer
    Free (lead gen)
    5-question assessment
    Upsell to paid products"]

    PIAR_P["PIAR Engagement
    $25K-$75K
    Accountability review
    High-stakes decisions"]

    GOVERNANCE["Governance License
    $8K-$20K one-time
    + $5K-$15K/mo ongoing
    Compliance-as-a-service"]

    ENTERPRISE["Enterprise Deployment
    $100K-$500K
    Full platform
    6-12 month engagement"]

    START --> Q1
    Q1 -->|"Documentation burden"| DOCUFLOW
    Q1 -->|"Operational bottlenecks"| CHOKEPOINT
    Q1 -->|"Revenue leakage"| BILLING
    Q1 -->|"Claims processing"| CLAIMS
    Q1 -->|"'We don't know what we need'"| GOVGAP
    Q1 -->|"Accountability gaps"| Q2
    Q1 -->|"Regulatory compliance"| Q2
    Q1 -->|"Full digital transformation"| Q2

    Q2 -->|"$0-$5K"| DOCUFLOW
    Q2 -->|"$5K-$25K"| CHOKEPOINT
    Q2 -->|"$25K-$75K"| PIAR_P
    Q2 -->|"$75K+"| Q3

    Q3 -->|"One-time engagement"| PIAR_P
    Q3 -->|"Ongoing governance need"| GOVERNANCE
    Q3 -->|"Full platform deployment"| ENTERPRISE

    style DOCUFLOW fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style GOVGAP fill:#1a3a3a,stroke:#4ababa,color:#fff
    style ENTERPRISE fill:#2a1a3a,stroke:#6a4aba,color:#fff
```

---

## 5. Which Operator Track?

Based on background, goals, and experience level.

**Source:** [LevelUpMax](/docs/entities/levelupmax), [Operator Training](/docs/products/offerings/operator-track)

```mermaid
flowchart TD
    START["Operator Candidate"]

    Q1{"Background?"}
    Q2{"Primary goal?"}
    Q3{"Experience level?"}

    T1["TRACK 1: Operations Foundation
    $500 | 2 weeks
    For: Career changers, new graduates
    Focus: Operational thinking, chokepoint mapping
    Output: Can assist on engagements"]

    T2["TRACK 2: Diagnostic Specialist
    $1,000 | 4 weeks
    For: Consultants, analysts
    Focus: Chokepoint diagnostics, data analysis
    Output: Can run diagnostics independently"]

    T3["TRACK 3: Governance Practitioner
    $1,500 | 6 weeks
    For: Compliance officers, risk managers
    Focus: PIAR, governance frameworks, audit
    Output: Can deliver governance engagements"]

    T4["TRACK 4: Enterprise Architect
    $1,500 | 8 weeks
    For: Technical leads, architects
    Focus: Architecture, protocol design, EMS
    Output: Can design enterprise deployments"]

    T5["TRACK 5: Venture Cell Leader
    $1,500 | 12 weeks
    For: Experienced operators
    Focus: P&L ownership, team building, strategy
    Output: Can run independent venture cell"]

    START --> Q1
    Q1 -->|"Technical / Engineering"| Q2
    Q1 -->|"Business / Consulting"| Q2
    Q1 -->|"Compliance / Legal"| T3
    Q1 -->|"No professional experience"| T1

    Q2 -->|"Learn the fundamentals"| T1
    Q2 -->|"Deliver client engagements"| Q3
    Q2 -->|"Run my own venture cell"| T5

    Q3 -->|"Junior (0-3 years)"| T2
    Q3 -->|"Mid-level (3-7 years)"| T3
    Q3 -->|"Senior (7+ years, technical)"| T4
    Q3 -->|"Senior (7+ years, business)"| T5

    style T1 fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style T2 fill:#1a2a3a,stroke:#4a6aba,color:#fff
    style T3 fill:#2a2a1a,stroke:#baba4a,color:#fff
    style T4 fill:#2a1a2a,stroke:#ba4aba,color:#fff
    style T5 fill:#2a1a3a,stroke:#6a4aba,color:#fff
```

---

## 6. How to Classify a Rule Change

Operational vs Capital vs Constitutional classification determines the approval path.

**Source:** [Governance Review SOP](/docs/processes/governance-review-sop), [15 Systems of Coordination](/docs/blueprint/15-systems-coordination)

```mermaid
flowchart TD
    START["Proposed Rule Change"]

    Q1{"Does it change
    the Atomic Constraint
    or AINEFF charter?"}

    Q2{"Does it change
    capital allocation
    or entity creation /
    dissolution?"}

    Q3{"Does it affect
    cross-entity
    governance?"}

    CONSTITUTIONAL["CONSTITUTIONAL CHANGE
    Approval: AINEFF Board
    + Multi-Human Ratification
    Cooling Period: 30 days
    Formal amendment process
    Supermajority required"]

    CAPITAL["CAPITAL CHANGE
    Approval: AINEF Leadership
    + Dual-Human Approval
    Cooling Period: 7 days
    Board vote required"]

    OPERATIONAL_HIGH["OPERATIONAL (HIGH-IMPACT)
    Approval: Enterprise Leadership
    + Single-Human Approval
    Cooling Period: 24 hours
    Standard approval chain"]

    OPERATIONAL_STD["OPERATIONAL (STANDARD)
    Approval: Team Lead
    No Mandatory Delay
    Documented and versioned"]

    START --> Q1
    Q1 -->|"Yes"| CONSTITUTIONAL
    Q1 -->|"No"| Q2
    Q2 -->|"Yes"| CAPITAL
    Q2 -->|"No"| Q3
    Q3 -->|"Yes, high-impact"| OPERATIONAL_HIGH
    Q3 -->|"No, within one entity"| OPERATIONAL_STD

    style CONSTITUTIONAL fill:#3a1a1a,stroke:#ba4a4a,color:#fff
    style CAPITAL fill:#3a2a1a,stroke:#ba8a4a,color:#fff
    style OPERATIONAL_HIGH fill:#2a2a1a,stroke:#baba4a,color:#fff
    style OPERATIONAL_STD fill:#1a3a1a,stroke:#4aba4a,color:#fff
```

---

## 7. Incident Severity Classification

P0 through P3 severity levels with response requirements.

**Source:** [Incident Response SOP](/docs/processes/incident-response-sop)

```mermaid
flowchart TD
    INCIDENT["Incident Detected"]

    Q1{"Does it violate
    the Atomic Constraint
    or constitute an
    existential threat?"}

    Q2{"Is revenue, client
    delivery, or compliance
    currently impacted?"}

    Q3{"Is it degrading
    performance or
    creating risk?"}

    P0["P0 — EXISTENTIAL
    Response: Immediate (minutes)
    Escalation: AINEFF Board + Founder
    Actions: All-hands, halt affected systems
    Cooling: None — act now
    Examples: Atomic Constraint violation,
    data breach, legal threat, cash < 30 days"]

    P1["P1 — CRITICAL
    Response: Within 1 hour
    Escalation: Enterprise leadership
    Actions: Dedicated response team
    Examples: Revenue system down,
    client delivery blocked,
    compliance deadline at risk"]

    P2["P2 — SIGNIFICANT
    Response: Within 4 hours
    Escalation: Team lead
    Actions: Prioritize in current sprint
    Examples: Performance degradation,
    elevated error rates,
    non-critical system outage"]

    P3["P3 — MINOR
    Response: Within 24 hours
    Escalation: Assigned engineer
    Actions: Schedule fix in next sprint
    Examples: Cosmetic issues,
    non-blocking bugs,
    documentation gaps"]

    INCIDENT --> Q1
    Q1 -->|"Yes"| P0
    Q1 -->|"No"| Q2
    Q2 -->|"Yes"| P1
    Q2 -->|"No"| Q3
    Q3 -->|"Yes"| P2
    Q3 -->|"No"| P3

    style P0 fill:#3a1a1a,stroke:#ba4a4a,color:#fff
    style P1 fill:#3a2a1a,stroke:#ba8a4a,color:#fff
    style P2 fill:#2a2a1a,stroke:#baba4a,color:#fff
    style P3 fill:#1a3a1a,stroke:#4aba4a,color:#fff
```

---

## 8. Investment Opportunity Evaluation

Can we invest / Cannot invest decision tree based on constitutional constraints and strategic alignment.

**Source:** [Capital Strategy](/docs/execution/capital-strategy), [Monetization Boundaries](/docs/products/monetization-boundaries)

```mermaid
flowchart TD
    START["Investment Opportunity"]

    Q1{"Does it violate
    the Atomic Constraint?
    (No traceable human
    accountability endpoint)"}

    Q2{"Does it violate
    the Anti-ASI Clause?
    (Concentration of
    ungovernable power)"}

    Q3{"Does it create
    a conflict of interest
    between money and
    coordination authority?"}

    Q4{"Is it within
    the current phase
    scope?"}

    Q5{"Does it build
    at least 2 of the
    7 compounding
    asset classes?"}

    Q6{"Does the expected
    return justify the
    capital allocation?"}

    CANNOT_AC["CANNOT INVEST
    Reason: Atomic Constraint violation
    No exceptions. No 'just this once.'"]

    CANNOT_ASI["CANNOT INVEST
    Reason: Anti-ASI Clause violation
    Creates ungovernable concentration"]

    CANNOT_COI["CANNOT INVEST
    Reason: Money/Authority Conflict
    Money and coordination authority
    cannot co-locate"]

    DEFER["DEFER
    Reason: Out of phase scope
    Revisit when current phase
    exit criteria are met"]

    DEPRIORITIZE["DEPRIORITIZE
    Reason: Insufficient compounding
    Redirect to investments that
    build multiple asset classes"]

    EVALUATE["FULL EVALUATION
    Run financial analysis
    Run PIAR review
    Dual-human approval required"]

    INVEST["CAN INVEST
    Proceed with standard
    capital allocation SOP"]

    START --> Q1
    Q1 -->|"Yes"| CANNOT_AC
    Q1 -->|"No"| Q2
    Q2 -->|"Yes"| CANNOT_ASI
    Q2 -->|"No"| Q3
    Q3 -->|"Yes"| CANNOT_COI
    Q3 -->|"No"| Q4
    Q4 -->|"No"| DEFER
    Q4 -->|"Yes"| Q5
    Q5 -->|"No (builds 0-1)"| DEPRIORITIZE
    Q5 -->|"Yes (builds 2+)"| Q6
    Q6 -->|"No"| DEPRIORITIZE
    Q6 -->|"Yes"| EVALUATE
    EVALUATE --> INVEST

    style CANNOT_AC fill:#3a1a1a,stroke:#ba4a4a,color:#fff
    style CANNOT_ASI fill:#3a1a1a,stroke:#ba4a4a,color:#fff
    style CANNOT_COI fill:#3a1a1a,stroke:#ba4a4a,color:#fff
    style DEFER fill:#2a2a1a,stroke:#baba4a,color:#fff
    style DEPRIORITIZE fill:#3a2a1a,stroke:#ba8a4a,color:#fff
    style INVEST fill:#1a3a1a,stroke:#4aba4a,color:#fff
```

---

## Using These Decision Trees

These decision trees are not suggestions -- they are **governance instruments**. Each tree encodes constraints that flow from the Atomic Constraint, the 15 Systems of Coordination, and the constitutional hierarchy.

When you face one of these decisions:

1. Start at the top of the relevant tree
2. Answer each question honestly with current data
3. Follow the path to its conclusion
4. Document the decision and reasoning in ACTS
5. If you disagree with the tree's conclusion, escalate -- do not override

The trees are version-controlled governance artifacts subject to the [Governance Review SOP](/docs/processes/governance-review-sop).
