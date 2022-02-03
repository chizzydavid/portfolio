import React from "react";
import './EducationCard.css';

const EducationCard = ({ id, name, degree, date, logo }) => {
  return (              
    <div className="education__item">
        <div className='education__item__icon'>
            <img src={logo} alt="school logo" />
        </div>
        <div className="education__item_text">
            <h4>{name}</h4>
            <h4 className="subText">{degree} {date}</h4>
        </div>
    </div>  
  );
};

export default EducationCard;

