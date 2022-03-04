

/* Обьект состоит из 5 ключей:
1-й ключ - id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.
2-й url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
3-й description, строка — описание фотографии. Описание придумайте самостоятельно.
4-й likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
5-й comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Обьекты в данном массиве также состоят из ключей:
id — случайное число, не повторяется
avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.
текст комментария - два любых предложения из:
Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!
name - случайное имя.
*/

const getRandomFromRange = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomFromRange(8, 4);

const getMaxLength = (line, maxLength) => line.length <= maxLength;

const lines = 'оо';
const length = 3;
getMaxLength(lines, length);

const DESCRIPTION = ['Фото с отдыха', 'Сижу на работе', 'После долгого дня'];

const MESSAGES = ['Все отлично!', 'В целом всё неплохо.', 'Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. ', 'Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Петя', 'Вася', 'Коля'];

const getMessage = (numberOfMessages) => {
  if (numberOfMessages === 2) {
    return MESSAGES[getRandomFromRange(0, MESSAGES.length - 1)] + MESSAGES[getRandomFromRange(0, MESSAGES.length - 1)];
  }
  else { return MESSAGES[getRandomFromRange(0, MESSAGES.length - 1)]; }
};
//генерирует одно или два сообщения
//const keys = ['id', 'avatar', 'message', 'name'];

const getRandomComment = (numberOfComments) => {
  const commentArr = [];
  const randomCommId = getRandomFromRange(1, 999);
  for (let i = 0; i <= numberOfComments - 1; i++) {
    const comment = {
      id: randomCommId + i,
      avatar: `img/avatar-${getRandomFromRange(1, 6)}.svg`,
      message: getMessage(getRandomFromRange(1, 2)),
      name: NAMES[getRandomFromRange(0, NAMES.length - 1)],
    };
    commentArr.push(comment);
  }
  return commentArr;
};

getRandomComment(2);

const getRandomObjects = (numberOfObjects) => {
  const objectArr = [];
  const randomObjCounter = getRandomFromRange(1, 25 - numberOfObjects);
  for (let i = 1; i <= numberOfObjects; i++) {
    const object = {
      id: randomObjCounter + i,
      url: `photos/${randomObjCounter + i}.jpg`,
      description: DESCRIPTION[getRandomFromRange(0, NAMES.length - 1)],
      likes: getRandomFromRange(15, 200),
      comments: getRandomComment(getRandomFromRange(1, 3)),
    };
    objectArr.push(object);
  }
  return objectArr;
};

getRandomObjects(25);

