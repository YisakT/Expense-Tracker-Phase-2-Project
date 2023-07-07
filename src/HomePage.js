import React from "react";

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
      <img src="https://drive.google.com/uc?export=view&id=1RqkejNE8SRI4MMsWiyFMzKB8kReaYQUa" alt="Description of image 1" style={imageStyle} />
      <img src="https://drive.google.com/uc?export=view&id=1x01s0rGrsSkbXo0yh4PgAPTMKGEDX8uh" alt="Description of image 2" style={imageStyle} />
    </div>
  );
}

export default HomePage;
