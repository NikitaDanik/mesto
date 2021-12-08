// Записать все значения в переменные 

const popups = document.querySelectorAll('.popup');
const userName = document.querySelector('.profile__fullname');
const userJob = document.querySelector('.profile__job');
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
    const arrPhotoElements = initialCards.map((item) => {       
        return createList(item);
    });
    userCards.append(...arrPhotoElements);
}

function createList(item) {
    const newCard = userTemplate.cloneNode(true);
    const cardImage = newCard.querySelector('.elements__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;
    newCard.querySelector('.elements__text').textContent = item.name; 
    newCard.querySelector('.elements_button_trash').addEventListener('click', (e) => {
    e.target.closest('.elements__card').remove();
    });
    newCard.querySelector('.elements_button_like').addEventListener('click', (e) => {
        e.target.classList.toggle('elements_button_black');
    });
    newCard.querySelector('.elements__image').addEventListener('click', () => {
    image.src = item.link;
    image.alt = item.name;
    figcaption.textContent = item.name;    
    openPopup(popupImage);
    });

    return newCard;        
}
function openPopup(popupTypeOpen) {
    popupTypeOpen.classList.add('popup_open');
}

function closePopup(popupTypeClose) {
    popupTypeClose.classList.remove('popup_open');
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
    titleInputPlace.value = '';
    closePopup(popupPlace);
}

loadPhoto();

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

buttonClosePopupProfile.addEventListener('click', () => closePopup(popupProfile));
buttonClosePopupPlace.addEventListener('click', () => closePopup(popupPlace));
buttonClosePopupImage.addEventListener('click', () => closePopup(popupImage));
formPopupProfile.addEventListener('submit', submitProfileHandler);
formPopupPlace.addEventListener('submit', submitPlaceHandler);