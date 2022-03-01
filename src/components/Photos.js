import React, {useState,  useEffect} from 'react';
import { connect } from 'react-redux';
import { makePhotosApiCall } from './../actions';

const photoDivStyle={
  width: "50%",
  margin:"auto",
  marginTop: "50px"
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

const mapStateToProps = state => {
  return {
   photosReducer: state.photosReducer
  }
}
export default connect(mapStateToProps)(Photos);