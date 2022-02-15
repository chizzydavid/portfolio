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
                I am Chizindu David, a Software Engineer based in Lagos Nigeria with 5 years of working experience. I'm currently with Alerzo,
                one of Nigeria's biggest B2B platforms as a Backend Engineer, where I'm part of a team that maintians product services and a growing backend infrastructure 
                <br />

                I've had the privilege of working with both startups and big corporations in helping to build & scale various business products. 
                I've worked with a handful technology stacks, but I enjoy working mainly with Javascript and Flutter
            </p>

            <p className="about__text">
              In my spare time I love to read fiction novels and play board games. I also love eating Nigerian food particularly, jollof rice and dodo ;-)
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
