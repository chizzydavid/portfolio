import React from "react";
import './Portfolio.css';
import LinkIcon from '@material-ui/icons/Link';
import netflixImg from '../../assets/images/netflix.png';
import epicMailImg from '../../assets/images/epic_mail.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
        <div id="section">
            <div className="portfolio__row">

                <div className="portfolio__left">
                    <h2>Portfolio</h2>
                    <p>Some of my current projects </p>
                </div>

                <div className="portfolio__right">
                    <div className="portfolio__cards">
                        <div className="portfolio__card">
                            <a href="https://netflix-clone-d79ae.web.app/" target="_blank" rel='noopener noreferrer'>

                                <div className="image overlay-image" style={{
                                    backgroundImage: `url(${netflixImg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center"                        
                                }}></div>
                                <div className="content">
                                    <p className="portfolio__link"> <LinkIcon  />  </p>
                                    <h3>Netflix Clone</h3>
                                    <p>Browse your favourite Movies, TV shows and More </p>
                                </div>
                            </a>
                        </div>  
                        
                        <div className="portfolio__card">
                            <a href="https://chizzydavid.github.io/epic-mail/UI/index.html" target="_blank" rel='noopener noreferrer'>

                                <div className="image overlay-image" style={{
                                    backgroundImage: `url(${epicMailImg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center"
                                }}></div>
                                <div className="content">
                                    <p className="portfolio__link"> <LinkIcon  />  </p>
                                    <h3>Mail Hive</h3>
                                    <p>An easy and fun platform to send and receive mails </p>
                                </div>
                            </a>
                        </div>  
                    
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default Portfolio;


