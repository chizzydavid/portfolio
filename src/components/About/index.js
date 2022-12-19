import React from "react";
import './About.css';

const About = () => {

  return (
    <section id="about" >
      <div id="section" >
        <h2>About Me</h2>
        <div className="about__row">
          <div className="about__details">
            <p className="about__text">
                I am a Backend Engineer based in Lagos Nigeria with 5 years of working experience. I'm currently with Alerzo, one of Nigeria’s largest B2B platform founded in 2018 which helps retailers stock inventory directly from manufacturers.
                <br />
                There I'm part of a team that maintians a suite of product services and a growing backend infrastructure 
                <br />
                <br />

                I've had the privilege of working with both startups and large corporations in helping to build & scale various business products. 
                I've worked with a handful technology stacks, but I enjoy working with Javascript(NodeJs, GraphQL) and AWS
            </p>
          </div>

          <div className="about__img">
            <div className="profile-pic" >
              <div className="pic_content"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
