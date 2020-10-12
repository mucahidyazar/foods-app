import React from 'react'
import Button from '../../../ui/Button'
import styles from './styles.module.scss'
import heartLine from '../../../../public/static/assets/svgs/heart-line.svg'
import imdbLogo from '../../../../public/static/assets/svgs/imdb.svg'
import Link from 'next/link'

interface TitleProps {
  title?: string
}

const BoilerPlate: React.FC<TitleProps> = ({ title }) => {
  return (
    <Link href="/detail">
      <a className={styles.card}>
        <div className={styles.cardHeader}>
          <img
            className={styles.cardImage}
            src="https://source.unsplash.com/random/270x386"
            alt=""
          />
          <div className={styles.cardHeaderFooter}>
            <Button name="Biography" type="small" />
            <div className={styles.cardIcon}>
              <img src={heartLine} alt="" className={styles.cardIconImg} />
            </div>
          </div>
        </div>
        <div className={styles.cardInfo}>
          <img src={imdbLogo} alt="" className={styles.cardInfoLogo} />{' '}
          <span className={styles.cardPoint}>8.8</span>
        </div>
        <p className={styles.cardYear}>2019</p>
        <p className={styles.cardTitle}>Be your self and never act like a</p>
        <p className={styles.cardDescription}>
          The aging patriarch of an organized crime dynasty transfers control of
          his clandestine empire to his reluctant son.
        </p>
      </a>
    </Link>
  )
}

export default BoilerPlate
