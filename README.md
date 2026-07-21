<!-- This file is the public entry point for the portfolio case study. -->
# Story Spark — AI Product Portfolio Case Study

> **Portfolio project:** a fictional concept designed to demonstrate Senior Product Manager thinking. It is **not** a production application and does not use a backend, API keys, paid services, or external dependencies.

Story Spark is a concept for a child-and-caregiver storytelling companion. A caregiver chooses a few safe creative inputs, then an AI proposes a short, age-appropriate story outline that the caregiver can review and edit before sharing.

## Start here

| If you want to understand… | Read… |
| --- | --- |
| The opportunity and product framing | [Product brief](docs/product-brief.md) |
| The product requirements and decisions | [PRD](docs/prd.md) |
| The end-to-end experience | [User journey](docs/user-journey.md) |
| How the imagined AI should behave | [AI behavior](docs/ai-behavior.md) |
| How success would be evaluated | [Evaluation plan](docs/evaluation-plan.md) |
| Safety, privacy, and failure modes | [Risks and guardrails](docs/risks-and-guardrails.md) |
| The portfolio narrative | [Case study](docs/case-study.md) |

## Repository map

```text
story-spark/
├── README.md                    # Portfolio overview and navigation
├── AGENTS.md                    # Contributor guidance for this case-study repo
├── docs/                        # Product thinking and decision artifacts
├── assets/prototype-screens/    # Exported screenshots belong here (currently a placeholder)
└── prototype/                   # Dependency-free, GitHub Pages-safe static demo
    ├── index.html
    ├── styles.css
    └── script.js
```

## View the static prototype

Open [`prototype/index.html`](prototype/index.html) directly in a browser, or enable **GitHub Pages** and publish from the repository root. The demo runs entirely in the browser and uses a deterministic, illustrative “AI suggestion” rather than a real AI model.

## What is intentionally out of scope

- Real account creation, saved stories, analytics, or payments
- Model integrations, API keys, prompt calls, or server-side logic
- Collection of children’s data or personal information
- Claims of validated customer research, model quality, or business outcomes

## Portfolio placeholders

This project deliberately labels unfinished evidence and decisions as **[Placeholder]**. Before publishing as a personal portfolio piece, replace those sections with your own research, artifacts, and attribution—or remove them.

## Plain-English technical notes

The prototype is a small web page made from three files: HTML provides the content and form controls, CSS provides the visual design, and JavaScript swaps selected choices into prewritten story templates. It runs on the visitor’s device; it does not contact an AI provider, server, database, analytics tool, or third-party library. The explicit simulation label makes that boundary clear to reviewers. [Prototype](prototype/index.html)
