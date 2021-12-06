const buttonOpenPopup = document.querySelector('.profile__edit');
const buttonClosePopup = document.querySelector('.popup__close');
const popupBlock = document.querySelector('.popup');
const contentBlock = document.querySelector('.popup__content');

const buttonOpenPopupProfile = document.querySelector('.popup_profile');
const buttonOpenPopupPlace = document.querySelector('.popup_place');


let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_type_name'); 
let jobInput = formElement.querySelector('.form__input_type_job');
let nameUser = document.querySelector('.profile__fullname');
let jobUser = document.querySelector('.profile__job');

// единая функция открытия popups
function openPopup(popupTypeOpen) {  // передаем функции аргумент - тип попапа (у меня он называется popupTypeOpen), который будем открывать
    popupTypeOpen.classList.add('popup_open');  //добавляем селектор открытия к нашему типу попапа
}
// единая функция закрытия popups  // то же самое для закрытия всех попапов
function closePopup(popupTypeOpen) {
    popupTypeClose.classList.remove('popup_open');
}
// --------   тип нужного нам попапа вешаем на обработчик событий ------------- //
// прописать открытие popupProfile
buttonOpenPopupProfile.addEventListener('click', () => {
    nameInput.value = nameUser.textContent;
    jobInput.value = jobUser.textContent;
    openPopup(popupProfile);  // тут указывает в скобках тот тип попапа который будет открыт, т.е. popupTypeOpen = popupProfile.
});
// прописать открытие popupGrid
buttonOpenPopupPlace.addEventListener('click', () => {
    titleInputPlace.value = '';
    linkInputPlace.value = '';
    openPopup(popupPlace);
});
// прописать закрытие popupS
buttonClosePopupProfile.addEventListener('click', () => closePopup(popupProfile)); // тут то же самое, в скобках указывает тот попап, которы будет передаваться в popupTypeOpen
buttonClosePopupPlace.addEventListener('click', () => closePopup(popupPlace));
buttonClosePopupImage.addEventListener('click', () => closePopup(popupImage));
