import React from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
  name: string
  type?: string
  className?: any
  firstIcon?: any
  lastIcon?: any
}

const Button = ({
  name,
  type,
  className,
  firstIcon,
  lastIcon,
}: ButtonProps) => {
  const calcType = () => {
    if (type === 'circle') {
      return styles.circle
    } else if (type === 'small') {
      return styles.small
    } else if (type === 'nobg') {
      return styles.nobg
    } else {
      return ''
    }
  }

  return (
    <div className={styles.button + ' ' + calcType() + ' ' + className}>
      {firstIcon && <img src={firstIcon} alt="" />}
      {name}
      {lastIcon && <img src={lastIcon} alt="" />}
    </div>
  )
}

export default Button
