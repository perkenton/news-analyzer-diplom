'use strict';

export default class CommitCard {
  constructor(objCommitCard) {
    this.commitDate = objCommitCard.commitDate;
    this.commiterAvatarUrl = objCommitCard.commiterAvatarUrl;
    this.commiterName = objCommitCard.commiterName;
    this.commiterMail = objCommitCard.commiterMail;
    this.commiterMessage = objCommitCard.commiterMessage;
  }

  #template = () => {
    const markup = `
      <div class="history__card">
        <p class="history__card-date"></p>
        <div class="history__card-user-info">
          <img src="" alt="Фотография пользователя" class="history__card-photo">
          <p class="history__card-name"></p>
          <p class="history__card-mail"></p>
        </div>
        <p class="history__card-comment"></p>
      </div>
    `;

    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', markup);
    return element.firstElementChild;
  }

  create = () => {
    this.commitCard = this.#template();

    this.commitCard.querySelector('.history__card-date').textContent = this.commitDate;
    this.commitCard.querySelector('.history__card-photo').setAttribute('src', `${this.commiterAvatarUrl}`);
    this.commitCard.querySelector('.history__card-name').textContent = this.commiterName;
    this.commitCard.querySelector('.history__card-mail').textContent = this.commiterMail;
    this.commitCard.querySelector('.history__card-comment').textContent = this.commiterMessage;

    return this.commitCard;
  }
}