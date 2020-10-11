import React from 'react'
import styles from './styles.module.scss'
import Title from './Title'
import Card from './Card'

interface TitleProps {
  title?: string
}

const Catalog: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className={styles.catalog}>
      <Title title="Popular Movies" />
      <div className={styles.cards}>
        <div className={styles.cardsOverlayLeft}></div>
        <div className={styles.cardsOverlayRight}></div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Catalog
