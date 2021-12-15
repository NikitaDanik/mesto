const checkInputValidity = (formElement, inputElement, errorClass, inputErrorClass) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, errorClass, inputErrorClass);
    } else {
        showInputError(formElement, inputElement.validationMessage, errorClass,inputErrorClass);;
    }
}

const showInputError = (formElement, inputElement, errorMessage, errorClass, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id} = error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
    errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement, errorClass, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id} = error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
}

