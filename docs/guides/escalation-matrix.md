---

sidebar_position: 8
title: "Escalation & Authority Matrix"
description: "Visual reference showing decision authority limits by role and operator stage — spending limits, technical decisions, client decisions, and governance decisions with escalation paths."
tags: [guide, reference, risk, governance]
custom_status: active
custom_owner: Andrew Leo
custom_last_review: 2026-03-01
custom_next_review: 2026-06-01
---

# Escalation & Authority Matrix

This reference document maps **who can decide what** across every operator stage and decision type. Use it to instantly determine whether you can act independently, must escalate, or must not touch a decision at all.

---

## Quick Reference: Escalation Path

```mermaid
flowchart TD
    DECISION([Decision Required])
    DECISION --> CLASSIFY{What type of decision?}

    CLASSIFY -->|Spending / Capital| SPEND[Check Spending Authority Table]
    CLASSIFY -->|Technical / Architecture| TECH[Check Technical Authority Table]
    CLASSIFY -->|Client / Commercial| CLIENT[Check Client Authority Table]
    CLASSIFY -->|Governance / Rules| GOV[Check Governance Authority Table]

    SPEND --> LIMIT{Within your authority limit?}
    TECH --> LIMIT
    CLIENT --> LIMIT
    GOV --> LIMIT

    LIMIT -->|Yes — Can Decide| ACT[Act and Document in ACTS]
    LIMIT -->|No — Must Escalate| ESC[Escalate to Next Authority Level]
    LIMIT -->|Must Not Touch| STOP[Do Not Proceed — Refer Upward]

    ESC --> WHO{Who to escalate to?}
    WHO -->|Cell Lead| CL[Cell Lead Reviews]
    WHO -->|Committee| CAC[Capital Allocation Committee]
    WHO -->|Board| BOARD[AINEFF Board + Human Ratification]

    CL --> RESOLVED([Decision Made])
    CAC --> RESOLVED
    BOARD --> RESOLVED

    style ACT fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style STOP fill:#3a1a1a,stroke:#ba4a4a,color:#fff
    style ESC fill:#2a2a1a,stroke:#baba4a,color:#fff
```

---

## Spending & Capital Authority

Spending authority increases with operator stage. Every expenditure must be logged regardless of amount.

| Amount Range | Stage 1-3 (Filter/Observe/Assist) | Stage 4 (Execute Bounded) | Stage 5 (Execute Autonomous) | Stage 6 (Govern/Allocate) | Approval Body |
|---|---|---|---|---|---|
| $0 -- $500 | Must Not Touch | Can Decide | Can Decide | Can Decide | Log only |
| $500 -- $5,000 | Must Not Touch | Must Escalate | Can Decide (with Cell Lead awareness) | Can Decide | Cell Lead |
| $5,000 -- $25,000 | Must Not Touch | Must Not Touch | Must Escalate | Can Decide (within delegation) | Capital Allocation Committee (simple majority) |
| $25,000 -- $100,000 | Must Not Touch | Must Not Touch | Must Not Touch | Must Escalate | Capital Allocation Committee (supermajority) |
| &gt; $100,000 | Must Not Touch | Must Not Touch | Must Not Touch | Must Escalate | Committee + Human Ratification |

### Spending Escalation Flow

```mermaid
flowchart LR
    subgraph TIER1["Tier 1: Micro-Spend"]
        T1["$0 — $500
        Stage 4+ Can Decide
        Log only"]
    end

    subgraph TIER2["Tier 2: Cell-Level"]
        T2["$500 — $5K
        Cell Lead Approval
        Documented rationale"]
    end

    subgraph TIER3["Tier 3: Committee"]
        T3["$5K — $25K
        CAC Simple Majority
        Full request + PIAR"]
    end

    subgraph TIER4["Tier 4: Supermajority"]
        T4["$25K — $100K
        CAC Supermajority
        Full request + PIAR
        + external review"]
    end

    subgraph TIER5["Tier 5: Ratification"]
        T5["> $100K
        Committee + Human Ratification
        Full request + PIAR
        + external review
        + Board awareness"]
    end

    TIER1 --> TIER2 --> TIER3 --> TIER4 --> TIER5

    style TIER1 fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style TIER2 fill:#1a2a3a,stroke:#4a6aba,color:#fff
    style TIER3 fill:#2a2a1a,stroke:#baba4a,color:#fff
    style TIER4 fill:#3a2a1a,stroke:#ba8a4a,color:#fff
    style TIER5 fill:#3a1a1a,stroke:#ba4a4a,color:#fff
```

