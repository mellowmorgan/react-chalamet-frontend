import React from 'react';
import { connect } from 'react-redux';

import { makeRandomQuoteApiCall, makeRandomPhotoApiCall } from './../actions';

const h3NavStyle={display:"inline", letterSpacing:"1px",color:"#808080",fontSize:"26px",fontWeight:"bolder",marginBottom:"0" }

const randomPhotoStyle = {
  maxWidth:"100%",
 
}
const messageSpacing = {
  padding: "20px"
}
const photoHolder = {
  margin:"auto",
  textAlign: "center",
  marginBottom: "50px"
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
        <div style={messageSpacing}>
        <p>Error getting photo: {photosReducer.photoError.message}</p>
        <p>Error getting quote: {quotesReducer.quoteError.message}</p>
        </div>
        </React.Fragment>;
    }
    else if (photosReducer.photoError) {
      return <React.Fragment>
        <div style={messageSpacing}>
        <p>Error getting photo: {photosReducer.photoError.message}</p>
        </div>
        </React.Fragment>;
    }
    else if (quotesReducer.quoteError) {
      return <React.Fragment>
        <div style={messageSpacing}>
        <p>Error getting quote: {quotesReducer.quoteError.message}</p>
        </div>
        </React.Fragment>;
    }
    else if (photosReducer.isPhotoLoading || quotesReducer.isQuoteLoading) {
    
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          
         <div style={{textAlign:"center",margin:"50px auto",width:"60%"}}><h3 style={h3NavStyle}>Welcome! Here's a random quote and photo of Timmy</h3></div>
            
            <div style={letsGo}>
          <div>
            <p style={{fontSize: "20px", fontWeight:"500"}}><q>{quotesReducer.randomQuote}</q></p>
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