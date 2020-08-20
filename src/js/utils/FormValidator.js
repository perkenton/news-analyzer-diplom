'use strict';

export default class FormValidator {

  constructor(SEARCH_FORM, ERROR_MESSAGES, ERROR_BLOCK) {
    this.SEARCH_FORM = SEARCH_FORM;
    this.ERROR_MESSAGES = ERROR_MESSAGES;
    this.ERROR_BLOCK = ERROR_BLOCK;
  }


  _isValid = (input) => {
    input.setCustomValidity('');

    if (input.validity.valueMissing) {
      input.setCustomValidity(this.ERROR_MESSAGES.empty);
      return false;
    }

    if (input.validity.patternMismatch) {
      input.setCustomValidity(this.ERROR_MESSAGES.wrongRequest);
      return false;
    }

    return input.checkValidity();
  }

  _isInputValid = (input) => {
    const errorElem = this.SEARCH_FORM.querySelector('.search__input-error');
    const valid = this._isValid(input);
    errorElem.textContent = input.validationMessage;
    return valid;
  }

  setSubmitButtonState = (input, button, state) => {
    if (state === false) {
      button.setAttribute('disabled', 'disabled');
      this.ERROR_BLOCK.setAttribute('style', 'display: block');
      button.classList.add('search__button_is-inactive');
      button.classList.remove('search__button_is-active');
      input.classList.add('search__input_is-invalid');
      input.classList.remove('search__input_is-valid');
    } else {
      button.removeAttribute('disabled');
      this.ERROR_BLOCK.setAttribute('style', 'display: none');
      button.classList.remove('search__button_is-inactive');
      button.classList.add('search__button_is-active');
      input.classList.remove('search__input_is-invalid');
      input.classList.add('search__input_is-valid');
    }
  }

  _handlerInputForm = (event) => {
    const input = event.target;
    const submit = event.currentTarget.querySelector('.search__button');

    this._isInputValid(input);

    if (this._isValid(input) === false) {
      this.setSubmitButtonState(input, submit, false);
    } else {
      this.setSubmitButtonState(input, submit, true);
    }
  }

  addListener = () => {
    this.SEARCH_FORM.addEventListener('input', this._handlerInputForm, true);
  }

}
