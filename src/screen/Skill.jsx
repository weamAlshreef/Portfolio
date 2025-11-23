    import React from 'react';
    import { skillsData } from '../assets/data/data';

export const Skill = () => {
    return (
    <>
        <section className='skills-section'>
        <div className="container">
        <div className="section-header text-center">
    <h2 className="section-title">My Skills</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa alias dolorem minima!</p>
        </div>
        <div className="skills-widget grid6">
    {skillsData.map((skill) => (
        <div key={skill.id} className="skill-item text-center">
        <div className="skill-inner">
        <div className="icon-box">
                    <img src={skill.icon} alt={skill.name} />
                    </div>
                    <div className="number">{skill.percentage}%</div>
                    </div>
                    <p>{skill.name}</p>
                </div>
    ))}
        </div>
        </div>
        </section>
    </>
    )
    }

    export default Skill