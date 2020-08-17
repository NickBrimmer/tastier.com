import React from 'react';
import styles from '../../styles.css';

const Header = () => {

  return (
    <section className={styles.header}>
      <div className={styles.navBar}>
        <ul className={styles.mainNav}>
          <li><a href="#featured" >Featured</a></li>
          <li><a href="#cuisines" >Cuisines</a></li>
          <li><a href="#about" >About</a></li>
          <li><a href="#" >Seasonal</a></li>
        </ul>
      </div>
      <div className={styles.logoBox}>
        <h2 className={styles.h1}>TASTIER</h2>
        <h3 className={styles.h3}>{'the foodie\'s spot'}</h3>
        <div className={styles.textBox}>
          <div>
            <h1 className={styles.headerText}> One Place to Find All the Tastiest Food</h1>
          </div>
          <p className={styles.searchButton}><a className={styles.mainButton} href="#">Search Recipes</a></p>
        </div>
      </div>
    </section>
  );
};

export default Header;