**Source:** [Capital Allocation SOP](/docs/processes/capital-allocation-sop)

---

## Technical Decision Authority

Technical decisions cover architecture changes, vendor selection, tooling, data access, and deployment.

| Decision Type | Stage 1-3 | Stage 4 (Bounded) | Stage 5 (Autonomous) | Stage 6 (Govern/Allocate) | Escalation Target |
|---|---|---|---|---|---|
| Bug fix (non-breaking) | Must Not Touch | Can Decide | Can Decide | Can Decide | Peer reviewer |
| Configuration change | Must Not Touch | Can Decide (with review) | Can Decide | Can Decide | Peer reviewer |
| Feature implementation (within architecture) | Must Not Touch | Can Decide (with review) | Can Decide | Can Decide | Standard PR review |
| New integration or adapter | Must Not Touch | Must Escalate | Can Decide (with peer consultation) | Can Decide | Cell Lead |
| Architecture pattern change | Must Not Touch | Must Not Touch | Must Escalate | Can Decide (with Architecture Review) | Architecture Review Board |
| Vendor selection (&lt; $5K/yr) | Must Not Touch | Must Escalate | Can Decide | Can Decide | Cell Lead |
| Vendor selection (&gt; $5K/yr) | Must Not Touch | Must Not Touch | Must Escalate | Must Escalate | Capital Allocation Committee |
| Data access (read, non-PII) | Must Not Touch | Can Decide | Can Decide | Can Decide | Standard access controls |
| Data access (PII or sensitive) | Must Not Touch | Must Not Touch | Must Escalate | Can Decide (with compliance review) | Compliance + Legal |
| Core Zone deployment | Must Not Touch | Must Not Touch | Must Not Touch | Can Decide (2 senior reviewers + PIAR) | Senior review panel |
| Extension Zone deployment | Must Not Touch | Can Decide (peer review) | Can Decide | Can Decide | Standard pipeline |
| Isolation Zone deployment | Can Decide (Stage 3 only) | Can Decide | Can Decide | Can Decide | Self-review permitted |

### Architecture Zone Escalation

```mermaid
flowchart TD
    CHANGE([Technical Change Proposed])
    CHANGE --> ZONE{Which architecture zone?}

    ZONE -->|Core Zone| CORE[Core Zone Rules]
    ZONE -->|Extension Zone| EXT[Extension Zone Rules]
    ZONE -->|Isolation Zone| ISO[Isolation Zone Rules]

    CORE --> CORE_REQ[Requirements:
    Stage 5-6 ownership
    2 senior reviewers
    PIAR required
    Full pipeline + extended canary]

    EXT --> EXT_REQ[Requirements:
    Stage 3+ ownership
    1 peer reviewer
    Standard pipeline
    Canary optional for low-risk]

    ISO --> ISO_REQ[Requirements:
    Any operator
    Self-review permitted
    No pipeline required
    No production access]

    style CORE fill:#3a1a1a,stroke:#ba4a4a,color:#fff
    style EXT fill:#2a2a1a,stroke:#baba4a,color:#fff
    style ISO fill:#1a3a1a,stroke:#4aba4a,color:#fff
```

**Source:** [Deployment SOP](/docs/processes/deployment-sop)

---

## Client & Commercial Decision Authority

Client decisions encompass contract terms, scope changes, pricing, and relationship management.

