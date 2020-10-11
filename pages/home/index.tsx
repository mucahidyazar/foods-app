import Head from 'next/head'
import axios from 'axios'
import { withTranslation } from '../../config/i18n/index'
import { connect } from 'react-redux'
import { getProducts, setProducts } from '../../redux/actions'
import MainLayout from '../../views/layouts/Main'
import Header from '../../views/components/Header'

function Home({ dispatch }): any {
  dispatch(getProducts())

  return (
    <MainLayout title="Home Page">
      <Header />
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
