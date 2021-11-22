const buttonOpenPopup = document.querySelector('.profile-info__edit');
const buttonClosePopup = document.querySelector('.popup__close');
const popupBlock = document.querySelector('.popup');
const contentBlock = document.querySelector('.popup__content');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_name'); 
let jobInput = formElement.querySelector('.form__input_job');
let nameUser = document.querySelector('.profile-info__fullname');
let jobUser = document.querySelector('.profile-info__job');

function openPopup() {
    contentBlock.classList.remove('popup__content_contclose');
    popupBlock.classList.add('popup_open');
    nameInput.value = nameUser.textContent;
    jobInput.value = jobUser.textContent;
}

function closePopup() {
    popupBlock.classList.remove('popup_open');
    contentBlock.classList.add('popup__content_contclose');    
}

function submitFormHandler(evt) {
    evt.preventDefault();    
    nameUser.textContent = nameInput.value;
    jobUser.textContent = jobInput.value;
    closePopup();
}

buttonOpenPopup.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);
formElement.addEventListener('submit', submitFormHandler);