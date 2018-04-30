let MapRender

if (typeof window !== 'undefined') {
  const { Map, TileLayer } = require("react-leaflet")
  MapRender = props => (<Map {...props}>
    <TileLayer
      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      url="//stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
    />
  </Map>)
} else {
  MapRender = () => null
}

export default MapRender