import React, { useRef } from "react";
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs, faHtml5, faCss3, faVuejs, faGit, faGithub, faFigma, } from '@fortawesome/free-brands-svg-icons'
import { Icon } from '@iconify/react';
import reduxIcon from '@iconify-icons/simple-icons/redux';
import flutterIcon from '@iconify-icons/simple-icons/flutter';
import firebaseIcon from '@iconify-icons/simple-icons/firebase';
import herokuIcon from '@iconify-icons/simple-icons/heroku';
import typescriptIcon from '@iconify-icons/simple-icons/typescript';
import pythonIcon from '@iconify-icons/simple-icons/python';
import djangoIcon from '@iconify-icons/simple-icons/django';
import postgresqlIcon from '@iconify-icons/simple-icons/postgresql';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import mySqlIcon from '@iconify-icons/simple-icons/mysql';
import vsCodeIcon from '@iconify-icons/simple-icons/visualstudiocode';
import androidStudioIcon from '@iconify-icons/simple-icons/androidstudio';
import expressIcon from '@iconify-icons/simple-icons/express';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const Resume = () => {
  const scrollRef = useRef(null);

  const scroll = (num) => {
    scrollRef.current.scrollLeft += num;
  }

  return (
    <section id="resume">

      <div id="section">

        <h2>Resume</h2>

        <div className="resume__row">

          <div className="education">
            <h3>Education</h3>

              <div className="resume__items">

                  <div className="resume__item">
                      <div className="line"></div>
                      <div className="resume__item__icon">
                        <p className="portfolio__link"> <HomeWorkIcon  />  </p>
                      </div>
                      <div className="resume__item_text">
                          <h4>University of East London, London, England</h4>
                          <h4 className="subText">Master's Degree, Computer Science (2021 - 2022)</h4>
                      </div>
                  </div>  

                  <div className="resume__item">
                  <div className="line"></div>

                      <div className="resume__item__icon">
                        <p className="portfolio__link"> <HomeWorkIcon  />  </p>
                      </div>
                      <div className="resume__item_text">
                          <h4>Niger Delta University, Yenegoa, Nigeria</h4>
                          <h4 className="subText">Bachelor's Degree, Microbiology (2016)</h4>
                      </div>
                  </div>            
              </div>
          </div>


          <div className="experience">
            <h3>Experience</h3>
              <div className="resume__items">

              <div className="resume__item">
                      <div className="line"></div>
                      <div className="resume__item__icon">
                        <p className="portfolio__link"> <WorkOutlineIcon  />  </p>
                      </div>
                      <div className="resume__item_text">
                          <h4>Software Engineer</h4>
                          <h4 className="subText">United Bank for Africa | Lagos, Nigeria (Dec 2019 - Present)</h4>
                      </div>
                  </div>  

                  <div className="resume__item">
                  <div className="line"></div>

                      <div className="resume__item__icon">
                        <p className="portfolio__link"> <WorkOutlineIcon  />  </p>
                      </div>
                      <div className="resume__item_text">
                          <h4>Software Engineer</h4>
                          <h4 className="subText">Andela | Lagos, Nigeria (Mar 2019 - Oct 2019)</h4>
                      </div>
                  </div>  

                  <div className="resume__item">
                  <div className="line"></div>

                      <div className="resume__item__icon">
                        <p className="portfolio__link"> <WorkOutlineIcon  />  </p>
                      </div>
                      <div className="resume__item_text">
                          <h4>Mobile Application Developer</h4>
                          <h4 className="subText">Biomach Technologies | New Delhi, India (July 2018 - Nov 2018) </h4>
                      </div>
                  </div>  
              </div>
          </div>
        </div>


        <div className="skills">
            <h3>My Skills</h3>
            
            <div className="skills__container">
              <p onClick={() => scroll(-150)} className="scroll_indicator back"> <ArrowBackIosIcon  />  </p>

              <ul ref={scrollRef}>
                <li> <FontAwesomeIcon className="link" icon={faReact} /> </li>
                <li> <FontAwesomeIcon className="link" icon={faNodeJs} /> </li>
                <li> <Icon className="link" icon={typescriptIcon} /> </li>
                <li> <FontAwesomeIcon className="link" icon={faVuejs} /> </li>
                <li> <FontAwesomeIcon className="link" icon={faGit} /> </li>
                <li> <FontAwesomeIcon className="link" icon={faGithub} /> </li>
                <li> <FontAwesomeIcon className="link" icon={faFigma} /> </li>
                <li> <Icon className="link" icon={reduxIcon} /> </li>
                <li> <FontAwesomeIcon className="link" icon={faCss3} /> </li>
                <li> <Icon className="link" icon={flutterIcon} /> </li>
                <li> <Icon className="link" icon={firebaseIcon} /> </li>
                <li> <Icon className="link" icon={herokuIcon} /> </li>
                <li> <Icon className="link" icon={pythonIcon} /> </li>
                <li> <Icon className="link" icon={djangoIcon} /> </li>
                <li> <FontAwesomeIcon className="link" icon={faHtml5} /> </li>
                <li> <Icon className="link" icon={expressIcon} /> </li>
                <li> <Icon className="link" icon={mySqlIcon} /> </li>
                <li> <Icon className="link" icon={mongodbIcon} /> </li>
                <li> <Icon className="link" icon={postgresqlIcon} /> </li>
                <li> <Icon className="link" icon={vsCodeIcon} /> </li>
                <li> <Icon className="link" icon={androidStudioIcon} /> </li>

              </ul>        
              <p onClick={() => scroll(150)} className="scroll_indicator forward"> <ArrowForwardIosIcon  />  </p>

            </div>

          </div>
      </div>
    </section>
  );
};

export default Resume;
