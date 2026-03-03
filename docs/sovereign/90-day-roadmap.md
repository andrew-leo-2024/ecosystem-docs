---
slug: 90-day-roadmap
sidebar_position: 20
title: "90-Day Deployment Roadmap"
description: "Week-by-week execution plan for AINEFF Phase 1 sovereign deployment — beachhead client activation for banks/insurers and family offices, with success metrics at 30/60/90 days, failure triggers, rollback procedures, and resource requirements."
tags: [sovereign, roadmap, deployment, execution]
custom_status: Active
custom_owner: Frankmax
custom_last_review: 2026-03-03
custom_next_review: 2026-06-03

---

# 90-Day Deployment Roadmap

This is the execution plan for Phase 1 of the AINEFF sovereign deployment. It covers the first 90 days — the beachhead period targeting banks/insurers and family offices. Every week has defined deliverables, accountability assignments, and measurable outputs. There are no "strategy weeks" or "discovery phases." The ORF kernel and E-AEGL are operational by the end of Week 2. Everything before that is preparation; everything after is hardening.

The 90-day roadmap is the single most important document in the sovereign deployment program because it produces the evidence that either validates or kills everything that follows. If this roadmap fails, Phase 2 does not begin. If it succeeds, Phase 2 is already half-sold because the evidence chain speaks for itself.

---

## Weeks 1-2: Beachhead Activation

### Objective

Identify and onboard beachhead clients. Provision AINEFF environments. Deploy ORF kernel and E-AEGL before any other component touches the client's systems.

### Week 1 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **Beachhead client identification** — Minimum 2 banks/insurers, 1 family office. Selection criteria: acute governance pain, executive sponsor with authority to bind the organization, existing data infrastructure sufficient for E-AEGL integration. | Frankmax Deployment Lead | Signed engagement letters with named executive sponsors |
| **Governance gap assessment** — Structured assessment of each client's current governance: Where are irreversible actions authorized without single-point accountability? Where are audit trails incomplete or manually maintained? Where is decision latency exceeding institutional tolerance? | Governance Architect | Documented entropy baseline per client with quantified metrics |
| **AINEFF environment provisioning** — Isolated deployment environment per client. Infrastructure: compute, storage, network. Security: encryption at rest and in transit, access control, monitoring. No client data touches shared infrastructure. | Deployment Engineering Lead | Environment operational, security audit passed |
| **ORF constraint mapping** — For each client: identify every category of irreversible action. Map current authorization process. Identify where single-point accountability does not exist. Define the target state where every irreversible action has a named human liability bearer. | Governance Architect | Documented constraint map with gap analysis |

### Week 2 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **ORF kernel deployment** — Operational in each client environment. Every irreversible action type identified in Week 1 now requires a named human liability bearer before execution. Integration with client's existing authorization systems (wrap, not replace). | Deployment Engineering Lead | ORF kernel processing live transactions/decisions |
| **E-AEGL activation** — Sub-10ms policy enforcement on all financial transactions (banks) and information access events (family offices). SHA-256 hash-chained audit trail recording from first enforcement event. | Deployment Engineering Lead | E-AEGL latency \< 10ms confirmed, first hash chain entries verified |
| **Append-only governance log initialization** — Log receiving events from both ORF kernel and E-AEGL. Tamper-evidence verified. No modification or deletion capability confirmed by independent test. | Deployment Engineering Lead | Independent verification report |
| **Client executive briefing** — 60-minute briefing to executive sponsor and their direct reports. Content: what AINEFF is now doing in their environment, what they will see differently, what is required from them (naming liability bearers for irreversible actions). | Frankmax Deployment Lead | Briefing completed, questions documented, follow-up actions assigned |

:::warning[Week 2 Gate]
If ORF kernel and E-AEGL are not operational by end of Week 2, the deployment is behind schedule. Root cause analysis required within 48 hours. Acceptable causes: client infrastructure integration delays (recoverable). Unacceptable causes: AINEFF component failure (triggers Frankmax engineering escalation).
:::

