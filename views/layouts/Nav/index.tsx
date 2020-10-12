import React from 'react'
import styles from './styles.module.scss'
import Input from '../../ui/Input'
import Link from 'next/link'

const Nav = () => (
  <div className="container" style={{ height: 'min-content' }}>
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              Movie<span>Up</span>
            </a>
          </Link>
        </div>
        <ul className={styles.navItems}>
          <li className={styles.navItem + ' ' + styles.navItemActive}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/favorites">
              <a>Favorites</a>
            </Link>
          </li>
        </ul>
      </div>
      <Input className={styles.navSearch} />
    </nav>
  </div>
)

export default Nav
