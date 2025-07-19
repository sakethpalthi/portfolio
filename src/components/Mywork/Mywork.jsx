import React from 'react';
import './Mywork.css';
import theme from '../../assets/theme_pattern.svg';
import HandImg from '../../assets/HandImg.webp';
import attendanceImg from '../../assets/SmartAttendance.png';

const Mywork = () => {
  const projects = [
    {
      img: HandImg,
      title: 'Sign Language Recognition tool',
      desc: 'Detects the hand signs and convert it into text.',
      link: 'https://github.com/sakethpalthi/Signlanguage-Recognition'
    },
    {
      img: attendanceImg,
      title: 'Smart Attendance System',
      desc: 'Face recognition-based automated attendance system with database logging.',
      link: 'https://github.com/sakethpalthi/Smart_Attendence'
    }
  ];

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My <span>Latest Work</span></h1>
        <img src={theme} alt="theme design" />
      </div>

      <div className="mywork-container">
        {projects.map((project, index) => (
          <div className="mywork-card" key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.img}
                alt={project.title}
                style={{ cursor: 'pointer' }}
              />
            </a>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mywork;
