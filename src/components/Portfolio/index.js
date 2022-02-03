import React, { useState }  from 'react'
import './Portfolio.css';
import PortfolioCard from '../../shared/PortfolioCard';
import allProjects from './projects';
import { useSpring, animated } from 'react-spring';

const Portfolio = () => {
  const [projectFilter, setProjectFilter] = useState('all');
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [projects, setProjects] = useState(allProjects);
  const [displayedProjects, setDisplayedProjects] = useState(allProjects.slice(0, 6));

  const props = useSpring({ 
    from: { opacity: 0, marginTop: 120 },
    to: { opacity: 1,  marginTop: 0 },
    config: {duration: 800}
  })

  const filterProjects = (filter) => {
    setProjectFilter(filter);

    const newProjects = filter === 'all' ? allProjects : allProjects.filter((p) => p.category === filter);
    setProjects(newProjects);
    setDisplayedProjects(newProjects.length > 6 ? newProjects.slice(0, 6) : newProjects);
    setIsShowingMore(false);
  }

  const toggleShowMore = () => {
    if (isShowingMore) setDisplayedProjects(projects.slice(0, 6));
    else setDisplayedProjects(projects);
    setIsShowingMore(!isShowingMore);
  }

  return (
    <section id="portfolio" className="portfolio">
        <div id="section">

            <div className="portfolio__row">
                <h2>Portfolio</h2>
                <ul className="project_filter_list">
                    {['All', 'Frontend', 'Backend', 'Mobile', 'Cloud'].map((i, index) => 
                      (
                        <li
                          key={index}
                          className={projectFilter === i.toLowerCase() ? 'active' : ''}
                          onClick={() => filterProjects(i.toLowerCase())}
                        > {i} </li>
                      ))
                    }
                </ul>

                <animated.div style={props}>
                  <div className="portfolio__cards">
                    {displayedProjects.map((p, i) => (
                      <PortfolioCard
                        key={i}
                        name={p.name}
                        description={p.description}
                        appUrl={p.appUrl}
                        githubUrl={p.githubUrl}
                        playUrl={p.playUrl}
                        category={p.category}
                        skills={p.skills}
                      />
                    ))}
                  </div>
                </animated.div>


                {
                  projects.length > 6 && (
                    <div onClick={toggleShowMore} className="button" id="show_more">
                      <p> {isShowingMore ? "SHOW LESS" : "SHOW MORE"} </p>

                      {/* <HashLink 
                        to="#portfolio"
                        scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end'})}
                    > 
                      <p> {isShowingMore ? "SHOW LESS" : "SHOW MORE"} </p>
                    </HashLink> */}

                    </div>
                  )
                }

            </div>
        </div>

    </section>
  );
}

export default Portfolio;

