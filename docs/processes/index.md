---

sidebar_position: 1
title: "Processes, SOPs & Workflows"
description: "Standard operating procedures, BPMN process flows, and operational workflows for every critical ecosystem function"
tags: [sop, operational, index]
custom_status: active
custom_owner: Andrew Leo
custom_last_review: 2026-03-01
custom_next_review: 2026-06-01
---

# Processes, SOPs & Workflows

The AINEFF Ecosystem does not operate on intuition, tribal knowledge, or hero-mode improvisation. Every critical function has a **Standard Operating Procedure (SOP)** — a documented, version-controlled, auditable process that any qualified operator can execute without ambiguity.

This section contains the operational playbook for the entire ecosystem. If an action is important enough to affect revenue, governance, compliance, or human outcomes, it has a process documented here.

---

## Why SOPs Matter in a Constitutional Ecosystem

In a traditional company, processes live in people's heads and die when those people leave. In the AINEFF Ecosystem:

- **Processes are governance artifacts** — they are part of the constitutional operating framework, not suggestions.
- **Processes are auditable** — every SOP produces artifacts that feed the Accountability Chain Tracking System (ACTS).
- **Processes are version-controlled** — changes to SOPs follow the Governance Review SOP, with proper approval chains.
- **Processes are executable** — where possible, SOPs are encoded as automated workflows, not just documents.

---

## Process Categories

### Entity Lifecycle

The creation, operation, and termination of productive enterprises (AINEs) within the ecosystem.

| SOP | Description | Typical Duration |
|-----|-------------|-----------------|
| [AINE Creation & Manufacturing](./aine-creation-sop) | End-to-end procedure for manufacturing a new AINE from approved genome to go-live | 48 hours (standard) / 2 weeks (regulated) |
| [AINE Termination & Exit](./aine-termination-sop) | Orderly or emergency shutdown of an AINE, including data disposition and legal dissolution | 72 hours (emergency) / 30 days (orderly) |

### Governance

Decision-making, accountability, and rule management across the constitutional hierarchy.

| SOP | Description | Typical Duration |
|-----|-------------|-----------------|
| [Pre-Incident Accountability Review (PIAR)](./piar-sop) | Accountability review conducted *before* any irreversible decision | 2–8 hours per review |
| [Governance Review & Rule Changes](./governance-review-sop) | Procedure for proposing, approving, and implementing governance rule changes | 7–90 days depending on rule tier |
| [Audit & Compliance Procedures](./audit-sop) | Internal, external, and regulatory audit procedures with evidence packaging | Continuous / On-demand |

### Revenue Operations

Client engagement, capital deployment, and revenue lifecycle management.

| SOP | Description | Typical Duration |
|-----|-------------|-----------------|
| [Client Engagement Lifecycle](./client-engagement-sop) | From first contact through diagnostic, delivery, expansion, and compounding | 4–12 weeks initial cycle |
| [Capital Allocation & Investment](./capital-allocation-sop) | Capital request, evaluation, approval, and monitoring procedures | 1–4 weeks per decision |

### Talent & People Operations

Operator onboarding, progression, performance, compensation, and lifecycle management.

| SOP | Description | Typical Duration |
|-----|-------------|-----------------|
| [Operator Onboarding & Lifecycle](./operator-onboarding-sop) | 6-stage operator progression from application through capital allocation authority | 6–24 months full progression |
| [Operator Performance Review](./operator-performance-review-sop) | Quarterly and annual review cycles, promotion/demotion criteria, PIPs | Quarterly cycle |
| [Compensation Calculation & Settlement](./compensation-settlement-sop) | Income calculation, revenue share, payment processing, and dispute resolution | Bi-weekly/monthly |
| [Operator Offboarding & Knowledge Transition](./operator-offboarding-sop) | Exit processing, knowledge transfer, credential revocation, final settlement | 2–30 days by exit type |

### Product & Quality

Product development lifecycle, testing, and quality assurance.

| SOP | Description | Typical Duration |
|-----|-------------|-----------------|
| [Product Feature Lifecycle](./product-feature-lifecycle-sop) | Idea capture through ICE scoring, sprint planning, development, GA, and retirement | 1–4 week sprint cycles |
| [Quality Assurance & Testing](./qa-testing-sop) | Test pyramid, coverage thresholds, defect classification, QA gate sign-off | Continuous |

### Technical Operations

System deployment, incident response, security, integrations, and operational reliability.

| SOP | Description | Typical Duration |
|-----|-------------|-----------------|
| [Venture Cell Operations](./venture-cell-sop) | Daily, weekly, monthly, and quarterly rhythms for running a venture cell | Ongoing |
| [Incident Response & External Shocks](./incident-response-sop) | Severity-graded incident response from P3 (minor) to P0 (existential) | Minutes to weeks |
| [Security Incident Response](./security-incident-sop) | Data breaches, unauthorized access, key compromise, regulatory notification | Hours to days |
| [System Deployment & Release](./deployment-sop) | CI/CD pipeline, canary deployment, rollback, and hotfix procedures | Hours to days |
| [Data Backup & Disaster Recovery](./disaster-recovery-sop) | Backup procedures, RTO/RPO targets, failover, and recovery verification | Continuous / On-demand |
| [Third-Party Integration & API Management](./api-integration-sop) | API lifecycle, authentication, rate limiting, versioning, and monitoring | Ongoing |

### Commercial & Legal

Client contracts, vendor management, and customer support operations.

| SOP | Description | Typical Duration |
|-----|-------------|-----------------|
| [Customer Support Triage & Escalation](./customer-support-sop) | Ticket classification, routing, SLA enforcement, and resolution | Minutes to days |
| [Client Contract & Legal Review](./contract-review-sop) | Contract lifecycle from template selection through execution and renewal | 1–4 weeks |
| [Vendor Risk Assessment & Contract](./vendor-management-sop) | Vendor evaluation, onboarding, SLA monitoring, and exit management | 2–8 weeks onboarding |

### Knowledge & Organizational Learning

Knowledge capture, playbook maintenance, and institutional memory.

| SOP | Description | Typical Duration |
|-----|-------------|-----------------|
| [Knowledge Capture & Playbook Updates](./knowledge-capture-sop) | Capturing lessons, formalizing playbooks, version control, adoption tracking | Continuous |

---

## How to Read an SOP

Every SOP in this section follows a consistent structure:

1. **Trigger** — What event initiates this procedure?
2. **Steps** — Numbered, sequential actions with defined inputs and outputs.
3. **Roles** — Who is responsible for each action?
4. **Artifacts** — What documents, records, or data are produced?
5. **Time Bounds** — How long should each step and the overall process take?
6. **Kill/Rollback** — What happens if the process must be aborted?
7. **Process Flow** — Mermaid BPMN-style diagram showing the visual flow.

---

## Process Governance

SOPs are not static documents. They are living governance artifacts subject to:

- **Version control** — Every change is tracked with author, date, and rationale.
- **Approval requirements** — Changes to SOPs follow the [Governance Review SOP](./governance-review-sop).
- **Periodic review** — All SOPs are reviewed quarterly for accuracy and relevance.
- **Entropy monitoring** — If an SOP exceeds complexity thresholds, it triggers a simplification review.

:::info
All process diagrams in this section use [Mermaid](https://mermaid.js.org/) notation and render natively in Docusaurus. They represent BPMN-style flows adapted for readability.
:::
