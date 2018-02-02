import Document, { Head, Main, NextScript } from 'next/document'
import { renderStatic } from 'glamor/server'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return { ...page, ...styles }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <meta charset='utf-8' />
          <meta name='description' content='' />
          <meta name='keywords' content='' />
          <meta name='viewport' content='width=device-width' />
          <meta property='fb:admins' content='100001282186656' />
          <meta property='og:title' content='ZicklePop' />
          <meta property='og:description' content='' />
          <meta property='og:url' content='https://zicklepop.com' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='https://zicklepop.com/static/facebook-open-graph.png' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <link rel='icon' href='https://zicklepop.com/static/favicon.ico' />
          <link rel='apple-touch-icon' href='https://zicklepop.com/static/apple-touch-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
