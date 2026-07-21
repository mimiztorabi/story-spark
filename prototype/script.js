/* This file powers the deterministic, local-only story suggestion in the static prototype. */
(() => {
  const form = document.querySelector('#story-form');
  const status = document.querySelector('#form-status');
  const result = document.querySelector('#result');
  const resultTitle = document.querySelector('#result-title');
  const title = document.querySelector('#story-title');
  const outline = document.querySelector('#story-outline');

  const storyDetails = {
    'asking for help': 'finds that a neighbor has the perfect idea',
    'sharing a turn': 'takes turns with a new friend until the problem feels smaller',
    'trying something new': 'tries one small new step and discovers a happy surprise'
  };

  const titleCase = (text) => text.replace(/\b\w/g, (letter) => letter.toUpperCase());

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const character = data.get('character');
    const setting = data.get('setting');
    const lesson = data.get('lesson');

    if (!character || !setting || !lesson) {
      status.textContent = 'Choose one option in each group to spark an idea.';
      result.classList.add('is-hidden');
      return;
    }

    status.textContent = '';
    title.textContent = `${titleCase(character)}’s ${titleCase(setting)} Surprise`;
    outline.textContent = `In the ${setting}, the ${character} discovers a small puzzle during a calm day of play. The ${character} ${storyDetails[lesson]}, learning that ${lesson} can make a hard moment feel lighter. The day ends with a kind choice and a new idea for tomorrow.`;
    result.classList.remove('is-hidden');
    resultTitle.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  form.addEventListener('reset', () => {
    status.textContent = 'Your choices have been cleared.';
    result.classList.add('is-hidden');
  });
})();
