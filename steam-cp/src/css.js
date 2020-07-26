import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin : 0;
        padding : 0;
        outline : 0;
        box-sizing : border-box;
    }
    html, body, #root{
        height : 100vh;
    }
    body{
        background : center top no-repeat #17425e;
        -webkit-font-smoothing: antialised !important;
    }
`