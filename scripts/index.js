// Записать все значения в переменные 

const popups = document.querySelectorAll('.popup');
const popupOverlays = document.querySelectorAll('.popup__overlay');
const closeButtons = document.querySelector('.popup__close');
const userName = document.querySelector('.profile__fullname');
const userJob = document.querySelector('.profile__job');
const popupProfile = document.querySelector('.popup_profile');
const buttonOpenPopupProfile = document.querySelector('.profile__edit');
const buttonSavePopupProfile = popupProfile.querySelector('.form__save');
const formPopupProfile = popupProfile.querySelector('.form_profile');
const nameInput = formPopupProfile.querySelector('#name');
const jobInput = formPopupProfile.querySelector('#job');
const popupPlace = document.querySelector('.popup_place');
const buttonOpenPopupPlace = document.querySelector('.profile__add');
const buttonSavePopupPlace = popupPlace.querySelector('.popup__close');
const formPopupPlace = popupPlace.querySelector('.form_place');
const titleInputPlace = formPopupPlace.querySelector('#title');
const linkInputPlace = formPopupPlace.querySelector('#link');
const popupImage = document.querySelector('.popup_image');
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
    const arrPhotoElements = initialCards.map((item) => {       
        return createList(item);
    });
    userCards.append(...arrPhotoElements);
}

function createList(item) {
    const newCard = userTemplate.cloneNode(true);
    const cardImage = newCard.querySelector('.elements__image');
    const textElement = newCard.querySelector('.elements__text');
    const elementsButtonTrash = newCard.querySelector('.elements_button_trash');
    const elementsButtonLike = newCard.querySelector('.elements_button_like');

    cardImage.src = item.link;
    cardImage.alt = item.name;
    textElement.textContent = item.name; 
    elementsButtonTrash.addEventListener('click', (e) => {
    e.target.closest('.elements__card').remove();
    });
    elementsButtonLike.addEventListener('click', (e) => {
        e.target.classList.toggle('elements_button_black');
    });
    cardImage.addEventListener('click', () => {
    image.src = item.link;
    image.alt = item.name;
    figcaption.textContent = item.name;    
    openPopup(popupImage);
    });

    return newCard;        
}

function openPopup(popupTypeOpen) {
    popupTypeOpen.classList.add('popup_open');
    document.addEventListener('keydown', closeByEsc);
}

function closePopup(popupTypeClose) {
    popupTypeClose.classList.remove('popup_open');
    document.addEventListener('keydown', closeByEsc);
}

function closeByEsc(e) {
    if (e.key === "Escape") {
      const openedPopup = document.querySelector('.popup_open');
      closePopup(openedPopup);
    }
  }

function submitProfileHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup(popupProfile);
}

function submitPlaceHandler(evt) {
    evt.preventDefault();
    const newCard = createList({
        link: linkInputPlace.value,
        name: titleInputPlace.value
    });
    userCards.prepend(newCard);
    formPopupPlace.reset();
    buttonSavePopupPlace.setAttribute('disabled', true); 
    buttonSavePopupPlace.classList.add('form__save_disabled');
    closePopup(popupPlace);
}

loadPhoto();

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__overlay')) { 
        closePopup(popup);
      }
      if (evt.target.classList.contains('popup__close')) { 
        closePopup(popup);      
      }
    });
  });

buttonOpenPopupProfile.addEventListener('click', () => {
    nameInput.value = userName.textContent;
    jobInput.value = jobInput.textContent;
    openPopup(popupProfile);
});

buttonOpenPopupPlace.addEventListener('click', () => {
    titleInputPlace.value = '';
    linkInputPlace.value = '';
    openPopup(popupPlace);
});

formPopupProfile.addEventListener('submit', submitProfileHandler);
formPopupPlace.addEventListener('submit', submitPlaceHandler);