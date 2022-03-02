import React, {useState,  useEffect} from 'react';
import { connect } from 'react-redux';
import { makeQuotesApiCall } from './../actions';
import PropTypes from 'prop-types'
const quotesStyle={
  width:"50%",
  margin:"50px auto"
}
const messageSpacing = {
  padding: "20px"
}
const qStyle={
  fontSize:"20px",
  marginBottom:"0",
  fontWeight:"600"
}
const quoteStyle={
  backgroundColor: "#f5f5f5",
  padding:"30px",
  marginBottom:"20px"
}
function Quotes(props) {
  console.log(props)
  const { dispatch } = props;

  useEffect(() => {
    dispatch(makeQuotesApiCall());
  },[]);


  if (props.quotesReducer.quoteError){
    return (
      <React.Fragment>
        <div style={messageSpacing}>
          <p>{props.quotesReducer.quoteError.message}</p>
        </div>
       
      </React.Fragment>
    );
    
  }
  else if (props.quotesReducer.isQuoteLoading){
    return (
      <React.Fragment>
        <div>
          Loading...
        </div>
       
      </React.Fragment>
    );
  }
  else if (!props.quotesReducer.quotes){
    return (<p>Loading...</p>);
  }
  else{
    if (props.message){
      return(
        <React.Fragment>
          <div style={messageSpacing}>
          <p>Error: {props.message}</p>
          </div>
              
              <div style={quotesStyle}>
              {props.quotesReducer?.quotes.map((quote)=>{
                return <div style={quoteStyle}><q style={qStyle}  key={quote.content}>{quote.content}</q></div> 
              })}
                
              </div>
             
            </React.Fragment>
        );
    }
    return(
    <React.Fragment>
          <div style={quotesStyle}>
          {props.quotesReducer?.quotes.map((quote)=>{
            return <div style={quoteStyle}><q style={qStyle}  key={quote.content}>{quote.content}</q></div> 
          })}
            
          </div>
         
        </React.Fragment>
    );
  }
    

}

const mapStateToProps = state => {
  return {
   quotesReducer: state.quotesReducer
  }
}
Quotes.propTypes = {
  message: PropTypes.string
}
export default connect(mapStateToProps)(Quotes);