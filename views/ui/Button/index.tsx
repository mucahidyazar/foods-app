import React from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
  name?: string
  type?: string
  className?: any
  firstIcon?: any
  lastIcon?: any
  onClick?: any
  active?: boolean
  disabled?: boolean
  children?: React.ReactElement
}

const Button = ({
  name,
  children,
  type,
  className,
  firstIcon,
  lastIcon,
  onClick,
  active,
  disabled,
}: ButtonProps) => {
  const calcType = () => {
    if (type === 'circle') {
      return styles.circle
    } else if (type === 'small') {
      return styles.small
    } else if (type === 'nobg') {
      return styles.nobg
    } else if (type === 'pageText') {
      return styles.pageText
    } else if (type === 'pageNum') {
      return styles.pageNum
    } else {
      return ''
    }
  }

  return (
    <button
      className={
        styles.button +
        ' ' +
        calcType() +
        ' ' +
        className +
        ' ' +
        (active ? styles.active : '') +
        ' ' +
        (disabled ? styles.disabled : '')
      }
      onClick={onClick ? onClick : () => {}}
      disabled={disabled}
    >
      {firstIcon && <img src={firstIcon} alt="" />}
      {name || children}
      {lastIcon && <img src={lastIcon} alt="" />}
    </button>
  )
}

export default Button
