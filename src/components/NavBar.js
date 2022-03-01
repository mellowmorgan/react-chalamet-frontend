import React from 'react'
import { Link } from "react-router-dom";

const navStyle ={
  minHeight:"fit-content",
  padding: "15px",
  background: "black",
  overflow:"hidden",
}
const titleNavStyle={
  overflow:"hidden",
  marginLeft:"10px",
float:"left"

}
const rightDivNavStyle={
  overflow:"hidden",
  height:"fit-content",
  float:"right",
  marginTop:"5px"
}
const h5NavStyle={color:"white",marginRight:"20px",marginBottom:"0",display:"inline-block"}

const h2NavStyle={display:"inline",textAlign:"left",color:"#a3e1ff",letterSpacing:"1.5px",fontSize:"32px",fontWeight:"bolder",marginBottom:"0" }

function NavBar() {
  return (
    <React.Fragment>
      <nav style={navStyle}>
        <div style={titleNavStyle}>
        <Link style={{textDecoration:"none"}} to="/"><h2 style={h2NavStyle}>timothee API</h2></Link></div>
        <div style={rightDivNavStyle}>
        <Link style={{textDecoration:"none"}} to="/quotes"><h5 style={h5NavStyle} href="">Quotes</h5></Link>
        <Link style={{textDecoration:"none"}} to="/photos"><h5 style={h5NavStyle}>Photos</h5></Link>
        <Link style={{textDecoration:"none"}} to="/submit"><h5 style={h5NavStyle}>Submit</h5></Link>
       
        </div>
       
       
      </nav>
    </React.Fragment>
  );
}

export default NavBar;