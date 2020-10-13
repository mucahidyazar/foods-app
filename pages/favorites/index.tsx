import styles from './styles.module.scss'
import { withTranslation } from '../../config/i18n/index'
import { connect } from 'react-redux'
import MainLayout from '../../views/layouts/Main'
import SearchBox from '../../views/components/SearchBox'
import Path from '../../views/components/Path'
import CategoryTitle from '../../views/components/CategoryTitle'
import GroupOne from '../../views/components/Groups/GroupOne'
import { useRouter } from 'next/router'
import { getFavorites } from '../../redux/actions'
import { useEffect, useState } from 'react'

function Home({ dispatch, favorites }): any {
  useEffect(() => {
    dispatch(getFavorites())
  }, [])

  const router = useRouter()
  const { pathname } = router
  const path = pathname.slice(1)

  return (
    <MainLayout title="Home Page">
      <Path path={path} />
      <SearchBox />
      <CategoryTitle title="Favorites" />
      {favorites && favorites.length ? (
        <GroupOne data={favorites} />
      ) : (
        <div className={'container' + ' ' + styles.noContent}>
          <h4>There is no content. You can search and add some movies.</h4>
        </div>
      )}
    </MainLayout>
  )
}

Home.getInitialProps = async () => {
  return { namespacesRequired: ['common'] }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.main.favorites,
  }
}

export default connect(mapStateToProps)(Home)
