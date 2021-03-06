import * as c from './ActionTypes';

export const requestRandomPhoto = () => ({
  type: c.REQUEST_RANDOM_PHOTO
});

export const getRandomPhotoSuccess = (randomPhoto) => ({
  type: c.GET_RANDOM_PHOTO_SUCCESS,
  randomPhoto
});

export const getRandomPhotoFailure = (photoError) => ({
  type: c.GET_RANDOM_PHOTO_FAILURE,
  photoError
});

export const requestRandomQuote = () => ({
  type: c.REQUEST_RANDOM_QUOTE
});

export const getRandomQuoteSuccess = (randomQuote) => ({
  type: c.GET_RANDOM_QUOTE_SUCCESS,
  randomQuote
});

export const getRandomQuoteFailure = (quoteError) => ({
  type: c.GET_RANDOM_QUOTE_FAILURE,
  quoteError
});

export const requestPhotos = () => ({
  type: c.REQUEST_PHOTOS
});

export const getPhotosSuccess = (photos) => ({
  type: c.GET_PHOTOS_SUCCESS,
  photos
});

export const getPhotosFailure = (photoError) => ({
  type: c.GET_PHOTOS_FAILURE,
  photoError
});
export const requestQuotes = () => ({
  type: c.REQUEST_QUOTES
});

export const getQuotesSuccess = (quotes) => ({
  type: c.GET_QUOTES_SUCCESS,
  quotes
});

export const getQuotesFailure = (quoteError) => ({
  type: c.GET_QUOTES_FAILURE,
  quoteError
});
export const postQuoteSuccess = (quote) => ({
  type: c.POST_QUOTE_SUCCESS,
  quote
});

export const postQuoteFailure = (quoteError) => ({
  type: c.POST_QUOTE_FAILURE,
  quoteError
});

export const postPhotoSuccess = (photo) => ({
  type: c.POST_PHOTO_SUCCESS,
  photo
});

export const postPhotoFailure = (photoError) => ({
  type: c.POST_PHOTO_FAILURE,
  photoError
});

export const makeRandomQuoteApiCall = () => {
  return dispatch => {
    dispatch(requestRandomQuote);
    return fetch(`https://timothee-chalamet-api.herokuapp.com/quotes/random`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getRandomQuoteSuccess(jsonifiedResponse.content));
        })
      .catch((quoteError) => {
        dispatch(getRandomQuoteFailure(quoteError));
      });
  }
}

export const makeRandomPhotoApiCall = () => {
  return dispatch => {
    dispatch(requestRandomPhoto);
    return fetch(`https://timothee-chalamet-api.herokuapp.com/photos/random`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getRandomPhotoSuccess(jsonifiedResponse.file_path));
        })
      .catch((photoError) => {
        dispatch(getRandomPhotoFailure(photoError));
      });
  }
}

export const makePhotosApiCall = () => {
  return dispatch => {
    dispatch(requestPhotos);
    return fetch('https://timothee-chalamet-api.herokuapp.com/photos')
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getPhotosSuccess(jsonifiedResponse));
        })
      .catch((photoError) => {
        dispatch(getPhotosFailure(photoError));
      });
  }
}

export const makeQuotesApiCall = () => {
  return dispatch => {
    dispatch(requestQuotes);
    return fetch('https://timothee-chalamet-api.herokuapp.com/quotes')
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getQuotesSuccess(jsonifiedResponse));
        })
      .catch((quoteError) => {
        dispatch(getQuotesFailure(quoteError));
      });
  }
}
export const postQuoteApiCall = (quoteContent) => {
  return dispatch => {
    return fetch(`https://timothee-chalamet-api.herokuapp.com/quotes?content=${quoteContent}`,{method:'POST'})
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(postQuoteSuccess(jsonifiedResponse));
        })
      .catch((quoteError) => {
        dispatch(postQuoteFailure(quoteError));
      });
  }
}
export const postPhotoApiCall = (url) => {
  return dispatch => {
    return fetch(`https://timothee-chalamet-api.herokuapp.com/photos?file_path=${url}`, {method:'POST'})
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse)
          dispatch(postPhotoSuccess(jsonifiedResponse));
        })
      .catch((photoError) => {
        dispatch(postPhotoFailure(photoError));
      });
  }
}