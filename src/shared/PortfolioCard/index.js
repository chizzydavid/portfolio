import React from "react";
import './PortfolioCard.css';
import FolderIcon from "@material-ui/icons/FolderOutlined";
import GithubIcon from "@material-ui/icons/GitHub";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt as RedirectIcon } from '@fortawesome/free-solid-svg-icons'

const PortfolioCard = ({ githubUrl, appUrl, playUrl, name, description, skills }) => {
  return (
    <div className="portfolio__card">
      <div className="content">
        <div className="icon_header">
          <p> <FolderIcon  className="folder_icon"/>  </p>
          
          <div className="link_icons">
            {githubUrl && (<a href={githubUrl} target="_blank" rel='noopener noreferrer'>  <p className="github_icon"> <GithubIcon />  </p> </a> ) }
            {appUrl && (<a href={appUrl} target="_blank" rel='noopener noreferrer'>  <p className="redirect_icon"> <FontAwesomeIcon className="link" icon={RedirectIcon} /> </p> </a>) }
            {playUrl && (<a href={playUrl} target="_blank" rel='noopener noreferrer'> <p className="github_icon"> <PlayArrowIcon />  </p>   </a>  ) }
          </div>
        </div>

        <div>
          <h3>{name}</h3>
          <p>{description} </p>
        </div>

        <p className="skills_footer"> 
          {skills.map((i, index) => (<span key={index} className="footer_skill_item">{i}</span>) )}
        </p>
      </div>
    </div>

  );
};

export default PortfolioCard;


