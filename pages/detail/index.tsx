import styles from './styles.module.scss'
import { withTranslation } from '../../config/i18n/index'
import { connect } from 'react-redux'
import { getProducts, setProducts } from '../../redux/actions'
import MainLayout from '../../views/layouts/Main'
import SearchBox from '../../views/components/SearchBox'
import Path from '../../views/components/Path'
import DetailComp from '../../views/components/Detail'
import CategoryTitle from '../../views/components/CategoryTitle'
import GroupOne from '../../views/components/Groups/GroupOne'
import Catalog from '../../views/components/Catalog'

function Detail({ data }): any {
  return (
    <MainLayout title="Detail Page">
      <Path />
      {data.Genre && (
        <div className="container">
          <DetailComp data={data} className={styles.content} />
        </div>
      )}
      <Catalog />
    </MainLayout>
  )
}

export async function getServerSideProps(ctx) {
  const id = ctx.query.id
  const type = ctx.query.type
  const year = ctx.query.year

  const res = await fetch(
    `http://www.omdbapi.com/?i=${id}&type=${type}&y=${year}&plot=full&apikey=3f2c84e8`
  )
  const data = await res.json()

  if (!data.Genre) {
    ctx.res.setHeader('location', '/404')
    ctx.res.statusCode = 302
    ctx.res.end()
  }

  return { props: { data } }
}

const mapStateToProps = (state) => {
  return {
    products: state.main.products,
  }
}

export default connect(mapStateToProps)(Detail)
