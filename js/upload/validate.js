const HASHTAG_SYMBOLS = /^#[a-za-яё0-9]{1,19}$/i;
const MAX_COMMENTS_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const VALID_HASHTAG = 'Хэштег начинается с символа "#"(решётка), содержать буквы и цифры (не более 20 символов, включая #)';
const UNIQUE_HASHTAGS = 'Один и тот же хэш-тег не может быть использован дважды';
const VALID_COUNT = 'Нельзя указать больше пяти хэш-тегов';
const VALID_COMMENT_TEXT = 'Длина комментария не может составлять больше 140 символов';

const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const pristine = new window.Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const isValidComment = (comment) => comment.length <= MAX_COMMENTS_LENGTH;

const createHashtag = (value) => value.toLowerCase().trim().split(' ');

const isValidHashtag = (value) => {
  if (!value) {
    return true;
  }
  return createHashtag(value).every((test) => HASHTAG_SYMBOLS.test(test));
};

const isValidCount = (value) => createHashtag(value).length <= MAX_HASHTAG_COUNT;

const isUniqueHashtags = (value) => {
  const hashtags = createHashtag(value);
  const uniqueHashtag = new Set(hashtags);
  return uniqueHashtag.size === hashtags.length;
};

const addValidator = () => {
  pristine.addValidator(
    hashtagField,
    isValidHashtag,
    VALID_HASHTAG,
    1,
    true
  );

  pristine.addValidator(
    hashtagField,
    isUniqueHashtags,
    UNIQUE_HASHTAGS,
    1,
    true
  );

  pristine.addValidator(
    hashtagField,
    isValidCount,
    VALID_COUNT,
    1,
    true
  );

  pristine.addValidator(
    descriptionField,
    isValidComment,
    VALID_COMMENT_TEXT,
    1,
    true
  );
};

const resetPristine = () => pristine.reset();
const validatePristine = () => pristine.validate();

export { addValidator, resetPristine, validatePristine };
