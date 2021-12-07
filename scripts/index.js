// Записать все значения в переменные 

const popups = document.querySelectorAll('.popup');
const userName = document.querySelector('.profile__fullname');
const UserJob = document.querySelector('.profile__job');
const popupProfile = document.querySelector('.popup_profile');
const buttonOpenPopupProfile = document.querySelector('.profile__edit');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close');
const formPopupProfile = popupProfile.querySelector('.form_profile');
const nameInput = formPopupProfile.querySelector('#name');
const jobInput = formPopupProfile.querySelector('#job');
const popupPlace = document.querySelector('.popup_place');
const buttonOpenPopupPlace = document.querySelector('.profile__add');
const buttonClosePopupPlace = popupPlace.querySelector('.popup__close');
const formPopupPlace = popupPlace.querySelector('.form_place');
const titleInputPlace = formPopupPlace.querySelector('#title');
const linkInputPlace = formPopupPlace.querySelector('#link');
const popupImage = document.querySelector('.popup_image');
const buttonClosePopupImage = popupImage.querySelector('.popup__close');
const image = popupImage.querySelector('.popup__image');
const figcaption = popupImage.querySelector('.popup__figcaption');
const userTemplate = document.querySelector('#add-elements').content;
const userCards = document.querySelector('.elements__cards');

// Записать фото при загрузке в массив

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

function loadPhoto() {
    const arrayPhotoElements = initialCards.map((item) =>{
        return createList(item);
    });
    userCards.append(...arrayPhotoElements);
}