import Head from 'next/head'
import styles from './styles.module.scss'
import { withTranslation } from '../../config/i18n/index'
import { connect } from 'react-redux'
import { getProducts, setProducts } from '../../redux/actions'
import MainLayout from '../../views/layouts/Main'
import SearchBox from '../../views/components/SearchBox'
import Path from '../../views/components/Path'
import CategoryTitle from '../../views/components/CategoryTitle'
import GroupOne from '../../views/components/Groups/GroupOne'
import { useRouter } from 'next/router'

function Home({ data }): any {
  //dispatch(getProducts())

  const router = useRouter()
  const { pathname } = router
  const path = pathname.slice(1)

  return (
    <MainLayout title="Home Page">
      <Path path={path} />
      <SearchBox />
      <CategoryTitle title="Favorites" />
      {data ? (
        <GroupOne data={['1', '2', '3', '4', '5', '6']} />
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
    products: state.main.products,
  }
}

export default connect(mapStateToProps)(Home)
