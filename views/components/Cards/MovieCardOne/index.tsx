import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Button from '../../../ui/Button'
import styles from './styles.module.scss'
import heartLine from '../../../../public/static/assets/svgs/heart-line.svg'
import imdbLogo from '../../../../public/static/assets/svgs/imdb.svg'
import Link from 'next/link'

interface TitleProps {
  movie?: any
}

const MovieCardOne: React.FC<TitleProps> = ({ movie }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(
        `http://www.omdbapi.com/?i=${movie.imdbID}&type=${movie.Type}&y=${movie.Year}&plot=full&apikey=3f2c84e8`
      )
      setData(res.data)
    }
    fetchData()
  }, [])

  return (
    <Link
      href={`/detail?id=${movie.imdbID}&type=${movie.Type}&y=${movie.Year}`}
    >
      <a className={styles.card}>
        <div className={styles.cardHeader}>
          <img className={styles.cardImage} src={movie.Poster} alt="" />
          <div className={styles.cardHeaderFooter}>
            <div className={styles.cardGenres}>
              {data?.Genre.split(', ').map((genre) => {
                return <Button key={genre} name={genre} type="small" />
              })}
            </div>
            <div className={styles.cardIcon}>
              <img src={heartLine} alt="" className={styles.cardIconImg} />
            </div>
          </div>
        </div>
        <div className={styles.cardInfo}>
          <img src={imdbLogo} alt="" className={styles.cardInfoLogo} />{' '}
          <span className={styles.cardPoint}>
            {data ? data.imdbRating : 'N/A'}
          </span>
        </div>
        <p className={styles.cardYear}>{movie.Year}</p>
        <p className={styles.cardTitle}>{movie.Title}</p>
        <p className={styles.cardDescription}>
          {data
            ? data.Plot
            : 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'}
        </p>
      </a>
    </Link>
  )
}

export default MovieCardOne
