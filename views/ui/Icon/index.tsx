import React from 'react'
import styles from './styles.module.scss'
//import SearchSvg from '../../../public/static/assets/svgs/search.svg'

interface TitleProps {
  style?: any
  icon?: any
  className?: any
}

const Icon: React.FC<TitleProps> = ({ style, icon, className }) => {
  return (
    <i style={style} className={`${styles.icon} icon-${icon} ${className}`} />
  )
}

export default Icon
