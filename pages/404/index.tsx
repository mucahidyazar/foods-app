import styles from './styles.module.scss'
import { connect } from 'react-redux'
import MainLayout from '../../views/layouts/Main'

function NotFound({ data }): any {
  return (
    <MainLayout title="404">
      <div className={styles.notFound}>
        <img style={{ width: 500 }} src="static/assets/gif/404.gif" alt="" />
      </div>
    </MainLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.main.products,
  }
}

export default connect(mapStateToProps)(NotFound)
