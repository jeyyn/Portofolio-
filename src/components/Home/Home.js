import React from 'react';
import './Home.css';

import icon from '../assets/images/5_1.png';
import bg1Icon from '../assets/images/bg1.png';
import profileIcon from '../assets/images/profile.png';
import jenIcon from '../assets/images/jen.png';
import nieIcon from '../assets/images/nie.png';

const Home = () => {
  return (
    <div className="home">
      <img className="icon" alt="" src={icon} />
      <img className="bg1-icon" alt="" src={bg1Icon} />
      <img className="profile-icon" alt="" src={profileIcon} />
      <img className="jen-icon" alt="" src={jenIcon} />
      <img className="nie-icon" alt="" src={nieIcon} />
      <div className="hello-i-am">Hello, I am</div>
      <b className="jennifer-patterson">Jennifer Patterson</b>
      <div className="my-passion-lies-container">
        <p className="my-passion-lies">
          My passion lies in UI/UX design, where I aim to create intuitive and engaging user experiences.
        </p>
        <p className="my-passion-lies">
          I look forward to utilizing my skills in real-world projects that contribute to innovative design solutions and improve overall user satisfaction.
        </p>
      </div>
      <div className="undergraduate-degree">Undergraduate degree in Information Systems</div>
    </div>
  );
};

export default Home;
