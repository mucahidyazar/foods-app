import { spawn } from 'child_process'
import React from 'react'
import styles from './styles.module.scss'
//import SearchSvg from '../../../public/static/assets/svgs/search.svg'

interface TitleProps {
  title?: string
  text?: string
}

const BoilerPlate: React.FC<TitleProps> = ({ title, text }) => {
  return (
    <div className="container">
      <div className={styles.categoryTitle}>
        <span>{title}</span> {text && <span>{text}</span>}
      </div>
    </div>
  )
}

export default BoilerPlate
