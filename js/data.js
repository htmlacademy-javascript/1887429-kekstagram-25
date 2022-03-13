
import { getRandomFromRange } from './util.js';

const DESCRIPTIONS = ['Фото с отдыха', 'Сижу на работе', 'После долгого дня'];

const MESSAGES = ['Все отлично!', 'В целом всё неплохо.', 'Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. ', 'Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Петя', 'Вася', 'Коля'];

const RANDOM_COMMENT_ID_COUNT_MIN = 0;
const RANDOM_COMMENT_ID_COUNT_MAX = 999;

const RANDOM_COMMENT_COUNT_MIN = 1;
const RANDOM_COMMENT_COUNT_MAX = 3;

const RANDOM_MIN_AVATAR_COUNT = 1;
const RANDOM_MAX_AVATAR_COUNT = 6;

const RANDOM_LIKES_COUNT_MIN = 15;
const RANDOM_LIKES_COUNT_MAX = 200;

const RANDOM_OBJECTS_COUNT_MIN = 0;
const RANDOM_OBJECTS_COUNT_MAX = 25;

const RANDOM_MIN_MESSAGE_COUNT = 1;
const RANDOM_MAX_MESSAGE_COUNT = 2;


const getMessage = (numberOfMessages) => {
  let message = '';
  for (let i = 0; i <= numberOfMessages - 1; i++) {
    message = message + MESSAGES[getRandomFromRange(0, MESSAGES.length - 1)];
  }
  return message;
};

//генерирует одно или два сообщения

const getRandomComment = (numberOfComments) => {
  const commentArr = [];
  const randomCommId = getRandomFromRange(RANDOM_COMMENT_ID_COUNT_MIN, RANDOM_COMMENT_ID_COUNT_MAX);
  for (let i = 1; i <= numberOfComments; i++) {
    const comment = {
      id: randomCommId + i,
      avatar: `img/avatar-${getRandomFromRange(RANDOM_MIN_AVATAR_COUNT, RANDOM_MAX_AVATAR_COUNT)}.svg`,
      message: getMessage(getRandomFromRange(RANDOM_MIN_MESSAGE_COUNT, RANDOM_MAX_MESSAGE_COUNT)),
      name: NAMES[getRandomFromRange(0, NAMES.length - 1)],
    };
    commentArr.push(comment);
  }
  return commentArr;
};

//генерирует массив комментариев

const getRandomObjects = (numberOfObjects) => {
  const objectArr = [];
  const randomObjCounter = getRandomFromRange(RANDOM_OBJECTS_COUNT_MIN, RANDOM_OBJECTS_COUNT_MAX - numberOfObjects);
  for (let i = 1; i <= numberOfObjects; i++) {
    const object = {
      id: randomObjCounter + i,
      url: `photos/${randomObjCounter + i}.jpg`,
      description: DESCRIPTIONS[getRandomFromRange(0, NAMES.length - 1)],
      likes: getRandomFromRange(RANDOM_LIKES_COUNT_MIN, RANDOM_LIKES_COUNT_MAX),
      comments: getRandomComment(getRandomFromRange(RANDOM_COMMENT_COUNT_MIN, RANDOM_COMMENT_COUNT_MAX)),
    };
    objectArr.push(object);
  }
  return objectArr;
};

export { getRandomObjects };
