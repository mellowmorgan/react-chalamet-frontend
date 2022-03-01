import React from 'react';
import Home from './Home';
import NavBar from './NavBar'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Submit from './Submit'
import Photos from './Photos'
import Quotes from './Quotes'
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="quotes" element={<Quotes />} />
      <Route path="photos" element={<Photos />} />
      <Route path="submit" element={<Submit />} />
    </Routes>
  </BrowserRouter>,
      
    </React.Fragment>
  );
}

export default App;
