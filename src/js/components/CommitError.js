'use strict';

export default class CommitError {
  constructor(COMMIT_CARDS_CONTAINER, err) {
    this.COMMIT_CARDS_CONTAINER = COMMIT_CARDS_CONTAINER;
    this.err = err;
  }

  #template = () => {
    const markup = `
      <div class="not-found">
        <h2 class="not-found__title">Не было печали...</h2>
        <p class="not-found__subtitle"></p>
      </div>
    `;

    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', markup);
    return element.firstElementChild;
  }

  createAndRender = () => {
    this.errorBlock = this.#template();
    this.errorBlock.querySelector('.not-found__subtitle').textContent = this.err;

    this.COMMIT_CARDS_CONTAINER.appendChild(this.errorBlock);
  }
}