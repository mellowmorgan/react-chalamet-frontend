import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux';

function Submit(props) {
  const handleQuoteSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = props;
    dispatch(postQuoteApiCall(event.target.quote.value));
  }
  const handlePhotoSubmit = (event) => {
    
    event.preventDefault();
    alert(event.target.photo.value)
    const { dispatch } = props;
    dispatch(postPhotoApiCall(event.target.quote.value));
  }
      return (
        <React.Fragment>
          <div>
           <h2>Add a Timothee Quote</h2>
           <form onSubmit={event => {handleQuoteSubmit(event)}}>
  <label>
    Quote Content: </label><br/>
    <textarea type="text" name="quote" />
    <br />
    <Button variant="light" type="submit" value="Submit">Submit</Button>
</form>
           <h2>Add a Photo</h2>
           <small>No paparrazi photos are allowed.</small>
           <form onSubmit={event=>{handlePhotoSubmit(event)}}>
  <label>
    Image URL:  </label><br/>
    <input type="text" name="photo" /><br />

  <Button variant="light" type="submit" value="Submit">Submit</Button>
</form>
           
          </div>
         
        </React.Fragment>
      );

}

const mapStateToProps = state => {
  return {
   quotesReducer: state.quotesReducer,
   photosReducer: state.photosReducer
  }
}
export default connect(mapStateToProps)(Submit);