import React from 'react'
import Button from '../Button'
import styles from './styles.module.scss'
//import SearchSvg from '../../../public/static/assets/svgs/search.svg'

interface PaginationProps {
  pagesCount?: number
  page?: string
}

const Pagination: React.FC<PaginationProps> = ({ pagesCount, page = '1' }) => {
  return (
    <div className={styles.pagination}>
      <Button name="Previous" type="pageText" />

      <Button name="1" type="pageNum" active={page === '1'} />
      {pagesCount > 1 && (
        <Button name="2" type="pageNum" active={page === '2'} />
      )}
      {pagesCount > 2 && (
        <Button name="3" type="pageNum" active={page === '3'} />
      )}

      {pagesCount > 3 && <Button name="..." type="pageNum" />}

      <Button name="Next" type="pageText" />
    </div>
  )
}

export default Pagination
