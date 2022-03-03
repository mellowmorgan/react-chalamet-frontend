import React, {useState,  useEffect} from 'react';
import { connect } from 'react-redux';
import { makePhotosApiCall } from './../actions';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button'
const photoDivStyle={
  width: "50%",
  margin:"auto",
  marginTop: "50px",
  textAlign: "center"
}
const messageSpacing = {
  padding: "20px"
}
function Photos(props) {
  const [page,setPage] = useState(1);
  const photosPerPage = 10;
  function previousClick(){
    if (page>1){
      setPage(page-1);
    }
  }
  
  function nextClick(){
    if (page<chunkedArrayPhotos.length){
      setPage(page+1);
    }
  }
  let chunk = [];
  let chunkedArrayPhotos = []
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
   
      const { dispatch } = props;
      dispatch(makePhotosApiCall());
  },[]);
  
  if (props.photosReducer.photos){
    chunkedArrayPhotos = chunkTheArray(props.photosReducer.photos, photosPerPage)
    chunk = chunkedArrayPhotos[page-1]
  }
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
        <div style={messageSpacing}>
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
          <div style={messageSpacing}>
          <p>Error: {props.message}</p>
          </div>
              <div style={photoDivStyle}>
              {chunk.map((photo)=>{
          return  <img key={photo.file_path} style={{maxWidth:"100%", marginBottom:"20px"}} src={photo.file_path}/>
        })}
                
              </div>
             
            </React.Fragment>
        ); 
    }
    return(
    <React.Fragment>
          <div style={photoDivStyle}>
          {chunk.map((photo)=>{
      return <img key={photo.file_path} style={{maxWidth:"100%", marginBottom:"20px"}} src={photo.file_path}/>
    })}
            
          </div>
          <div style={{width:"60%", margin:"30px auto",justifyContent:"space-between",display: "flex"}}>
          <Button variant="dark" style={{fontWeight:"bold"}} onClick={()=>previousClick()}>Previous Page</Button> <Button variant="dark" style={{fontWeight:"bold"}} onClick={()=>nextClick()}>Next Page</Button> </div>
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