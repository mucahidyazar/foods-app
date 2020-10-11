import React from 'react'
import styles from './styles.module.scss'
//import SearchSvg from '../../../public/static/assets/svgs/search.svg'

interface TitleProps {
  title?: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="container">
      <div className={styles.title}>
        <h3 className={styles.titleLeft}>{title}</h3>
        <p className={styles.titleRight}>View More</p>
      </div>
    </div>
  )
}

export default Title
