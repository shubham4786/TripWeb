import React from "react";

const Footer = () => {
  return (
    <div style={mainStyle}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h4 style={{ padding: "20px 5px" }}>Contact Us</h4>
        <h5 style={{ padding: "10px 5px" }}>News</h5>
        <h5 style={{ padding: "10px 5px" }}>Security</h5>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h4 style={{ padding: "20px 5px" }}>Company</h4>
        <h5 style={{ padding: "10px 5px" }}>About Us</h5>
        <h5 style={{ padding: "10px 5px" }}>Careers</h5>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h4 style={{ padding: "20px 5px" }}>Support</h4>
        <h5 style={{ padding: "10px 5px" }}>Contact</h5>
        <h5 style={{ padding: "10px 5px" }}>Legal Notice</h5>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h4 style={{ padding: "20px 5px" }}>Other Services</h4>
        <h5 style={{ padding: "10px 5px" }}>Car hire</h5>
        <h5 style={{ padding: "10px 5px" }}>Activity Finder</h5>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h4 style={{ padding: "20px 5px" }}>Mobile</h4>
        <h5 style={{ padding: "10px 5px" }}>Mobile Feedback</h5>
        <h5 style={{ padding: "10px 5px" }}>Customer Support</h5>
      </div>
    </div>
  );
};

const mainStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  background: "#fff",
  marginTop: "20px",
  padding: "30px 5px",
  flexWrap: "wrap",
};

export default Footer;
