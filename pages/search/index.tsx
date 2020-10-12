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

function Home({ dispatch }): any {
  dispatch(getProducts())

  return (
    <MainLayout title="Home Page">
      <Path />
      <SearchBox />
      <CategoryTitle title="Search results" text="godfather" />
      <GroupOne data={['1', '2', '3', '4', '5', '6']} />
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
