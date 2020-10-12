import React from 'react'
import styles from './styles.module.scss'
import SearchSvg from '../../../public/static/assets/svgs/search.svg'
import Link from 'next/link'
import Button from '../Button'
import { useRouter } from 'next/router'

const SearchBox = ({
  className = '',
  value,
  setValue,
  year = '',
  type = '',
}) => {
  const router = useRouter()

  return (
    <div className={styles.search + ' ' + className}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter a movie name here"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <Button
        type="nobg"
        className={styles.button}
        disabled={!value.length}
        onClick={() =>
          router.push(
            `/search` +
              (value && (value !== '' ? `?value=${value}` : 'a')) +
              (year && (year !== '' ? `&year=${year}` : '')) +
              (type && (type !== '' ? `&type=${type}` : ''))
          )
        }
      >
        <img src={SearchSvg} alt="" className={styles.logo} />
      </Button>
    </div>
  )
}

export default SearchBox
