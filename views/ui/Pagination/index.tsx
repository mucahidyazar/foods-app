import React from 'react'
import Button from '../Button'
import styles from './styles.module.scss'
//import SearchSvg from '../../../public/static/assets/svgs/search.svg'

interface TitleProps {
  title?: string
}

const BoilerPlate: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className={styles.pagination}>
      <Button name="Previous" type="pageText" />

      <Button name="1" type="pageNum" />
      <Button name="2" type="pageNum" />
      <Button name="3" type="pageNum" />

      <Button name="..." type="pageNum" />

      <Button name="Next" type="pageText" />
    </div>
  )
}

export default BoilerPlate
