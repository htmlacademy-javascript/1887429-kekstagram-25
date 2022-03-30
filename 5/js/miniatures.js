import { getRandomObjects } from './data';

// На основе временных данных для разработки и шаблона #picture создайте DOM - элементы, соответствующие фотографиям, и заполните их данными:

// Адрес изображения url подставьте как атрибут src изображения.
// Количество лайков likes выведите в блок.picture__likes.
// Количество комментариев comments выведите в блок.picture__comments.
// Отрисуйте сгенерированные DOM - элементы в блок.pictures.Для вставки элементов используйте DocumentFragment.


//Ищем контейнер под наш массив фоток
const picturesContainer = document.querySelector('.pictures, .container');
//Ищем наш трафарет для обьекта
const pictureTemplate = document.querySelector('#picture').content;
// Генерируем массив обьектов с фотками
const picturesList = getRandomObjects(25);
//Cоздаем черный ящик для добавления в него обьектов
const pictureListFragment = document.createDocumentFragment();

//Проходимся по ключам и генерируем html
picturesList.forEach(({ url, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('picture__img').src = url;
  pictureElement.querySelector('picture__likes').textContent = likes;
  pictureElement.querySelector('picture__comments').textContent = comments;
  pictureListFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(pictureListFragment);
