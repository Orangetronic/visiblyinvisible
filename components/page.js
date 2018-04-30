import Head         from 'next/head'
import { Fragment } from 'react'
import { title }    from "../settings"

const Page = props => (<Fragment>
  <Head>
  <title>{props.title || title}</title>
  <link rel="stylesheet" href="/static/paradroid-complete-family-webfont-full/paradroid-extrabold/webfonts/paradroid-extrabold.css" />
  <link rel="stylesheet" href="/static/paradroid-complete-family-webfont-full/paradroid-mono-light/webfonts/paradroid-mono-light.css" />
  <link rel="stylesheet" href="/static/main.css"/>
  <meta name="viewport" content="width=device-width"/>
  <meta name="viewport" content="initial-scale=1.0"/>
  </Head>
  {props.children}
</Fragment>)

export default Page