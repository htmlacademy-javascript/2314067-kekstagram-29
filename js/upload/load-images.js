const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imagesUploadInput = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');

const loadImages = () => {
  const file = imagesUploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

export { loadImages };