| Decision Type | Stage 1-3 | Stage 4 (Bounded) | Stage 5 (Autonomous) | Stage 6 (Govern/Allocate) | Escalation Target |
|---|---|---|---|---|---|
| Client communication (routine) | Must Not Touch | Can Decide (CC Cell Lead) | Can Decide | Can Decide | Cell Lead awareness |
| Client communication (sensitive) | Must Not Touch | Must Escalate | Must Escalate | Can Decide | Cell Lead / Commercial Lead |
| Scope change (&lt; 10% of contract) | Must Not Touch | Must Escalate | Can Decide | Can Decide | Cell Lead |
| Scope change (&gt; 10% of contract) | Must Not Touch | Must Not Touch | Must Escalate | Can Decide (with PIAR) | Commercial Lead + PIAR |
| Pricing exception (&lt; 15% discount) | Must Not Touch | Must Not Touch | Can Decide (within pre-approved bands) | Can Decide | Cell Lead |
| Pricing exception (&gt; 15% discount) | Must Not Touch | Must Not Touch | Must Escalate | Must Escalate | Commercial Lead + Finance |
| Contract modification (non-material) | Must Not Touch | Must Not Touch | Can Decide (with Legal review) | Can Decide | Legal review |
| Contract modification (material) | Must Not Touch | Must Not Touch | Must Not Touch | Must Escalate | Legal + AINEG + PIAR |
| New client engagement | Must Not Touch | Must Not Touch | Can Decide (within cell mandate) | Can Decide | Cell Lead |
| Client termination | Must Not Touch | Must Not Touch | Must Escalate | Can Decide (with PIAR) | Cell Lead + AINEG |
| Client escalation handling | Must Not Touch | Must Escalate | Can Decide (P2-P3 issues) | Can Decide (all severity) | Severity-dependent |

### Client Decision Escalation Path

```mermaid
flowchart TD
    CLIENT_DEC([Client Decision Required])
    CLIENT_DEC --> IMPACT{Impact level?}

    IMPACT -->|Low — routine comms, minor scope| LOW[Stage 4+ Can Decide
    CC Cell Lead on comms
    Document in CRM]

    IMPACT -->|Medium — scope changes, pricing| MED[Stage 5+ Can Decide
    Cell Lead awareness
    Document rationale]

    IMPACT -->|High — contract mods, termination| HIGH[Stage 6 + Escalation
    PIAR required
    Legal review
    AINEG awareness]

    IMPACT -->|Critical — material changes| CRIT[Must Escalate to
    Commercial Lead + Legal
    + AINEG + PIAR
    + potential Board awareness]

    style LOW fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style MED fill:#2a2a1a,stroke:#baba4a,color:#fff
    style HIGH fill:#3a2a1a,stroke:#ba8a4a,color:#fff
    style CRIT fill:#3a1a1a,stroke:#ba4a4a,color:#fff
```

**Source:** [Client Engagement SOP](/docs/processes/client-engagement-sop)

---

## Governance Decision Authority

Governance decisions are the most restricted. They affect the rule set that governs the entire ecosystem.

| Decision Type | Stage 1-3 | Stage 4 (Bounded) | Stage 5 (Autonomous) | Stage 6 (Govern/Allocate) | Escalation Target |
|---|---|---|---|---|---|
| Propose operational rule change (Tier 1) | Must Not Touch | Can Propose (cannot approve) | Can Propose (cannot approve) | Can Propose and Approve | Cell Leads (simple majority) |
| Propose capital rule change (Tier 2) | Must Not Touch | Must Not Touch | Can Propose (cannot approve) | Can Propose (cannot approve alone) | Capital Allocation Committee (supermajority) |
| Propose constitutional rule change (Tier 3) | Must Not Touch | Must Not Touch | Must Not Touch | Can Propose (cannot approve) | Multi-body: AINEFF Board + AINEG + Frankmax |
| Initiate PIAR | Must Not Touch | Can Initiate | Can Initiate | Can Initiate and Lead | Decision Maker role |
| Lead PIAR (as Decision Maker) | Must Not Touch | Must Escalate (except supervised) | Can Lead | Can Lead | Governance Reviewer |
| Trigger kill criteria review | Must Not Touch | Must Escalate | Can Trigger | Can Trigger and Decide | Cell Lead / CAC |
| Approve operator stage progression | Must Not Touch | Must Not Touch | Must Not Touch | Can Approve (to Stage 4+) | AINEG representative |
| Modify SOP | Must Not Touch | Must Not Touch | Can Propose changes | Can Propose and Implement | Governance Reviewer sign-off |

### Governance Rule Change Escalation

