import React from 'react'
import styles from './styles.module.scss'
//import SearchSvg from '../../../public/static/assets/svgs/search.svg'

interface TitleProps {
  title?: string
  path?: string
  className?: string
}

const BoilerPlate: React.FC<TitleProps> = ({ title, path, className }) => {
  return (
    <div className={styles.pathContainer + ' ' + className}>
      <div className="container">
        <div className={styles.path}>
          <span>Home</span> <span>/</span>{' '}
          <span>{path ? path : 'Search results'}</span>
        </div>
      </div>
    </div>
  )
}

export default BoilerPlate
