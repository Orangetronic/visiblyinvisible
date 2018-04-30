let MapRender

if (typeof window !== 'undefined') {
  const { Map, TileLayer, CircleMarker, Marker, Popup } = require("react-leaflet")
  MapRender = props => (<Map {...props}>
    <TileLayer
      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      url="//stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
    />
    <Marker position={props.center}>
          <Popup>
            <div>
              <img src="/static/images/headshot.gif" width="100%" style={{marginBottom: "1rem"}} />
              <h2>Somebody</h2>
              <p>Smol story description or something</p>
            </div>
          </Popup>
    </Marker>
  </Map>)
} else {
  MapRender = () => null
}

export default MapRender