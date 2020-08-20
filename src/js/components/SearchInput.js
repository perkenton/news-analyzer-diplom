'use strict';

export default class SearchInput {
  constructor(SEARCH_FORM, INPUT_REQUEST, dataStorage, searching) {
    this.SEARCH_FORM = SEARCH_FORM;
    this.INPUT_REQUEST = INPUT_REQUEST;
    this.dataStorage = dataStorage;
    this.searching = searching;
  }

  insertRequest = () => {
    this.INPUT_REQUEST.value = this.dataStorage.getSearchRequest();
  }

  setSubmitListener = () => {

    this.SEARCH_FORM.addEventListener('submit', (event) => {
      event.preventDefault();

      this.searching(this.INPUT_REQUEST.value);
    })

  }
}