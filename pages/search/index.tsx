import fetch from 'isomorphic-unfetch'
import styles from './styles.module.scss'
import { withTranslation } from '../../config/i18n/index'
import { connect } from 'react-redux'
import { getProducts, setProducts } from '../../redux/actions'
import MainLayout from '../../views/layouts/Main'
import SearchBox from '../../views/components/SearchBox'
import Path from '../../views/components/Path'
import CategoryTitle from '../../views/components/CategoryTitle'
import GroupOne from '../../views/components/Groups/GroupOne'
import Pagination from '../../views/ui/Pagination'
import { useRouter } from 'next/router'

function Home({ data }): any {
  const router = useRouter()
  const { query } = router

  if (!query.value) {
    router.push('/404')
  }

  return (
    <MainLayout title="Home Page">
      <Path />
      <SearchBox />
      <CategoryTitle title="Search results" text={query.value} />
      {query ? (
        <GroupOne data={data.Search} />
      ) : (
        <div>There is no result with ''</div>
      )}

      <Pagination
        page={query.page}
        pagesCount={data.totalResults / data.Search.length}
      />
    </MainLayout>
  )
}

export async function getServerSideProps(ctx) {
  const value = ctx.query.value
  const type = ctx.query.type
  const page = ctx.query.page
  const year = ctx.query.year

  const res = await fetch(
    `http://www.omdbapi.com/?s=` +
      (value && (value !== '' ? `${value}` : 'a')) +
      (year ? (year !== '' ? `&y=${year}` : '') : '') +
      (page ? (page !== '' ? `&page=${page}` : '&page=1') : '&page=1') +
      (type ? (type !== '' ? `&type=${type}` : '') : '') +
      `&apikey=3f2c84e8`
  )
  const data = await res.json()

  return { props: { data } }
}

const mapStateToProps = (state) => {
  return {
    products: state.main.products,
  }
}

export default connect(mapStateToProps)(Home)
