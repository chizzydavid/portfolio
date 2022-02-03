import React, { useState } from "react";
import "./Resume.css";
import ResumeCard from "../../shared/ResumeCard";
import allExperiences from "./experiences";
import { RESUME_LINK } from "../../constants.js";

const Resume = () => {
  const [activeExperience, setActiveExperience] = useState(allExperiences[0]);

  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <div className="resume__row">
        <ul className="experience_menu_list">
          {allExperiences.map((i, index) => (
            <li
              key={index}
              className={
                activeExperience.company.toLowerCase() ===
                i.company.toLowerCase()
                  ? "active"
                  : ""
              }
              onClick={() => setActiveExperience(i)}
            >
              {" "}
              {i.company}{" "}
            </li>
          ))}
        </ul>

        <div className="resume__cards">
          <ResumeCard
            company={activeExperience.company}
            companyUrl={activeExperience.companyUrl}
            role={activeExperience.role}
            startDate={activeExperience.startDate}
            endDate={activeExperience.endDate}
            responsibilities={activeExperience.responsibilities}
          />

          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cv_button_link"
          >
            <div className="button download_cv_button">
              <p>DOWNLOAD CV</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

