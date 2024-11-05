import React from 'react';
import styles from './Experience.module.css';

// Import images from assets
import iconImg from '../assets/images/3_2.png';
import desainTanpaJudulImg from '../assets/images/Desaintanpajudul6.png';
import image13Icon from '../assets/images/image13.png';
import image15Icon from '../assets/images/image15.png';
import image16Icon from '../assets/images/image16.png';
import image17Icon from '../assets/images/image17.png';

const Experience = () => {
  return (
    <div className={styles.experience}>
      <img className={styles.icon} alt="" src={iconImg} />
      <div className={styles.experienceItem} />
      <div className={styles.experienceInner} />
      <img className={styles.desainTanpaJudul61} alt="" src={desainTanpaJudulImg} />
      <img className={styles.image13Icon} alt="" src={image13Icon} />
      <img className={styles.image15Icon} alt="" src={image15Icon} />
      <img className={styles.image16Icon} alt="" src={image16Icon} />
      <img className={styles.image17Icon} alt="" src={image17Icon} />
      <div className={styles.designingAnEducationalContainer}>
        <p className={styles.designingAnEducational}>Designing an Educational and Agricultural Management Website Called "E-tani."</p>
      </div>
      <div className={styles.designingACertifiedContainer}>
        <p className={styles.designingAnEducational}>Designing a Certified Agricultural Education Website Called "Agrera."</p>
      </div>
    </div>
  );
};

export default Experience;
