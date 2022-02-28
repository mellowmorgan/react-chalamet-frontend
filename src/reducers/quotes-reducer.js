import * as c from './..actions/ActionTypes';

const initialState = {
  isLoading: false,
  quotes: null,
  error:null,
  randomQuote
}

export default (state=initialState, action) => {
  switch (action.type){
    case c.REQUEST_RANDOM_QUOTE:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.REQUEST_RANDOM_QUOTE_SUCCESS:
      return Object.assign({}, state, {
        isLoading:false,
        randomQuote: action.randomPhoto
      });
    case c.REQUEST_RANDOM_QUOTE_FAILURE:
      return Object.assign({}, state, {
        isLoading:false,
        error: action.error
      });
    case c.REQUEST_QUOTES:
    return Object.assign({}, state, {
      isLoading:true
    });
    case c.REQUEST_QUOTES_SUCCESS:
    return Object.assign({}, state, {
      isLoading:false,
      quotes: action.quotes
    });
    case c.REQUEST_QUOTES_FAILURE:
    return Object.assign({}, state, {
      isLoading:false,
      error: action.error
    });
    default:
      return state;
  }
}