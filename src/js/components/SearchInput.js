'use strict';

export default class SearchInput {
  constructor(SEARCH_FORM, INPUT_REQUEST, searchingCallback) {
    this.SEARCH_FORM = SEARCH_FORM;
    this.INPUT_REQUEST = INPUT_REQUEST;
    this.searching = searchingCallback;
  }

  setSubmitListener = () => {

    this.SEARCH_FORM.addEventListener('submit', (event) => {
      event.preventDefault();

      this.searching(this.INPUT_REQUEST.value);
      
    })

  }
}