---

## Weeks 3-4: Detection Layer Activation

### Objective

Deploy AgentCoder squads for continuous monitoring. Activate PIAR protocol for material decisions. Begin measuring what the governance infrastructure reveals.

### Week 3 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **AgentCoder squad deployment** — 1 squad per client. For banks: compliance monitoring, transaction pattern analysis, regulatory change tracking. For family offices: portfolio analytics, consolidated reporting, advisor activity monitoring. Quality gates enforced: Jarvis orchestrates, Coder builds, Reviewer validates, Tester stress-tests. | AgentCoder Squad Lead | First analytical output delivered and validated through quality gates |
| **E-AEGL audit trail review** — First systematic review of 7-14 days of audit trail data. Identify: authorization patterns, policy enforcement frequency, access patterns, anomalies. This is the first real picture of the client's governance reality versus their governance narrative. | Governance Architect | Audit trail review report delivered to client executive sponsor |
| **PIAR protocol activation** — Mandatory for all irreversible actions exceeding thresholds: $50M for banks/insurers, 2% of NAV for family offices. Pre-action accountability review documents: action, liability bearer, expected outcome, failure scenarios, rollback plan. | Governance Architect | First PIAR completed for a qualifying action |

### Week 4 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **Entropy baseline measurement** — Using 2 weeks of E-AEGL data + AgentCoder analysis: quantify current entropy rates across all 7 dimensions (strategy, operations, incentives, information, culture, capital, governance). This is the number everything else is measured against. | Governance Architect + AgentCoder Squad | Quantified entropy baseline report per client |
| **Decision latency baseline** — Measure time from decision need identification to authorized action for the 10 most recent material decisions per client. This becomes the pre-AINEFF benchmark. | AgentCoder Squad | Decision latency report with per-decision timestamps |
| **WGE activation** — Workforce Governance Engine operational. For banks: executive compliance tracking against regulatory requirements. For family offices: advisor performance tracking against client-defined benchmarks. | Deployment Engineering Lead | WGE dashboard operational with first data populated |
| **Information distortion assessment** — Compare governance log data with client's own reporting (board decks, management reports, regulatory filings). Quantify the gap between reported governance and actual governance. | Governance Architect | Distortion report delivered to executive sponsor |

:::info[The Week 4 Moment of Truth]
The entropy baseline and information distortion reports are the first deliverables that show the client their actual governance state — not the state they believe they are in. This is frequently uncomfortable. Executive sponsors must be prepared for findings that contradict their organization's self-narrative. The quality of the client relationship at this point determines whether AINEFF becomes operational infrastructure or expensive shelf-ware.
:::

---

## Weeks 5-6: Automation and AI Layer

### Objective

Scale AgentCoder capabilities beyond monitoring to active analysis. Begin the transition from "AINEFF shows you the problem" to "AINEFF helps you solve the problem."

### Week 5 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **AgentCoder analytical expansion** — Extend squad capabilities: Banks: automated regulatory change impact assessment (new regulation published \to impact analysis within 72 hours). Family offices: automated fee benchmarking across all advisor relationships. | AgentCoder Squad Lead | First automated impact assessment or fee benchmark delivered |
| **Cross-system data integration** — For banks: connect E-AEGL enforcement data with core banking system transaction data. For family offices: connect AgentCoder analytics with all custodian, administrator, and GP data feeds. | Deployment Engineering Lead | Integrated data pipeline operational, reconciliation validated |
| **Governance log analytics** — Automated analysis of governance log: decision frequency trends, liability bearer concentration, PIAR completion rates, access pattern anomalies. Weekly dashboard delivered to executive sponsor. | AgentCoder Squad | First weekly governance analytics dashboard delivered |

