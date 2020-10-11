import React from 'react'
import styles from './styles.module.scss'

const SearchBox = ({ label, className }) => {
  return (
    <div className={styles.selectBox + ' ' + className}>
      <p className={styles.selectBoxText}>{label}</p>
      <div
        className={styles.selectBoxIcon + ' ' + styles.selectBoxIconActive}
      ></div>
    </div>
  )
}

export default SearchBox
