'use strict';

export default class SearchInput {
  constructor(searchForm, inputRequest, dataStorage, searching) {
    this.searchForm = searchForm;
    this.inputRequest = inputRequest;
    this.dataStorage = dataStorage;
    this.searching = searching;
  }

  insertRequest = () => {
    this.inputRequest.value = this.dataStorage.getSearchRequest();
  }

  setSubmitListener = () => {

    this.searchForm.addEventListener('submit', (event) => {
      event.preventDefault();

      this.searching(this.inputRequest.value);
    })

  }
}