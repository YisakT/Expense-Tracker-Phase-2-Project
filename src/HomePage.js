import React from "react";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';

function HomePage() {
  const divStyle = {
    backgroundColor: "#85bb65",
    padding: "20px",
    textAlign: "center",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    marginTop: "20px",
  };

  return (
    <div style={divStyle}>
      <h1 style={{ color: "#fff" }}>Welcome to the Expense Tracker App</h1>
      <img src={image1} alt="Description of image 1" style={imageStyle} />
      <img src={image2} alt="Description of image 2" style={imageStyle} />
    </div>
  );
}

export default HomePage;
