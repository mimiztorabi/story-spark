<!-- This file translates the concept into a lightweight, portfolio-level product requirements document. -->
# PRD: Story Spark Prototype

## Context

This PRD specifies a static, front-end-only prototype. “AI” behavior is simulated with deterministic text so reviewers can inspect the intended interaction without any service integration.

## User story

> As a caregiver, I want to choose a few story ingredients and receive a short, gentle story idea that I can review, so I can quickly begin a shared activity.

## Experience requirements

| Requirement | Prototype behavior | Acceptance signal |
| --- | --- | --- |
| Explain the concept | State that the experience is a portfolio simulation. | Label is visible before generation. |
| Collect constrained inputs | Let a user choose character, setting, and lesson. | All three selections are keyboard accessible. |
| Generate safely | Show a concise prewritten outline based on selected values. | No network request or model call occurs. |
| Preserve adult control | Present “review together” guidance and editable next steps. | Safety note remains visible with the result. |
| Recover gracefully | Explain missing selections without losing completed inputs. | Inline status gives a clear next action. |
| Let users revise | Provide an obvious way to clear inputs and try again. | A reset action clears the form and hides the previous draft. |

## Primary flow

1. Caregiver reads the simulated-AI notice.
2. Caregiver picks a character, setting, and lesson.
3. Caregiver selects **Spark an idea**.
4. The prototype displays a short outline and a review reminder.
5. Caregiver can change the ingredients and generate another example.

## Content constraints

- Use gentle, non-violent, age-appropriate language.
- Avoid personal data, real-person likenesses, medical/legal advice, and mature themes.
- Keep output brief enough for a caregiver to review at a glance.

## Success metrics for a future test

- **[Placeholder]** Time to first reviewed idea.
- **[Placeholder]** Percentage of caregivers who understand that output needs review.
- **[Placeholder]** Perceived usefulness and trust after a moderated usability session.

## Out of scope

Authentication, persistence, personalization profiles, real model output, telemetry, payments, and accessibility certification.
