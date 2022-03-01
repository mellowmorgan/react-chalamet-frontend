import * as c from './../actions/ActionTypes';

const initialState = {
  isQuoteLoading: false,
  quotes: null,
  quoteError:null,
  randomQuote: null
}

export default (state=initialState, action) => {
  switch (action.type){
    case c.REQUEST_RANDOM_QUOTE:
      return Object.assign({}, state, {
       isQuoteLoading: true
      });
    case c.GET_RANDOM_QUOTE_SUCCESS:
      return Object.assign({}, state, {
       isQuoteLoading:false,
        randomQuote: action.randomQuote
      });
    case c.GET_RANDOM_QUOTE_FAILURE:
      return Object.assign({}, state, {
       isQuoteLoading:false,
        quoteError: action.quoteError
      });
    case c.REQUEST_QUOTES:
    return Object.assign({}, state, {
     isQuoteLoading:true
    });
    case c.GET_QUOTES_SUCCESS:
    return Object.assign({}, state, {
     isQuoteLoading:false,
      quotes: action.quotes
    });
    case c.GET_QUOTES_FAILURE:
    return Object.assign({}, state, {
     isQuoteLoading:false,
      quoteError: action.quoteError
    });
    default:
      return state;
  }
}