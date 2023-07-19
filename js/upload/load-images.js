import { fileField } from './form.js';
import { previewImage } from './scaling.js';

const FILE_TYPES = ['jpeg', 'png', 'jpg', 'heic', 'webp'];

const effectsPreviews = document.querySelectorAll('.effects__preview');

const loadImages = () => {
  const file = fileField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewImage.src = URL.createObjectURL(file);
    effectsPreviews.forEach((preview) => {
      preview.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    });
  }
};

export { loadImages };
