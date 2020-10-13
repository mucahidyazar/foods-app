import React from 'react'
import styles from './styles.module.scss'
import Title from './Title'
import Card from './Card'
import arrowLeft from '../../../public/static/assets/svgs/arrow-left.svg'
import arrowRight from '../../../public/static/assets/svgs/arrow-right.svg'
import Icon from '../../ui/Icon'

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
        <div className={styles.cardsArrowLeft}>
          <Icon icon="arrow-left" />
        </div>
        <div className={styles.cardsArrowRight}>
          <Icon icon="arrow-right" />
        </div>
        <Card className={styles.card} />
        <Card className={styles.card} />
        <Card className={styles.card} />
      </div>
    </div>
  )
}

export default Catalog
