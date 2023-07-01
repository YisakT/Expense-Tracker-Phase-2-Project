import React from "react";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';

function HomePage() {
  const divStyle = {
    backgroundColor: "#85bb65",
    padding: "20px",
  };

  return (
    <div style={divStyle}>
      <h1>Welcome to Expense Tracker App</h1>
      <img src={image1} alt="Description of image 1" style={{width: '100%', height: 'auto'}}/>
      <img src={image2} alt="Description of image 2" style={{width: '100%', height: 'auto'}}/>
    </div>
  );
}

export default HomePage;
