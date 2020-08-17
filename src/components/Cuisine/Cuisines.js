import React from 'react';
import styles from '../../styles.css';

const Cuisines = () => {

  return (
    <section id="cuisines" className={styles.cuisineSection}>

      <ul className={styles.cuisineShowcase}>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src="src/assets/italian.jpg" />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src="src/assets/something.jpg" />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src="src/assets/steak.jpg" />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src="src/assets/pasta.jpg" />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
      </ul>
      <ul className={styles.cuisineShowcase}>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src="src/assets/vegetarian.jpg" />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src="src/assets/breakfast.jpg" />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src="src/assets/stuff.jpg" />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src="src/assets/vegetarian1.jpg" />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Cuisines;
