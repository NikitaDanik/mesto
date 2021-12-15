const checkInputValidity = (formElement, inputElement, errorClass, inputErrorClass) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, errorClass, inputErrorClass);
    } else {
        showInputError(formElement, inputElement.validationMessage, errorClass,inputErrorClass);;
    }
}