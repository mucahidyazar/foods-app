import React from 'react'
import styles from './styles.module.scss'
import Input from '../../ui/Input'

const Nav = () => (
  <nav className={styles.nav}>
    <div className="container">
      <div className={styles.navContainer}>
        <div className={styles.navLeft}>
          <div className={styles.logo}>
            Movie<span>Up</span>
          </div>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>Favorite</li>
          </ul>
        </div>
        <Input />
      </div>
    </div>
  </nav>
)

export default Nav
