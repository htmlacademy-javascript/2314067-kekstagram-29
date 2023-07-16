const getData = (url, onSuccess, onError) => {
  fetch(url)
    .then((response) => response.json())
    .then((dataPictures) => {
      onSuccess(dataPictures);
    })
    .catch((error) => {
      onError(error);
    });
};

const sendData = (url, onSuccess, onError, body) => {
  fetch(url, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export { getData, sendData };
