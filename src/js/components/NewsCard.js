'use strict';

export default class NewsCard {
  constructor() {

  }

  _template = () => {
    const markup = `
      <a href="" class="card" target="_blank">
        <div class="card__image" style="background-image: url(<%=require('./images/image_08.jpg')%>);"></div>
        <p class="card__published-at"></p>
        <h3 class="card__title"></h3>
        <p class="card__description"></p>
        <p class="card__source-name"></p>
      </a>
    `;
  }

}