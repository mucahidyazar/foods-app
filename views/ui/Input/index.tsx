import React from 'react'
import styles from './styles.module.scss'
import SearchSvg from '../../../public/static/assets/svgs/search.svg'

const SearchBox = ({ className = '' }) => {
  return (
    <div className={styles.search + ' ' + className}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter a movie name here"
      />
      <img src={SearchSvg} alt="" className={styles.logo} />
    </div>
  )
}

export default SearchBox
