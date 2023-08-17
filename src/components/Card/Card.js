import React from 'react';
import './Card.css'; // Import your CSS file


const Card = ({tag,img1,img2}) => {
  return (
    <div className="card">
      <img
        src={img1}
        alt="Fashion Item"
        className="card-image"
      />
      <div className='content'>
      <button className="btn">{tag}</button>
      <h2 className="card-heading">Popular admin template you can use for your business</h2>
      <p className="card-description">
        It is a long established fact that a reader will be distracted by the readable content
      </p>
      <hr className="card-divider" />
      <div className="card-footer">
        <div className="left-section">
          <img
            src={img2}
            alt="Profile"
            className="profile-pic"
          />
          <div className='pic-details'>
          <p className="profile-name"><b>Fitbit Incorporation</b></p>
          
          <p className="profile-area">San Diego, California</p>
          </div>
        </div>
        <div className="right-section">
          <a href="/" className="read-more">Read more</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Card;