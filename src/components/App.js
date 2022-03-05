import React from 'react';
import Home from './Home';
import NavBar from './NavBar'
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Submit from './Submit'
import Photos from './Photos'
import Quotes from './Quotes'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
const contentContainer = {
  minHeight: "calc(100vh - 34px)",
  paddingBottom: "50px"
}
const footerPin = {
  textAlign: "center",
  position: "relative",
  left: "0",
  bottom: "0",
  backgroundColor:"#303030",
  color:"white",
  padding:"30px"
}
const h5NavStyle={fontSize:"16px",color:"white",marginRight:"40px",marginLeft:"20px",marginBottom:"0",display:"inline-block"}

function App() {
  return (
  
     <Router>
       <div style={contentContainer}>
      <NavBar  />
    <Routes>
      <Route exact path={process.env.PUBLIC_URL + '/'} element={<Home />} />
      <Route exact path={process.env.PUBLIC_URL +'/quotes'} element={<Quotes />} />
      <Route exact path={process.env.PUBLIC_URL +' /photos'} element={<Photos />} />
      <Route exact path={process.env.PUBLIC_URL +' /submit'} element={<Submit />} />
    </Routes>
    </div>
    <footer style={footerPin}><h5 style={h5NavStyle}>Copyright 2022 Morgan Waites</h5><a href="https://github.com/mellowmorgan/react-chalamet-frontend"><h5 style={h5NavStyle}>GitHub</h5></a></footer>
  </Router>
  
  
  );
}

export default App;
