import { createGlobalStyle } from 'styled-components'

import '../fonts/1ab7e009-f493-44fc-8a99-afebf8e24b20.woff2'
import '../fonts/247437df-66d2-4605-ac03-1be0e07c31a7.ttf'
import '../fonts/25df6f92-ec41-4f60-91af-bddc19a3adc2.eot'
import '../fonts/398e3e8c-3bf0-4af1-9791-f426a7992711.woff2'
import '../fonts/4ba8e512-e6fb-494f-afd3-a7b68b2e5efb.woff'
import '../fonts/6ceed230-b2b3-4422-b048-4aa11687430a.woff2'
import '../fonts/71b25abe-e633-4b0b-b0cf-0875d2ea4c90.ttf'
import '../fonts/80b0143f-6f0d-4dce-aafd-f3c81b85d177.woff'
import '../fonts/83ff78fa-6d76-4fb5-8bff-8af8eec8e368.woff'
import '../fonts/8804ad73-51dd-4dd7-a618-eb80cd20a726.woff'
import '../fonts/90744ee6-df8b-4daf-924d-e84a33fa139c.eot'
import '../fonts/9b63158c-0e74-4751-966c-d749c5d31cce.eot'
import '../fonts/9be9615e-18d6-4bf7-bb05-068341c85df3.ttf'
import '../fonts/c36d4fee-ad19-437a-ba7f-85eacfad975b.eot'
import '../fonts/d988fb64-309d-4c7f-9ded-4e9663aa6061.ttf'
import '../fonts/e39ef3e7-91b2-45d0-8c2f-cfdcd0c0ab94.woff2'

const fontsPath = 'fonts/'

const GlobalStyles = createGlobalStyle`
  @font-face{
    font-family:"DIN Light";
    src:url("${fontsPath}/25df6f92-ec41-4f60-91af-bddc19a3adc2.eot?#iefix");
    src:url("${fontsPath}/25df6f92-ec41-4f60-91af-bddc19a3adc2.eot?#iefix") format("eot"),url("${fontsPath}/e39ef3e7-91b2-45d0-8c2f-cfdcd0c0ab94.woff2") format("woff2"),url("${fontsPath}/83ff78fa-6d76-4fb5-8bff-8af8eec8e368.woff") format("woff"),url("${fontsPath}/9be9615e-18d6-4bf7-bb05-068341c85df3.ttf") format("truetype");
  }
  @font-face{
    font-family:"DIN Regular";
    src:url("${fontsPath}/9b63158c-0e74-4751-966c-d749c5d31cce.eot?#iefix");
    src:url("${fontsPath}/9b63158c-0e74-4751-966c-d749c5d31cce.eot?#iefix") format("eot"),url("${fontsPath}/6ceed230-b2b3-4422-b048-4aa11687430a.woff2") format("woff2"),url("${fontsPath}/80b0143f-6f0d-4dce-aafd-f3c81b85d177.woff") format("woff"),url("${fontsPath}/247437df-66d2-4605-ac03-1be0e07c31a7.ttf") format("truetype");
  }
  @font-face{
    font-family:"DIN Medium";
    src:url("${fontsPath}/90744ee6-df8b-4daf-924d-e84a33fa139c.eot?#iefix");
    src:url("${fontsPath}/90744ee6-df8b-4daf-924d-e84a33fa139c.eot?#iefix") format("eot"),url("${fontsPath}/398e3e8c-3bf0-4af1-9791-f426a7992711.woff2") format("woff2"),url("${fontsPath}/4ba8e512-e6fb-494f-afd3-a7b68b2e5efb.woff") format("woff"),url("${fontsPath}/d988fb64-309d-4c7f-9ded-4e9663aa6061.ttf") format("truetype");
  }
  @font-face{
    font-family:"DIN Extlight";
    src:url("${fontsPath}/c36d4fee-ad19-437a-ba7f-85eacfad975b.eot?#iefix");
    src:url("${fontsPath}/c36d4fee-ad19-437a-ba7f-85eacfad975b.eot?#iefix") format("eot"),url("${fontsPath}/1ab7e009-f493-44fc-8a99-afebf8e24b20.woff2") format("woff2"),url("${fontsPath}/8804ad73-51dd-4dd7-a618-eb80cd20a726.woff") format("woff"),url("${fontsPath}/71b25abe-e633-4b0b-b0cf-0875d2ea4c90.ttf") format("truetype");
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

export default GlobalStyles
