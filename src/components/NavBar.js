import React from 'react'
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
        <div style={titleNavStyle}><h2 style={h2NavStyle}>timothee API</h2></div>
        <div style={rightDivNavStyle}>
        <h5 style={h5NavStyle}>Quotes</h5>
        <h5 style={h5NavStyle}>Photos</h5>
        <h5 style={h5NavStyle}>Submit</h5>
       
        </div>
       
       
      </nav>
    </React.Fragment>
  );
}

export default NavBar;