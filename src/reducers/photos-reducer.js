import * as c from './../actions/ActionTypes';

const initialState = {
  isPhotoLoading: false,
  photos: null,
  photo: null,
  photoError:null,
  randomPhoto: null
}

export default (state=initialState, action) => {
  switch (action.type){
    case c.REQUEST_RANDOM_PHOTO:
      return Object.assign({}, state, {
        isPhotoLoading: true
      });
    case c.GET_RANDOM_PHOTO_SUCCESS:
      return Object.assign({}, state, {
        isPhotoLoading:false,
        randomPhoto: action.randomPhoto
      });
    case c.GET_RANDOM_PHOTO_FAILURE:
      return Object.assign({}, state, {
        isPhotoLoading:false,
        photoError: action.photoError
      });
    case c.REQUEST_PHOTOS:
    return Object.assign({}, state, {
      isPhotoLoading:true
    });
    case c.GET_PHOTOS_SUCCESS:
    return Object.assign({}, state, {
      isPhotoLoading:false,
      photos: action.photos
    });
    case c.GET_PHOTOS_FAILURE:
    return Object.assign({}, state, {
      isPhotoLoading:false,
      photoError: action.photoError
    });
    case c.POST_PHOTO_SUCCESS:
      return Object.assign({}, state, {
        photo: action.photo
      });
    case c.POST_PHOTO_FAILURE:
      return Object.assign({}, state, {
        photoError: action.photoError
      });
    default:
      return state;
  }
}
