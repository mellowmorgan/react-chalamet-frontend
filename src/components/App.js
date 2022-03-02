import React from 'react';
import Home from './Home';
import NavBar from './NavBar'
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Submit from './Submit'
import Photos from './Photos'
import Quotes from './Quotes'
function App() {
  return (
     <Router>
      <NavBar onClick={() => window.location.reload()} />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/quotes" element={<Quotes />} />
      <Route exact path="/photos" element={<Photos />} />
      <Route exact path="/submit" element={<Submit />} />
    </Routes>
  </Router>
  );
}

export default App;