### Week 6 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **LevelUpMax pilot activation** — For family offices: begin structured education program for next-generation family members (Stage 1: awareness). For banks: begin compliance officer upskilling program on AINEFF governance capabilities. | LevelUpMax Pipeline Manager | First cohort enrolled, Stage 1 curriculum delivered |
| **Automated escalation triggers** — Implement automatic escalation for: E-AEGL latency breaches, governance log gaps, PIAR bypasses, ORF kernel violations. Escalation paths tested with simulated incidents. | Deployment Engineering Lead | All escalation triggers tested and confirmed operational |
| **First entropy reduction measurement** — Compare Week 6 entropy metrics against Week 4 baseline. Identify which vectors are responding to AINEFF deployment and which are not. For non-responding vectors: diagnose why and adjust approach. | Governance Architect | Delta report: baseline vs. current entropy per dimension |

---

## Weeks 7-8: Governance Hardening Cycle 1

### Objective

First full governance hardening cycle. Tighten what is working, fix what is not, and stress-test the system against adversarial scenarios.

### Week 7 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **Adversarial governance test** — Simulated governance breach: attempt to execute an irreversible action without proper ORF binding, attempt to modify a governance log entry, attempt to bypass PIAR for a qualifying action. Measure: detection time, escalation time, resolution time. | Frankmax Deployment Lead + External Red Team | Test report with pass/fail per scenario and time-to-detection metrics |
| **Accountability structure review** — Are the named liability bearers actually the right people? Are they accepting accountability or treating it as a formality? Are decision rights clear in practice, not just on paper? | Governance Architect | Review report with recommended adjustments |
| **Client feedback structured interview** — 90-minute structured interview with executive sponsor, 3-5 operational users, and 2-3 people who interact with AINEFF outputs. Questions focused on: decision quality improvement, friction points, unintended consequences. | Frankmax Deployment Lead | Interview transcripts and synthesized findings |

### Week 8 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **Governance hardening implementation** — Based on Week 7 findings: adjust threshold calibrations, refine escalation paths, modify accountability assignments, update PIAR templates. | Governance Architect + Deployment Engineering Lead | All identified adjustments implemented and verified |
| **Second entropy measurement** — Full 7-dimension entropy assessment. Compare against Week 4 baseline and Week 6 interim measurement. Identify trajectory: is entropy declining, stable, or (worst case) increasing? | Governance Architect + AgentCoder Squad | Entropy trajectory report with trend analysis |
| **Cross-client pattern analysis** — Compare entropy patterns across all Phase 1 clients. Identify shared patterns (candidates for the Kitchen pattern library) and unique patterns (candidates for client-specific intervention). | Frankmax Deployment Lead | First pattern library entries documented |

---

## Weeks 9-10: Cross-Entity Coordination

### Objective

Activate the coordination layer between clients and between internal entities within each client. Establish the feedback loops that make the system self-correcting rather than manually maintained.

### Week 9 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **Cross-entity coordination protocol** — For banks: coordination between business lines that share governance infrastructure (retail + commercial + investment banking governance alignment). For family offices: coordination between the family office governance and the underlying family members' personal governance needs. | Governance Architect | Protocol documented, first cross-entity decision processed |
| **Feedback loop architecture** — Implement automated feedback: when an AgentCoder analysis reveals a governance gap, it automatically generates a PIAR recommendation. When a PIAR identifies a recurring issue, it automatically generates a governance hardening ticket. When a governance hardening change is implemented, it automatically triggers a re-measurement cycle. | Deployment Engineering Lead | Feedback loops operational, first automated cycle completed |
| **Frankmax marketplace integration assessment** — Identify which of the 713 Frankmax marketplace AI solutions are relevant to each Phase 1 client. Prioritize 3-5 solutions per client for Phase 2 deployment consideration. | Frankmax Deployment Lead | Marketplace integration roadmap per client |

### Week 10 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **Cross-entity coordination stress test** — Simulate a decision that requires coordination between two entities within the same client (e.g., two bank business lines, or family office and family member). Measure: coordination latency, decision quality, accountability clarity. | Governance Architect | Stress test report with metrics |
| **LevelUpMax Stage 1 completion assessment** — Evaluate first LevelUpMax cohort: family office next-gen members or bank compliance officers. Measure: knowledge acquisition, behavioral change, readiness for Stage 2. | LevelUpMax Pipeline Manager | Assessment report with stage progression recommendations |
| **Pattern library enrichment** — Consolidate all entropy patterns observed across Phase 1 into structured pattern library entries. Each entry: pattern description, detection method, frequency, severity, recommended intervention. | Frankmax Deployment Lead | Pattern library updated with Phase 1 entries |