```mermaid
flowchart LR
    subgraph T1["Tier 1: Operational"]
        T1D["Daily operations
        Simple majority of Cell Leads
        No cooling period
        7-day implementation"]
    end

    subgraph T2["Tier 2: Capital"]
        T2D["Financial controls
        2/3 supermajority of CAC
        14-day cooling period
        Legal + Finance review"]
    end

    subgraph T3["Tier 3: Constitutional"]
        T3D["Authority and structure
        Multi-body unanimous approval
        30-day cooling period
        External review required"]
    end

    T1 -->|Higher impact| T2
    T2 -->|Higher impact| T3

    style T1 fill:#1a3a1a,stroke:#4aba4a,color:#fff
    style T2 fill:#2a2a1a,stroke:#baba4a,color:#fff
    style T3 fill:#3a1a1a,stroke:#ba4a4a,color:#fff
```

**Source:** [Governance Review SOP](/docs/processes/governance-review-sop)

---

## Master Authority Matrix (All Decision Types)

A condensed cross-reference of operator stage against all decision categories.

| Operator Stage | Spending Limit | Technical Scope | Client Authority | Governance Authority | Escalation Default |
|---|---|---|---|---|---|
| **Stage 1 (Filter)** | $0 | None | None | None | N/A -- no authority |
| **Stage 2 (Observe)** | $0 | None | None | None | N/A -- observation only |
| **Stage 3 (Assist)** | $0 | Isolation Zone only | None | None | Supervisor for all decisions |
| **Stage 4 (Bounded)** | &lt; $500 | Extension + Isolation Zones, with review | Routine comms (CC Cell Lead) | Can initiate PIARs | Cell Lead |
| **Stage 5 (Autonomous)** | &lt; $5,000 | Full within cell mandate, new patterns with consultation | Direct client relationships, scope/pricing within bands | Full PIAR authority, can propose Tier 1-2 rules | Cell Lead / CAC |
| **Stage 6 (Govern/Allocate)** | Within delegation (up to CAC threshold) | Core Zone with senior review, architecture authority | Contract modifications, client strategy | Can propose all tiers, approve Tier 1, design governance | AINEG / AINEFF Board |

---

## Escalation Response Times

When escalation is required, the following response times apply:

| Escalation Target | Expected Response Time | If No Response |
|---|---|---|
| Peer reviewer | Within 4 hours | Assign alternate reviewer |
| Cell Lead | Within 2 hours (business hours) | Escalate to AINEG |
| Commercial Lead | Within 4 hours | Escalate to AINEG |
| Capital Allocation Committee | Within 48 hours (scheduled) or 4 hours (emergency) | Emergency session convened |
| Legal / Compliance | Within 24 hours (routine) or 2 hours (incident) | Outside counsel engaged |
| AINEG Representative | Within 24 hours | Escalate to AINEFF Board |
| AINEFF Board | Within 72 hours (routine) or 1 hour (P0 incident) | Emergency Board session |

---

## Key Rules for Escalation

1. **When in doubt, escalate.** It is always safer to escalate unnecessarily than to overstep authority. No operator has ever been penalized for escalating.
2. **Escalation is not failure.** Recognizing the boundary of your authority is a governance competency, not a weakness.
3. **Document every escalation** in ACTS with the rationale for why you escalated and who you escalated to.
4. **Never skip levels.** Escalate to the next authority level, not directly to the Board (unless P0 conditions are met).
5. **If your escalation target is unavailable,** escalate to the next level up after the expected response time elapses.
6. **"Must Not Touch" means Must Not Touch.** There is no exception pathway for decisions above your stage authority. Attempting to act on a "Must Not Touch" decision is a governance violation triggering demotion review.

---

## Related SOPs

- [Capital Allocation SOP](/docs/processes/capital-allocation-sop) -- Detailed spending approval workflows
- [Operator Onboarding SOP](/docs/processes/operator-onboarding-sop) -- Stage definitions and authority boundaries
- [Governance Review SOP](/docs/processes/governance-review-sop) -- Rule change tiers and approval processes
- [Incident Response SOP](/docs/processes/incident-response-sop) -- Severity-based escalation protocols
- [PIAR SOP](/docs/processes/piar-sop) -- Pre-Incident Accountability Review procedures
