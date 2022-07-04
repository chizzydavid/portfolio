import React from "react";
import './SkillCard.css';
import {
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./ProgressProvider";


const SkillCard = ({ name, image, score }) => {
  return (
    <div className="skill__card">
      <div className="content">
          <ProgressProvider valueStart={0} valueEnd={score}>
            {(value) => 
              <div className="skill_item_wrapper">

                <CircularProgressbarWithChildren 
                  value={value} 
                  strokeWidth={8}
                  
                  pathTransitionDuration= {5.5}
                  styles={buildStyles({
                    pathColor: '#ef0d33',
                    trailColor: '#343C40',
                    strokeLinecap: "butt"
                  })}
                > 
                  <div className="skill_icon">
                    <img className="skill_img" src={image} alt="portrait" />
                  </div>

                </CircularProgressbarWithChildren>
                <p className="skill_name"> {name} </p> 

              </div>
            }
          </ProgressProvider>
      </div>
    </div>

  );
};


export default SkillCard;


