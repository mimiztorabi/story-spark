<!-- This file provides the narrative template for presenting the work as a Senior Product Manager portfolio case study. -->
# Case Study: Designing Story Spark

## Snapshot

| Area | Portfolio artifact |
| --- | --- |
| Role | **[Placeholder: your title and responsibilities]** |
| Timeframe | **[Placeholder]** |
| Team | **[Placeholder]** |
| Problem | Caregivers need a fast, controllable way to start a shared story activity. |
| Proposal | A constrained, caregiver-reviewed AI story-outline concept. |

## The challenge

The product opportunity is not simply “generate a story.” The harder product question is how to make generative assistance feel useful while preserving adult control and avoiding a child-facing open-ended chat pattern.

## Product approach

I framed the first experience around three choices—character, setting, and lesson—then designed the output as a compact outline. This reduces blank-page friction while giving the caregiver an obvious review point.

## Artifacts in this repository

1. [Product brief](product-brief.md) establishes the opportunity and boundaries.
2. [PRD](prd.md) converts the concept into testable prototype requirements.
3. [User journey](user-journey.md) highlights the caregiver’s trust moments.
4. [AI behavior](ai-behavior.md), [evaluation plan](evaluation-plan.md), and [risks and guardrails](risks-and-guardrails.md) make the AI strategy explicit.
5. The [static prototype](../prototype/index.html) demonstrates the proposed interaction without a model integration.

## Product judgment demonstrated

- **Scope discipline:** a static demo proves the interaction before infrastructure is introduced.
- **Responsible AI thinking:** constrained inputs and human review are product requirements, not afterthoughts.
- **Learning orientation:** explicit assumptions and decision rules prevent invented validation claims.
- **Communication:** linked artifacts let different stakeholders inspect the rationale at their preferred depth.

## Outcomes

**[Placeholder]** Add only verified outcomes here, such as usability-test insights, a stakeholder decision, or changes made after feedback. Do not present this illustrative prototype as a shipped product or claim impact without evidence.

## Reflection

**[Placeholder]** Add a short first-person reflection: what you would test next, what trade-off you would revisit, and how the work changed your product approach.

## Key trade-offs

| Decision | Benefit | Cost | Why this concept chooses it |
| --- | --- | --- | --- |
| Preset ingredients instead of a typed prompt | More predictable and easier to review | Less personalization | The first concept prioritizes caregiver trust and safety. |
| Short outline instead of a full story | Fast to scan and easy to adapt | Requires caregiver participation | The product supports a shared activity rather than replacing it. |
| Static simulated output instead of a live model | Private, reliable, and easy to inspect | Does not test model quality | This is the right fidelity for communicating the interaction before technical investment. |

## What would change after evidence

**[Placeholder]** Use research findings to decide whether to add more presets, revise the output format, or test a tightly bounded live model. Any move beyond a static portfolio prototype would require documented safety, privacy, and technical review.
