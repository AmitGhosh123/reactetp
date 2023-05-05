import React  from "react";
import "./Card.css";

function Card( ) {
  return (
    <div className="cardBody">
    <div className="card">
      <img src="" alt="" className="card-image1" />
      <div className="card-content">
        <h3 className="card-title">Kokushibo</h3>
        <p className="card-description">this is a beautiful card made by me</p>
      </div>
    </div>
    <div className="card">
      <img src="" alt="" className="card-image2" />
      <div className="card-content">
        <h3 className="card-title">Yorichi</h3>
        <p className="card-description">this is a beautiful card made by me</p>
      </div>
    </div>
    </div>
  );
}

export default Card;
