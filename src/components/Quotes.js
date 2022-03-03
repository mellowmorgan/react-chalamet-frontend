import React, {useState,  useEffect} from 'react';
import { connect } from 'react-redux';
import { makeQuotesApiCall } from './../actions';
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
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
  const [page,setPage] = useState(1);
  const quotesPerPage = 10;
  const { dispatch } = props;
  function previousClick(){
    if (page>1){
      setPage(page-1);
    }
  }
  
  function nextClick(){
    if (page<chunkedArrayQuotes.length){
      setPage(page+1);
    }
  }
  let chunk = [];
  let chunkedArrayQuotes = []
  function chunkTheArray(array,perPage){
    let indexStart = 0;
    let indexEnd = indexStart+perPage;
    let chunkedArray = []
    chunkedArray.push(array.slice(indexStart,indexEnd))
    while (array.slice(indexStart,indexEnd).length===perPage){
      indexStart = indexEnd;
      indexEnd = indexEnd+perPage;
      if (array.slice(indexStart,indexEnd).length>0){chunkedArray.push(array.slice(indexStart,indexEnd))}
    }
    return chunkedArray;
  }
  useEffect(() => {
    dispatch(makeQuotesApiCall());
  },[]);

  if (props.quotesReducer.quotes){
    chunkedArrayQuotes = chunkTheArray(props.quotesReducer.quotes, quotesPerPage)
    chunk = chunkedArrayQuotes[page-1]
  }
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
              {chunk.map((quote)=>{
                return <div style={quoteStyle}><q style={qStyle}  key={quote.content}>{quote.content}</q></div> 
              })}
                
              </div>
              <div style={{width:"60%", margin:"30px auto",justifyContent:"space-between",display: "flex"}}>
          <Button variant="dark" style={{fontWeight:"bold"}} onClick={()=>previousClick()}>Previous Page</Button> <h5>Page {page} of {chunkedArrayQuotes.length}</h5> <Button variant="dark" style={{fontWeight:"bold"}} onClick={()=>nextClick()}>Next Page</Button> </div>
            </React.Fragment>
        );
    }
    return(
    <React.Fragment>
          <div style={quotesStyle}>
          {chunk.map((quote)=>{
            return <div style={quoteStyle}><q style={qStyle}  key={quote.content}>{quote.content}</q></div> 
          })}
            
          </div>
          <div style={{width:"60%", margin:"30px auto",justifyContent:"space-between",display: "flex"}}>
          <Button variant="dark" style={{fontWeight:"bold"}} onClick={()=>previousClick()}>Previous Page</Button> <h5>Page {page} of {chunkedArrayQuotes.length}</h5> <Button variant="dark" style={{fontWeight:"bold"}} onClick={()=>nextClick()}>Next Page</Button> </div>
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