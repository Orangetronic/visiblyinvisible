import styled    from "styled-components"
import Page      from "../components/page"
import { title } from "../settings"

const MegaHeading = styled.h1`
  font-size: 8.5vw;
  margin-top: auto;
  line-height: 8.5vw;
  background: linear-gradient(
    to top right,
    #D68A9E,
    #8985A4
  );
  color: rgba(255,255,255,1.0);
  padding: 1rem;
  margin-bottom: -1rem;
`

const gutter = 2

const Grid = styled.div`
  padding: 0;
  max-width: 100%;
  height: 100vh;
  display: grid;
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
  > p {
    margin-top: auto;
  }
  @media screen and (max-width:800px) {
    grid-column: 1 / 5;
    grid-row: 4 / 7;
  }
  @media screen and (min-width: 1800px) {
    > p {
      column-count: 2;
      column-gap: ${gutter}rem;
      column-rule: #eee 1px solid;
    }
  }
`

export default () => (<Page>
  <Grid>
    <Headbox>
    <MegaHeading>{title}</MegaHeading>
    </Headbox>
    <Sidebox>
    <p>
    Media has the potential to expose injustice and inspire change. But for Transgender people, this potential is floundering. Transgender people face extreme violence and discrimination in personal, professional and legal arenas. Yet their stories remain invisible in the news. The interview rhetoric treats Transgender people more as specimens of science than as people with dynamic lived experiences. In the infamous interview with Laverne Cox and Carmen Carrera, Katie Couric offensively delegitimized her subjects’ authenticity with ignorant questions that focused on the content between Cox and Carrera’s legs. This was a missed opportunity to investigate the violent sociopolitical environment facing Transgender people. Media is failing the Transgender community and it is time for change.
    </p>
    </Sidebox>
  </Grid>
</Page>)
