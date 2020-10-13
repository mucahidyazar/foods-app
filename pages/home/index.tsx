import { withTranslation } from '../../config/i18n/index'
import { connect } from 'react-redux'
import MainLayout from '../../views/layouts/Main'
import Header from '../../views/components/Header'
import Catalog from '../../views/components/Catalog'

function Home({ dispatch }): any {
  return (
    <MainLayout title="Home Page">
      <Header />
      <Catalog />
    </MainLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.main.products,
  }
}

export default connect(mapStateToProps)(Home)
