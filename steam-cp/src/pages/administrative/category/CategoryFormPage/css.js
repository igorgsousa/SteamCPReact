import  styled  from 'styled-components'

import { Button, Table}  from  'react-bootstrap'

export const Content = styled.div`
    color : #c6d4df;
    font-family: "Motiva Sans", Sans-serif;
    background-color : #1b2838 !important;
    height : 100%;
   
`

export const CustomButton =  styled(Button) `
    border-radius: 2px;
    border: none;
    padding: 1px;
    display: inline-block;
    cursor: pointer;
    text-decoration: none !important;
    color: #67c1f5 !important;
    background: rgba( 103, 193, 245, 0.2 );
    padding: 0 15px;
    font-size: 15px;
    line-height: 30px;

    :hover{
        background: linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%);
        color : white !important;
    }
`

