<!-- This file defines the desired behavior of a future AI system and the prototype's deliberate simulation. -->
# AI Behavior

## Prototype reality

The prototype contains no AI model. JavaScript selects from local, prewritten sentence templates. This makes the interaction inspectable, predictable, private, and safe to host statically.

## Desired future behavior

A production exploration would transform caregiver-selected ingredients into a brief story outline while following these principles:

1. **Constrained creativity:** use only supplied, age-appropriate ingredients and a limited output format.
2. **Adult-in-the-loop:** frame every output as a draft for caregiver review.
3. **Calm refusals:** decline unsuitable themes with a brief explanation and offer a gentle alternative.
4. **No data inference:** do not infer identity, location, health, family circumstances, or child attributes.
5. **Transparency:** say when a suggestion is AI-assisted and identify limitations.

## Example output contract

- Title: 3–8 words
- Setup: one sentence
- Challenge: one gentle, solvable problem
- Resolution: one sentence grounded in the selected lesson
- Maximum length: **[Placeholder: validate with caregivers]**

## Failure handling

| Situation | Intended response |
| --- | --- |
| Missing ingredient | Ask the caregiver to choose the missing option. |
| Disallowed request | Offer a neutral, age-appropriate alternate theme. |
| Uncertain safety classification | Do not generate; ask the caregiver to choose from safe presets. |
| Model/service issue | Show a plain fallback activity prompt, not invented output. |