---

## Weeks 11-12: 90-Day Review and Phase 2 Decision

### Objective

Comprehensive 90-day review. Measure entropy reduction. Make the go/no-go decision for Phase 2. This is not a progress report — it is a decision gate.

### Week 11 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **Final entropy measurement** — Complete 7-dimension entropy assessment for each Phase 1 client. Compare against Week 4 baseline. Compute net entropy reduction percentage per dimension and overall. | Governance Architect + AgentCoder Squad | Entropy reduction report per client |
| **Financial impact quantification** — Translate entropy reduction into financial terms: decision latency reduction \to opportunity cost saved. Information distortion reduction \to risk reduction value. Governance log completeness \to regulatory compliance cost avoidance. | Governance Architect | Financial impact report per client |
| **Client retention assessment** — For each Phase 1 client: is the executive sponsor recommending continuation? Are operational users engaged or resistant? Is the governance infrastructure being used or worked around? | Frankmax Deployment Lead | Retention assessment per client with renewal recommendation |

### Week 12 Deliverables

| Deliverable | Owner | Done-When |
|---|---|---|
| **90-Day review document** — Single document per client: entropy baseline, trajectory at 30/60/90 days, financial impact, governance hardening outcomes, adversarial test results, client feedback, and explicit recommendation for continuation. | Frankmax Deployment Lead | Document delivered to Frankmax executive team and client executive sponsor |
| **Phase 2 go/no-go decision** — Based on 90-day review evidence. Decision criteria below. Decision made by Frankmax Deployment Lead with Frankmax executive team ratification. | Frankmax Deployment Lead | Documented decision with rationale |
| **Phase 2 deployment plan** (if go) — Target audiences, resource requirements, timeline, dependencies on Phase 1 clients' continued operation. | Frankmax Deployment Lead + Governance Architect | Phase 2 plan documented and resourced |

---

## Success Metrics at 30/60/90 Days

### Day 30 Metrics

| Metric | Target | Measurement |
|---|---|---|
| ORF kernel operational | 100% of identified irreversible action types covered | Governance log audit |
| E-AEGL operational | Sub-10ms enforcement confirmed, zero unplanned downtime | System monitoring |
| Governance log integrity | Zero modification or deletion events | Independent hash chain verification |
| Entropy baseline documented | All 7 dimensions quantified per client | Baseline report |
| Executive sponsor engagement | Weekly briefing attendance 100% | Meeting records |

### Day 60 Metrics

| Metric | Target | Measurement |
|---|---|---|
| Decision latency reduction | \> 20% improvement from baseline | Timestamp comparison |
| AgentCoder output utilization | \> 50% of outputs reviewed by client decision-makers | Output tracking log |
| PIAR completion rate | 100% of qualifying actions have completed PIAR | PIAR log |
| First entropy reduction | Measurable decline in \> 3 of 7 entropy dimensions | Entropy trajectory report |
| LevelUpMax enrollment | 100% of target cohort enrolled | Enrollment records |

### Day 90 Metrics

| Metric | Target | Measurement |
|---|---|---|
| Net entropy reduction | \> 15% overall reduction from baseline | Final entropy report |
| Decision latency reduction | \> 30% improvement from baseline | Timestamp comparison |
| Information distortion reduction | \> 40% reduction in reported-vs-actual gap | Governance log vs. client reporting variance |
| Governance log completeness | \> 95% of material decisions recorded | Log audit vs. operational records |
| Adversarial test pass rate | \> 80% of simulated breach scenarios detected and escalated | Red team report |
| Client willingness to renew | 100% of Phase 1 clients | Executive sponsor confirmation |
| Pattern library entries | \> 50 validated entries from Phase 1 | Pattern library audit |

