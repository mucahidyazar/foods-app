import React from 'react'
import styles from './styles.module.scss'
import ImdbSvg from '../../../public/static/assets/svgs/imdb.svg'
import Button from '../../ui/Button'

interface TitleProps {
  data?: any
  className?: string
}

const Detail: React.FC<TitleProps> = ({ data, className }) => {
  return (
    <div className={styles.card + ' ' + className}>
      <div className={styles.cardImage}>
        <img src={data.Poster} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.infoHeader}>
          <div className={styles.infoHeaderLeft}>
            <img src={ImdbSvg} alt="" />
            <p>{data.imdbRating}</p>
          </div>
          <div className={styles.infoHeaderRight}>
            <Button name="Add to Favorites" type="nobg" />
          </div>
        </div>
        <div className={styles.infoContent}>
          <p className={styles.year}>{data.Year}</p>
          <h3 className={styles.title}>{data.Title}</h3>
          <p className={styles.description}>{data.Plot}</p>
        </div>
        <div className={styles.infoFooter}>
          {data?.Genre.split(', ').map((genre) => {
            return <Button key={genre} name={genre} type="small" />
          })}
        </div>
      </div>
    </div>
  )
}

export default Detail
