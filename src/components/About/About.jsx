import React from 'react';
import './About.css';
import profile from '../../assets/profile_img.jpg';

const About = () => {
  return (
    <div id='about' className='about-container'>
      <div className='about-header'>
        <h1>Get to <span>Know more</span> About Me</h1>
      </div>

      <div className='about-content'>
        <div className='about-image'>
          <img src={profile} alt="Profile" />
        </div>

        <div className='about-text'>
          <p>
            I am a dedicated Computer Science and Engineering student at CMR Institute of Technology (2022-2026), Specializing in Data Science.
            As a passionate Computer Science graduate, I have a strong foundation in web development & programming. I enjoy building
            interactive & responsive web applications using modern technologies like React JS, and I am also skilled in Data Structures through Java.
            As a recent Computer Science graduate, I’m excited to apply my skills in programming languages like Java and Python to drive
            innovation in the tech industry.
          </p>

          <div className="about-skills">
            <div className="skill-bar">
              <span>HTML & CSS</span>
              <div className="bar">
                <div className="progress" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>React JS</span>
              <div className="bar">
                <div className="progress" style={{ width: "77%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>JavaScript</span>
              <div className="bar">
                <div className="progress" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>Data Structures and Algorithms (Java)</span>
              <div className="bar">
                <div className="progress" style={{ width: "87%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>Python </span>
              <div className="bar">
                <div className="progress" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>SQL</span>
              <div className="bar">
                <div className="progress" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>

          <div className="about-achievements">
            <h3>Achievements</h3>
            <ul>
              <li>Selected as one of the Top 10 teams out of 75 in the IIT Hyderabad Hackathon conducted on AI Day.</li>
              <li>Participated in 10+ Hackathons.</li>
              <li>Solved 150+ DSA, DBMS problems on LeetCode.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
