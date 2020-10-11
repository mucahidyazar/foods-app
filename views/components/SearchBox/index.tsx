import React from 'react'
import styles from './styles.module.scss'
import SelectBox from '../../ui/SelectBox'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import SearchSvg from '../../../public/static/assets/svgs/arrow-right.svg'

const BoilerPlate = () => {
  return (
    <div className={styles.searchBox}>
      <SelectBox label="Year" className={styles.searchBoxYear} />
      <SelectBox label="Type" className={styles.searchBoxType} />
      <Input className={styles.searchBoxInput} />
      <Button
        name="Search"
        lastIcon={SearchSvg}
        className={styles.searchBoxButton}
      />
    </div>
  )
}

export default BoilerPlate
