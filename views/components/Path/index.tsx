import React from 'react'
import styles from './styles.module.scss'
//import SearchSvg from '../../../public/static/assets/svgs/search.svg'

interface TitleProps {
  title?: string
  className?: string
}

const BoilerPlate: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <div className={styles.pathContainer + ' ' + className}>
      <div className="container">
        <div className={styles.path}>
          <span>Home</span> <span>/</span> <span>Search results</span>
        </div>
      </div>
    </div>
  )
}

export default BoilerPlate
