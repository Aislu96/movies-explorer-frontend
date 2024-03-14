const NAME_PATTERN = /^[A-Za-zА-Яа-яЁё -]+$/;
const EMAIL_PATTERN = /^((([0-9A-Za-z]{1}[-0-9A-z\\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
const STATUS_UNAUTHORIZED = 401;
const STATUS_BAD_REQUEST = 400;
const BASE_URL = "https://api.movies.kharisova.nomoredomainsmonster.ru";
const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";
const ERROR_NAME = "Имя должно содержать только латиницу, кириллицу, пробел или дефис.";
const ERROR_PASSWORD = "Неккоректный email.";
const MESSAGE_SUCCESS = "Данные успешно изменены.";
const ERROR_REGISTRATION = "При регистрации пользователя произошла ошибка.";
const ERROR_EDITING = "При регистрации пользователя произошла ошибка. Необходимо редактировать все поля.";
const ERROR_NOT_FOUND = "Ничего не найдено";
const ERROR_MOVIE_SEARCH = "Нужно ввести ключевое слово";
const MOVIES_SHORTS_DURATION = 41;
const MOVIE_DURATION = 60;
const WIDTH_SCREEN_600 = 600;
const WIDTH_SCREEN_800 = 800;
const MOVIES_CARD_12 = 12;
const MOVIES_CARD_8 = 8;
const MOVIES_CARD_5 = 5;
const MOVIES_CARD_2 = 2;

export {
    NAME_PATTERN,
    EMAIL_PATTERN,
    STATUS_UNAUTHORIZED,
    STATUS_BAD_REQUEST,
    BASE_URL,
    MOVIES_URL,
    ERROR_NAME,
    ERROR_PASSWORD,
    MESSAGE_SUCCESS,
    ERROR_REGISTRATION,
    ERROR_EDITING,
    ERROR_NOT_FOUND,
    ERROR_MOVIE_SEARCH,
    MOVIES_SHORTS_DURATION,
    MOVIE_DURATION,
    WIDTH_SCREEN_600,
    WIDTH_SCREEN_800,
    MOVIES_CARD_12,
    MOVIES_CARD_8,
    MOVIES_CARD_5,
    MOVIES_CARD_2
}
