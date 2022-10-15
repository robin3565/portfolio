import '../styles/globals.css'
import '../styles/markdown.css'
import { Layout } from '../components/@공통/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
