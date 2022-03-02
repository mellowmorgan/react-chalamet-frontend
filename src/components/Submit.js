import React from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postQuoteApiCall, postPhotoApiCall } from './../actions';
const formStyle={
  maxWidth:"400px",
  marginLeft:"auto",
  marginRight:"auto"
}
const messageSpacing = {
  padding: "20px"
}
const borderBetween = {
  border:"1.25px solid",
  width:"490px",
  maxWidth:"100%",
  marginTop:"40px",
  marginBottom:"40px",
  marginLeft:"auto",
  marginRight:"auto"
  
}
const formsContainer={
  padding:"60px",
  backgroundColor: "#f5f5f5",
  margin:"50px auto",
  width:"50%"
}
function Submit(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if ((props.photosReducer.photo && props.photosReducer.photo.message) || (props.photosReducer.photoError)){
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    }
    else if (props.photosReducer.photo){
      setTimeout(() => {
        navigate('/photos')
        window.location.reload(false);
      }, 3000);

    }
    else if ((props.quotesReducer.quote && props.quotesReducer.quote.message)|| (props.quotesReducer.quoteError)){
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    }
    else if (props.quotesReducer.quote){
      setTimeout(() => {
        navigate('/quotes')
        window.location.reload(false);
      }, 3000);
    }
  });
  const handleQuoteSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = props;
    dispatch(postQuoteApiCall(event.target.quote.value));
  
    //  if ((props.quotesReducer.quote && props.quotesReducer.quote.message)|| (props.quotesReducer.quoteError)){
    //   setTimeout(() => {
    //     window.location.reload(false);
    //   }, 3000);
    // }
    // else if (props.quotesReducer.quote){
    //   setTimeout(() => {
    //     navigate('/quotes')
    //     window.location.reload(false);
    //   }, 3000);
    // }
  }

  const handlePhotoSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = props;
    dispatch(postPhotoApiCall(event.target.photo.value));
    // if ((props.photosReducer.photo && props.photosReducer.photo.message) || (props.photosReducer.photoError)){
    //   setTimeout(() => {
    //     window.location.reload(false);
    //   }, 3000);
    // }
    // else if (props.photosReducer.photo){
    //   setTimeout(() => {
    //     navigate('/photos')
    //     window.location.reload(false);
    //   }, 3000);

    // }
  }


  if (props.photosReducer.photo){
    if (props.photosReducer.photo.message){
      return(
        <React.Fragment>
          <div style={messageSpacing}>
        <p>Error uploading photo:{props.photosReducer.photo.message}</p></div>
         
        </React.Fragment>
      );
    }else{return(
      <React.Fragment>
        <div style={messageSpacing}>
      <p>Photo successfully added!</p></div>
       
      </React.Fragment>
    );}
    
  }
  
  else if(props.quotesReducer.quote){
    if(props.quotesReducer.quote.message){
      return(
        <React.Fragment>
          <div style={messageSpacing}>
        <p>Error uploading quote: {props.quotesReducer.quote.message}</p></div>
         
        </React.Fragment>
    );
    }else{return(
      <React.Fragment>
        <div style={messageSpacing}>
      <p>Quote successfully added!</p></div>
       
      </React.Fragment>
  );}
    
  }
  else{
    return (
      <React.Fragment>
        <div style={formsContainer}>
           
           <Form style={formStyle} onSubmit={event => {handleQuoteSubmit(event)}}>
           <h4>Add a Timothee Quote</h4>
             <Form.Group>
            <Form.Label>Quote Content: </Form.Label>
            <Form.Control type="text" name="quote" /><br />
            </Form.Group>
            <Button variant="dark" type="submit" value="Submit">Submit</Button>
            </Form>
       
            <hr style={borderBetween} />
         
           <Form style={formStyle} onSubmit={event=>{handlePhotoSubmit(event)}}>
           <h4>Add a Photo</h4>
             <Form.Group>
            <Form.Label> Image URL: </Form.Label>
            <Form.Control type="text" name="photo" /><small>No paparrazi photos are allowed.</small>
            </Form.Group><br />
            <Button variant="dark" type="submit" value="Submit">Submit</Button>
          </Form>
           
        </div>
         
        </React.Fragment>
    );
}
}
const mapStateToProps = state => {
  return {
   quotesReducer: state.quotesReducer,
   photosReducer: state.photosReducer
  }
}
export default connect(mapStateToProps)(Submit);