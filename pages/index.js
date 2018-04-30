import styled    from "styled-components"
import Page      from "../components/page"
import { title } from "../settings"
import MapRender from "../components/map"

const MegaHeading = styled.h1`
  font-size: 8.5vw;
  margin-top: auto;
  line-height: 8.5vw;
  background: linear-gradient(
    to top right,
    #D68A9E,
    #8985A4
  );
  border-bottom-right-radius: 3px;
  color: rgba(255,255,255,1.0);
  padding: 1rem;
  margin-bottom: -1rem;
`

const TopNavs = styled.nav`
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  a {
    text-align: center;
    flex: 1 1 120px;
    max-width: 150px;
    height: 100%;
    background: black;
    color: white;
    line-height: 2rem;
    text-decoration: none;
    margin-left: 1px;
    &:hover {
      color: #61DDF4;
      background: #444;
    }
  }
`

const gutter = 2

const Grid = styled.div`
  padding: 0;
  max-width: 100%;
  height: calc(100vh - 2rem);
  @media screen and (min-width: 850px) {
    display: grid;
  }
  grid-gap: ${gutter}rem;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr); 
  > div { 
    padding: ${gutter}rem;
  }
  @media screen and (max-width:800px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(150px);
    grid-gap: ${gutter / 2}rem;
    > div {
      padding: ${gutter / 2}rem;
    }
  }
`

const Headbox = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 4;
  align-self: bottom;
  display: flex;
  @media screen and (max-width:800px) {
    grid-column: 1 / 5;
    grid-row: 1 / 4;
    align-self: center;
    justify-content: flex-end;
  }
`

const Sidebox = styled.div`
  grid-column: 4 / 8;
  grid-row: 1 / 4;
  align-self: bottom;
  background: white;
  display: flex;
  > article {
    margin-top: auto;
  }
  @media screen and (max-width:800px) {
    grid-column: 1 / 5;
    grid-row: 4 / 7;
  }
  @media screen and (min-width: 1800px) {
    > article {
      column-count: 2;
      font-size: 1.4rem;
      column-gap: ${gutter}rem;
      column-rule: #eee 1px solid;
    }
  }
`
const Mapbox = styled.div`
  min-height: 500px;
  grid-column: 3 / 8;
  grid-row: 4 / 8;
  align-self: stretch;
  background: #eee;
  padding: 0 !important;
  .leaflet-container {
    width: 100%;
    height: 100%;
    min-height:500px;
    border-top-left-radius: 3px;
    overflow: hidden;
  }
`

const Headshot = styled.div`
  grid-column: 1 / 3;
  grid-row: auto / span 2;
  align-self: top;
  background: #eee;
  padding: 0 !important;
  background-image: url('/static/images/headshot.gif');
  background-position: center center;
  background-size: cover;
`

const Blurb = styled.div`
  grid-column: 1 / 3;
  grid-row: auto / span 2;
  align-self: top;
`




export default () => (<Page>
  <TopNavs>
    <a href="#">Stories</a>
    <a href="#">Resources</a>
  </TopNavs>
  <Grid>
    <Headbox>
    <MegaHeading>{title}</MegaHeading>
    </Headbox>
    <Sidebox>
      <article alt="site description">
        <p>
        Lorem ipsum dolor sit amet, cu cum quot vocibus, nam dolor torquatos ea. Eam impedit maiorum scripserit ei, case vivendo ne ius. Usu ea sumo iudico quaeque, noster cetero prompta ut est, ipsum simul civibus sea ut. Dolores fastidii mel ex, usu integre intellegam at, mucius oportere pro ad.
        </p>
        <p>
        Fastidii recteque adolescens no vel, ea eam ferri modus. Sit unum dicant docendi ei. Te his zril decore mollis, ullum dolorum definitionem has ei. Virtute instructior in nam.
        </p>
        <p>
        Adhuc ipsum perfecto vel id. Eum sensibus repudiandae deterruisset ex, quot civibus cu eum. Equidem moderatius has ad, ex mutat dolorem sit, ius ex nostrum albucius suscipit.
        </p>
      </article>
    </Sidebox>
    <Headshot />
    <Blurb>
      <p>Name: Somebody</p>
      <p>Location: Someplace</p>
      <p>Blurb: some smol blurb</p>
    </Blurb>
    <Mapbox>
      <MapRender center={[51.5022, -0.119]} zoom={13} />
    </Mapbox>
  </Grid>
</Page>)
