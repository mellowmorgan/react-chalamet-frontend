import React, {useState,  useEffect} from 'react';
import { connect } from 'react-redux';
import { makePhotosApiCall } from './../actions';
import PropTypes from "prop-types";
const photoDivStyle={
  width: "50%",
  margin:"auto",
  marginTop: "50px",
  textAlign: "center"
}
function Photos(props) {
  useEffect(() => {
    const { dispatch } = props;
    dispatch(makePhotosApiCall());
    console.log(props)
  },[]);
  if (props.photosReducer.isPhotoLoading){
    return (
      <React.Fragment>
        <div>
          Loading...
        </div>
       
      </React.Fragment>
    );
  }
  else if (props.photosReducer.photoError){
    return (
      <React.Fragment>
        <div>
          <p>{props.photosReducer.photoError.message}</p>
        </div>
       
      </React.Fragment>
    );
    
  }
  else if (!props.photosReducer.photos){
    return (<p>Loading...</p>);
  }
  else{
    if (props.message){
      return(
        <React.Fragment>
          <p>Error: {props.message}</p>
              <div style={photoDivStyle}>
              {props.photosReducer.photos.map((photo)=>{
          return <img style={{maxWidth:"100%", marginBottom:"20px"}} src={photo.file_path}/>
        })}
                
              </div>
             
            </React.Fragment>
        ); 
    }
    return(
    <React.Fragment>
          <div style={photoDivStyle}>
          {props.photosReducer.photos.map((photo)=>{
      return <img style={{maxWidth:"100%", marginBottom:"20px"}} src={photo.file_path}/>
    })}
            
          </div>
         
        </React.Fragment>
    );
  }
    

}
Photos.propTypes = {
  message: PropTypes.string
}
const mapStateToProps = state => {
  return {
   photosReducer: state.photosReducer
  }
}
export default connect(mapStateToProps)(Photos);