---

## Failure Triggers

:::danger[Conditions That Kill Phase 2]
Any of the following conditions at Day 90 triggers a Phase 2 delay or cancellation.
:::

1. **ORF kernel bypass** — Any irreversible action executed without a bound liability bearer that was not detected within 4 hours. This means the constitutional layer failed. No Phase 2 until root cause is resolved.
2. **E-AEGL integrity failure** — Any hash chain inconsistency, any governance log modification, or any period exceeding 4 hours where E-AEGL enforcement was not operational without a documented, authorized maintenance window.
3. **Negative entropy trajectory** — If entropy is increasing across \> 3 dimensions at Day 90, AINEFF is making things worse. Full architectural review required before any expansion.
4. **Client rejection** — Any Phase 1 client whose executive sponsor explicitly declines continuation. One client rejection triggers a root cause analysis. Two client rejections cancel Phase 2.
5. **Zero financial impact** — If the financial impact quantification at Day 90 cannot identify \> $1M in documented value creation or risk reduction per client, the economic model is not validated.

---

## Rollback Procedures

### Component-Level Rollback

Each AINEFF component can be deactivated independently without affecting others:

- **ORF kernel deactivation:** Client reverts to previous authorization process. Governance log entries for the ORF period are preserved (they belong to the client).
- **E-AEGL deactivation:** Policy enforcement removed from transaction/access pipeline. Audit trail data preserved and exported to client.
- **AgentCoder squad withdrawal:** All analytical models, data pipelines, and outputs documented and transferred to client. Squad redeployed.

### Full Deployment Rollback

If a Phase 1 deployment must be fully reversed:

1. All AINEFF components deactivated in reverse deployment order (AI layer first, detection layer second, constitutional layer last).
2. All governance log data exported to client in standard format.
3. All client data purged from Frankmax infrastructure within 30 days.
4. Client's pre-AINEFF governance processes restored from documented baseline.
5. Post-mortem conducted within 14 days. Findings incorporated into AINEFF framework before any subsequent deployment.

### What Cannot Be Rolled Back

- **Governance log data:** Once events are recorded, they exist. The client retains the data even after AINEFF deactivation. This is by design — the evidence chain has value independent of the AINEFF framework.
- **Entropy pattern knowledge:** Frankmax retains anonymized entropy patterns observed during the deployment for the pattern library. Client-specific data is purged, but structural patterns are retained.
- **Organizational awareness:** Once a client's leadership has seen their actual governance state (through entropy baseline and information distortion reports), they cannot unsee it. This awareness persists whether or not AINEFF continues operating.

---

## Resource Requirements

### Personnel

| Role | Count | Duration | Notes |
|---|---|---|---|
| Frankmax Deployment Lead | 1 | Full 90 days | Single accountability for Phase 1 outcome. Named and bound. |
| Governance Architects | 2 | Full 90 days | Shared across Phase 1 clients. One per audience type (banking, family office). |
| Deployment Engineers | 4-6 | Full 90 days | E-AEGL integration, ORF configuration, data pipelines |
| AgentCoder Squad Members | 4-6 (1 squad per client) | From Week 3 onward | Each squad: Jarvis + Coder + Reviewer + Tester |
| LevelUpMax Pipeline Manager | 1 | From Week 6 onward | Shared across Phase 1 clients |
| External Red Team | 2-3 | Week 7 only | Adversarial governance testing |

### Infrastructure

| Item | Specification | Cost Estimate |
|---|---|---|
| Per-client isolated environment | Compute + storage + network, encrypted, monitored | $15K-$30K/month per client |
| E-AEGL enforcement infrastructure | Low-latency compute for sub-10ms policy enforcement | $20K-$50K/month per client |
| Governance log storage | Append-only, hash-chained, geographically redundant | $5K-$10K/month per client |
| AgentCoder compute | GPU-enabled for analytical workloads | $10K-$25K/month per squad |

