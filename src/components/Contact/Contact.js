import React from 'react';
import styles from './Contact.module.css';

// Import images from assets
import bg4Icon from '../assets/images/bg4.png';
import contactIcon from '../assets/images/contact.png';
import profileIcon from '../assets/images/profile.png';
import maskGroupIcon1 from '../assets/images/Mask group.png';
import maskGroupIcon from '../assets/images/Mask group1.png';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <img className={styles.bg4Icon} alt="" src={bg4Icon} />
      <img className={styles.contactIcon} alt="" src={contactIcon} />
      <img className={styles.profileIcon} alt="" src={profileIcon} />
      
      <div className={styles.letsHireMeIveContainer}>
        <p className={styles.letsHireMeIveDesignedS}>
          <b className={styles.letsHireMe}>Let's Hire Me!</b>
          <br />
          I’ve designed some cool projects like "E-tani" and "Agrera," where I focus on creating user-friendly websites
          that make learning about agriculture fun and accessible.
        </p>

        <p className={styles.letsHireMeIveDesignedS}>
          <b className={styles.letsHireMe}>What I Bring to the Table</b>
          <br />
          I know my way around HTML and have a knack for UI/UX design. I love diving into web development and user research to make sure every site I work on is not just pretty but also super intuitive and effective.
        </p>

        <p className={styles.letsHireMeIveDesignedS}>
          <b>Why Pick Me?</b>
          <br />
          I’m all about fresh ideas and a can-do attitude. I thrive in collaborative environments where I can learn and contribute. With my background in education and tech, I’m ready to take on challenges and create awesome digital experiences.
        </p>

        <p className={styles.letsHireMeIveDesignedS}>
          <b className={styles.letsHireMe}>Let’s Connect!</b>
          <br />
          I’m excited about the possibility of working together to create amazing projects.
        </p>
      </div>

      <div className={styles.emailQxjejengmailcom}>
        <b>Email</b>
        <span>: Qxjejen@gmail.com</span>
      </div>
      
      <b className={styles.instagramJenniewagneroux}>Instagram: Jenniewagneroux</b>
      
      <img className={styles.maskGroupIcon} alt="" src={maskGroupIcon} />
      <img className={styles.maskGroupIcon1} alt="" src={maskGroupIcon1} />
    </div>
  );
};

export default Contact;
