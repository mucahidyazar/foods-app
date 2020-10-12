import React from 'react'
import styles from './styles.module.scss'
import MovieCardOne from '../../../components/Cards/MovieCardOne'
import Pagination from '../../../ui/Pagination'
//import SearchSvg from '../../../public/static/assets/svgs/search.svg'

interface TitleProps {
  data?: any
}

const GroupOne: React.FC<TitleProps> = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.searchResults}>
        {data.map((movie) => {
          return <MovieCardOne key={movie.imdbID} movie={movie} />
        })}
      </div>
    </div>
  )
}

export default GroupOne
