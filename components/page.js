import Head         from 'next/head'
import { Fragment } from 'react'
import { title }    from "../settings"

const Page = props => (<Fragment>
  <Head>
  <title>{props.title || title}</title>
  <link rel="stylesheet" href="/static/paradroid-complete-family-webfont-full/paradroid-extrabold/webfonts/paradroid-extrabold.css" />
  <link rel="stylesheet" href="/static/paradroid-complete-family-webfont-full/paradroid-mono-light/webfonts/paradroid-mono-light.css" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
   integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
   crossorigin=""/>
  <link rel="stylesheet" href="/static/main.css"/>
  <meta name="viewport" content="width=device-width"/>
  <meta name="viewport" content="initial-scale=1.0"/>
  <script type="text/javascript" src="http://maps.stamen.com/js/tile.stamen.js?v1.3.0"></script>
  </Head>
  {props.children}
</Fragment>)

export default Page