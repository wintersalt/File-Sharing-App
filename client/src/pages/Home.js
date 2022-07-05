import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-container__text">
          <h1>Free Cloud-Based</h1>
          <h1>Reliable Storage</h1>
          <p>Take advantage of free fast and reliable storage now!</p>
        </div>
        <div className="home-container__drop">
          <div className="home-container__drop-inner">
            <p>Drag & Drop files here to upload</p>
            <input type="button" value="Browse Files" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
