import React from 'react'
import styles from './styles.module.scss'
import MovieCardOne from '../../../components/Cards/MovieCardOne'
import Pagination from '../../../ui/Pagination'
//import SearchSvg from '../../../public/static/assets/svgs/search.svg'

interface TitleProps {
  data?: any
}

const BoilerPlate: React.FC<TitleProps> = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.searchResults}>
        {data.map((el, index) => {
          return <MovieCardOne key={index} />
        })}
      </div>
      <Pagination />
    </div>
  )
}

export default BoilerPlate
