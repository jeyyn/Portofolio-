import React from 'react';
import styles from './Skills.module.css';

import bg2 from '../assets/images/bg2.png';
import image1 from '../assets/images/image1.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';
import desainTanpaJudul from '../assets/images/Desaintanpajudul4.png';

const Skills = () => {
  return (
    <div className={styles.skills}>
      <img className={styles['bg2-icon']} alt="Background Design" src={bg2} />
      <div className={styles['skills-item']} />
      <div className={styles['skills-inner']} />
      <div className={styles['rectangle-div']} />
      <div className={styles['skills-child1']} />
      <img className={styles['image1-icon']} alt="Skill Icon 1" src={image1} />
      <div className={styles.figma}>Figma</div>
      <div className={styles.css}>CSS</div>
      <div className={styles.html}>HTML</div>
      <div className={styles.c}>C++</div>
      <img className={styles['image4-icon']} alt="Skill Icon 4" src={image4} />
      <img className={styles['image5-icon']} alt="Skill Icon 5" src={image5} />
      <img className={styles['image6-icon']} alt="Skill Icon 6" src={image6} />
      <img className={styles['desain-tanpa-judul41']} alt="Desain Tanpa Judul" src={desainTanpaJudul} />
      <div className={styles['visual-design-composition-container']}>
        <ul className={styles['visual-design-composition-co']}>
          <li className={styles['visual-design-composition']} i>Visual Design: Composition, color, typography.</li>
          <li className={styles['visual-design-composition']}>Prototyping</li>
          <li className={styles['visual-design-composition']}>User Research: Surveys, interviews</li>
          <li className={styles['visual-design-composition']}>Interaction Design</li>
          <li className={styles['visual-design-composition']}>Animations, micro-interactions.</li>
        </ul>
    </div>
      <div className={styles['understanding-of-html-container']}>
        <ul className={styles['visual-design-composition-co']}>
          <li className={styles['visual-design-composition']}>Understanding of HTML</li>
          <li className={styles['visual-design-composition']}>I can create well-structured content that enhances user experience.</li>
        </ul>
      </div>
      <div className={styles['styling-expertise-container']}>
        <ul className={styles['visual-design-composition-co']}>
          <li className={styles['visual-design-composition']}>Styling Expertise: I can create visually appealing interfaces using CSS to enhance overall user experience.</li>
          <li className={styles['visual-design-composition']}>Interactive Elements</li>
          <li className={styles['visual-design-composition']}>I implement CSS animations and transitions to create engaging user interactions.</li>
        </ul>
      </div>
      <div className={styles['cross-platform-development-container']}>
        <ul className={styles['visual-design-composition-co']}>
        <li className={styles['visual-design-composition']}>Cross-Platform Development: Understanding C++ allows me to consider how designs can be implemented in applications across different platforms.</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
