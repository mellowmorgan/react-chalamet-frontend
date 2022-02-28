import * as c from './..actions/ActionTypes';

const initialState = {
  isLoading: false,
  photos: null,
  error:null,
  randomPhoto: null
}

export default (state=initialState, action) => {
  switch (action.type){
    case c.REQUEST_RANDOM_PHOTO:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.REQUEST_RANDOM_PHOTO_SUCCESS:
      return Object.assign({}, state, {
        isLoading:false,
        randomPhoto: action.randomPhoto
      });
    case c.REQUEST_RANDOM_PHOTO_FAILURE:
      return Object.assign({}, state, {
        isLoading:false,
        error: action.error
      });
    case c.REQUEST_PHOTOS:
    return Object.assign({}, state, {
      isLoading:true
    });
    case c.REQUEST_PHOTOS_SUCCESS:
    return Object.assign({}, state, {
      isLoading:false,
      photos: action.photos
    });
    case c.REQUEST_PHOTOS_FAILURE:
    return Object.assign({}, state, {
      isLoading:false,
      error: action.error
    });
    default:
      return state;
  }
}
