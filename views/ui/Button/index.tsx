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
  return (
    <div
      className={
        styles.button +
        ' ' +
        (type && (type === 'circle' ? styles.circle : styles.small)) +
        ' ' +
        className
      }
    >
      {firstIcon && <img src={firstIcon} alt="" />}
      {name}
      {lastIcon && <img src={lastIcon} alt="" />}
    </div>
  )
}

export default Button
