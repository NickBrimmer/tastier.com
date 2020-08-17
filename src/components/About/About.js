import React from 'react';
import styles from '../../styles.css'

const About = () => {

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.clearfix}></div>
      <h2 className={styles.aboutText}>About Us</h2>
      <h3 className={styles.aboutBeginning}>{`'Tastier' is about the finer things in life...`}</h3>
      <p className={styles.aboutExplanation}>{`One day, Nick was sitting in his home contemplating the wonderful things of life. He thought about how wonderful food could be and all he\'d learned. He said, If only everyone else could know all that I do about food!`}</p>

    </section>
  );
};

export default About;
