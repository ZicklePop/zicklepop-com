import Layout from '../components/layout'
import Logo from '../components/logo'

const cx = {
  main: 'vh-75 dt w-100',
  container: 'dtc v-mid tc',
  article: 'measure-narrow center sans-serif f3 fw2 ph2'
}

const Index = () => (
  <Layout className={cx.main}>
    <div className={cx.container}>
      <article className={cx.article}>
        <Logo />
      </article>
    </div>
  </Layout>
)

export default Index