### Total Phase 1 Budget

| Category | Estimate |
|---|---|
| Personnel (Frankmax side) | $800K-$1.5M |
| Infrastructure | $400K-$800K |
| External services (red team, independent audit) | $100K-$200K |
| Contingency (20%) | $260K-$500K |
| **Total Phase 1** | **$1.6M-$3.0M** |

:::info[Phase 1 Economics]
Phase 1 is a Burger — break-even to slight loss. The purpose is not profit. The purpose is to embed the evidence chain that produces Fries-margin recurring revenue from Day 91 onward. Every dollar spent on Phase 1 is an investment in the lock-in that makes Phase 2 and Phase 3 economically inevitable for the client.
:::

---

## Critical Dependencies and Risk Register

### External Dependencies

| Dependency | Risk if Unavailable | Mitigation |
|---|---|---|
| Client executive sponsor availability | Deployment stalls at every decision gate | Pre-qualify sponsor commitment before engagement. Minimum: 4 hours/week for 90 days. |
| Client IT infrastructure access | E-AEGL integration blocked | Week 1 infrastructure assessment. If access cannot be granted within 5 business days, client is not ready for Phase 1. |
| Regulatory approval for audit trail integration (banks) | E-AEGL cannot wrap existing authorization systems | Engage client's compliance team in Week 1. If regulatory pre-approval required, add 30-day buffer. |
| Independent red team availability (Week 7) | Adversarial test cannot be conducted | Book red team in Week 1. If unavailable, internal adversarial test acceptable for Phase 1 only — external test mandatory before Phase 2 go/no-go. |

### Internal Dependencies

| Dependency | Risk if Unavailable | Mitigation |
|---|---|---|
| AgentCoder squad readiness | Detection layer delayed past Week 3 | Squad training and preparation begins 2 weeks before Phase 1 launch. No squad deploys without completing internal quality gate certification. |
| E-AEGL sub-10ms performance at client scale | Policy enforcement creates unacceptable latency | Load testing at 2x client's peak transaction volume during Week 1 provisioning. If latency exceeds 10ms under load, engineering escalation before Week 2 deployment. |
| Governance architect capacity | Entropy baseline and PIAR protocols delayed | No more than 2 clients per governance architect. If Phase 1 exceeds 4 clients, additional architect required before launch. |

### Top 5 Risks

1. **Client organization resists single-point accountability.** Probability: High. Impact: Phase 1 failure. Mitigation: Executive sponsor must publicly endorse ORF kernel requirements in Week 2 briefing. If resistance persists past Week 4, escalate to engagement termination decision.
2. **E-AEGL integration takes longer than 2 weeks.** Probability: Medium. Impact: All subsequent milestones shift. Mitigation: Parallel integration track — begin data pipeline work while E-AEGL integration completes.
3. **Entropy baseline reveals problems the client refuses to acknowledge.** Probability: Medium. Impact: Client disengagement. Mitigation: Frame findings as opportunity quantification, not blame attribution. Present alongside the financial cost of inaction.
4. **Governance log captures information the client wishes it had not.** Probability: Medium. Impact: Client requests log modification (constitutional violation). Mitigation: Pre-deployment agreement that the governance log is append-only. Client signs acknowledgment in engagement letter.
5. **Phase 1 produces results that are real but not dramatic enough to justify Phase 2 investment.** Probability: Medium. Impact: Phase 2 delayed or cancelled. Mitigation: Ensure entropy baseline is rigorous enough that even moderate improvement is quantifiably significant.

---

## Related Documents

- [AINEFF Deployment Blueprint](./deployment-blueprint) — Full deployment sequencing across all phases and audiences
- [3-Year Structural Sovereignty Architecture](./3-year-architecture) — Where the 90-day roadmap leads over three years
- [Cross-Audience Stabilization Strategy](./cross-audience-analysis) — How Phase 1 beachhead clients create forcing functions for subsequent phases
- [Sovereign Anti-Entropy Deployment Architecture](./) — Master framework for all sovereign deployments
