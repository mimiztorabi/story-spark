<!-- This file records foreseeable AI product risks and the design guardrails proposed for the concept. -->
# Risks and Guardrails

## Guiding stance

Because the concept concerns family storytelling, safety and caregiver control matter more than maximizing open-ended generation. This repository does not collect data or provide a live model.

| Risk | Why it matters | Prototype guardrail | Future guardrail |
| --- | --- | --- | --- |
| Inappropriate content | Children may see unsuitable material. | Preset-only, gentle local templates. | Policy filters, curated defaults, escalation and testing. |
| Overreliance | A caregiver may treat output as authoritative. | “Review together” reminder. | Clear disclosure and editable drafts. |
| Personal data exposure | Families may overshare about children. | No free-text prompt, storage, or submission. | Data minimization and age-appropriate privacy review. |
| Bias or exclusion | Stories can reinforce stereotypes. | Generic, non-identity-based examples. | Diverse content review and fairness evaluation. |
| Hallucination | Generated claims could confuse users. | No factual claims or live model. | Topic constraints and fallbacks. |
| Scope creep | A simple aid could become a child-facing companion. | No chat, profiles, or social features. | Explicit product boundary and governance review. |

## Guardrail checklist

- [x] No API keys, telemetry, remote calls, or storage in this prototype.
- [x] Constrained ingredient choices instead of open text.
- [x] Visible simulated-AI and adult-review disclosures.
- [ ] **[Placeholder]** Conduct child-safety and privacy review before any live test.
- [ ] **[Placeholder]** Define incident handling and content escalation for any production version.

## Escalation trigger

Do not move from this portfolio prototype to a live experience without documented safety review, privacy assessment, and research with the intended adult audience.
