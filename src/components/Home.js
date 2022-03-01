import React from 'react';
import { connect } from 'react-redux';

import { makeRandomQuoteApiCall, makeRandomPhotoApiCall } from './../actions';
const randomPhotoStyle = {
  maxWidth:"100%",
 
}
const photoHolder = {
  margin:"auto",
  textAlign: "center"
}
const letsGo= {
  width:"50%",
  textAlign: "center",
  margin:"auto",
  marginTop:"40px"
}

class Home extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   randomQuote: null,
    //   randomPhoto: null
    // };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeRandomPhotoApiCall());
    dispatch(makeRandomQuoteApiCall());
  }


  render() {
    
    const { photosReducer, quotesReducer } = this.props;
    if (photosReducer.photoError && quotesReducer.quoteError) {
      return <React.Fragment>
        <p>Error getting photo: {photosReducer.photoError.message}</p>
        <p>Error getting quote: {quotesReducer.quoteError.message}</p>
        </React.Fragment>;
    }
    else if (photosReducer.photoError) {
      return <React.Fragment>
        <p>Error getting photo: {photosReducer.photoError.message}</p>
        </React.Fragment>;
    }
    else if (quotesReducer.quoteError) {
      return <React.Fragment>
        <p>Error getting quote: {quotesReducer.quoteError.message}</p>
        </React.Fragment>;
    }
    else if (photosReducer.isPhotoLoading || quotesReducer.isQuoteLoading) {
    
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          
          <div style={letsGo}>
          <div>
            <p style={{fontSize: "20px", fontWeight:"500"}}>{quotesReducer.randomQuote}</p>
          </div>
          <div style={photoHolder}>
            <img style={randomPhotoStyle} src={photosReducer.randomPhoto} alt="A random photo of Timothee Chalamet" />
          </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
   photosReducer: state.photosReducer,
   quotesReducer: state.quotesReducer
  }
}
export default connect(mapStateToProps)(Home);