import React from "react";
import "./ResumeCard.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowRightOutlined";

const ResumeCard = ({
  company,
  companyUrl,
  role,
  startDate,
  endDate,
  responsibilities,
}) => {
  return (
    <div className="resume__card">
      <div className="content">
        <div className="role_name_header">
          <p className="role">
            {role}
            {companyUrl != null ? (
              <a
                className="role_highlight"
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="at_icon"> @ </span>
                <span> {company} </span>
              </a>
            ) : (
              <span className="role_highlight">
                <span className="at_icon"> @ </span>
                <span> {company} </span>
              </span>
            )}
          </p>
          <p className="role_date">
            {startDate} - {endDate}{" "}
          </p>
        </div>

        <div className="responsibilities">
          {responsibilities.map((i, index) => (
            <p key={index} className="responsibility_item">
              <span className="arrow_pointer">
                {" "}
                <ArrowForwardIcon />{" "}
              </span>
              <span> {i} </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
