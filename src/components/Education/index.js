import React  from 'react'
import './Education.css';
import EducationCard from '../../shared/EducationCard'
import allEducationItems from './education_items';


const Education = () => {
  return (
    <section id="education" className="education">
        <h2>Education</h2>
        <div className="education__row">
          <ul className="education_item_list">
            {allEducationItems.map((i, index) => 
              (
                <EducationCard
                  key={index}
                  id={i.id}
                  name={i.name}
                  degree={i.degree}
                  date={i.date}
                  logo={i.logo}
                />
              ))
            }
        </ul>
      </div>
    </section>
  );
}

export default Education;

