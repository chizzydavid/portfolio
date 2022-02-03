import React  from 'react'
import './Skills.css';
import SkillCard from '../../shared/SkillCard'
import allSkills from './skills';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Skills = () => {
  return (
    <section id="skills" className="skills">
        <div id="skills_section">
          <h2>Skills</h2>

          <p className="scroll_indicator back"> <ArrowBackIosIcon />  </p>
          <p className="scroll_indicator forward"> <ArrowForwardIosIcon  />  </p>

          <div className="skills__row">
            <ul className="skill__cards">
              {allSkills.map((p, i) => (
                <SkillCard
                  key={i}
                  name={p.name}
                  image={p.image}
                  score={p.score}
                />
              ))}
            </ul>

          </div>
        </div>
    </section>
  );
}

export default Skills;

