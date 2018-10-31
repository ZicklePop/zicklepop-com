import React from 'react'
import Head from 'next/head'
import { insertRule, css, style, rehydrate } from 'glamor'
import { tachyons, reset, wrap } from 'glamor-tachyons'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}
reset({ insertRule })
const t = (classNames) => css(tachyons(classNames))

const styles = {
  dotcom: style({
    '&::after': {
      content: '.com',
      color: '#AAA'
    }
  }),
  bullet: style({
    '> li::before': {
      content: '*',
      color: '#AAA',
      width: '1rem',
      display: 'inline-block'
    }
  }),
  fun: style({ color: '#69b200' }),
  pro: style({ color: '#00aeff' })
}

const classNames = wrap({
  main: 'vh-100 dt w-100',
  container: 'dtc v-mid tc',
  article: 'measure-narrow center sans-serif near-black f3 fw2 ph2',
  h1: 'lh-title fw2 f2',
  ul: 'list pl0 tl',
  li: 'lh-title mv2',
  a: 'link underline',
  hr: 'b--none',
  img: 'br-100 h5 w5 center dib ma3'
}, css)

export default () => (
  <main className={classNames.main}>
    <Head>
      <title>ZicklePop</title>
    </Head>
    <div className={classNames.container}>
      <article className={classNames.article}>
        <img
          className={classNames.img}
          src={'/static/uglytarantula-commission.jpg'}
          title={'commission by @uglytarantula'}
        />
        <h1 className={classNames.h1}>
          <a
            {...styles.dotcom}
            className={t('no-underline near-black')}
            href='/'
          >
            {'ZicklePop'}
          </a>
        </h1>

        <ul {...styles.bullet} className={classNames.ul}>
          <li className={classNames.li}>
            {'Mastodons on '}
            <a
              {...styles.pro}
              className={classNames.a}
              rel='me'
              href='https://nyan.lol/@zicklepop'
            >
              {'Nyan.lol'}
            </a>
          </li>
          <li className={classNames.li}>
            {'Tweets on '}
            <a
              {...styles.fun}
              className={classNames.a}
              href='https://twitter.com/ZicklePop'
            >
              {'Twitter'}
            </a>
          </li>
          <li className={classNames.li}>
            {'Instas on '}
            <a
              {...styles.fun}
              className={classNames.a}
              href='https://instagram.com/ZicklePop'
            >
              {'Instagram'}
            </a>
          </li>
        </ul>
      </article>
    </div>
  </main>
)
