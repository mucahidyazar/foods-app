import Head from 'next/head'
import styles from './styles.module.scss'
import { withTranslation } from '../../config/i18n/index'
import { connect } from 'react-redux'
import { getProducts, setProducts } from '../../redux/actions'
import MainLayout from '../../views/layouts/Main'
import SearchBox from '../../views/components/SearchBox'
import Path from '../../views/components/Path'
import Detail from '../../views/components/Detail'
import CategoryTitle from '../../views/components/CategoryTitle'
import GroupOne from '../../views/components/Groups/GroupOne'
import Catalog from '../../views/components/Catalog'

function Home({ dispatch }): any {
  dispatch(getProducts())

  return (
    <MainLayout title="Home Page">
      <Path />
      <div className="container">
        <Detail className={styles.content} />
      </div>
      <Catalog />
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
