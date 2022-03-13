import { getRandomFromRange, DESCRIPTIONS, MESSAGES, NAMES, RANDOM_COMMENT_ID_COUNT_MIN, RANDOM_COMMENT_ID_COUNT_MAX, RANDOM_COMMENT_COUNT_MIN, RANDOM_COMMENT_COUNT_MAX, RANDOM_MIN_AVATAR_COUNT, RANDOM_MAX_AVATAR_COUNT, RANDOM_LIKES_COUNT_MIN, RANDOM_LIKES_COUNT_MAX, RANDOM_OBJECTS_COUNT_MIN, RANDOM_OBJECTS_COUNT_MAX, RANDOM_MIN_MESSAGE_COUNT, RANDOM_MAX_MESSAGE_COUNT } from './util.js';

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
