import  styled  from 'styled-components'

import { Button}  from  'react-bootstrap'

export const Content = styled.div`
    color : #c6d4df;
    font-family: "Motiva Sans", Sans-serif;
    background-color : #1b2838 !important;
    height : 100%;
   
`

export const LoginBox = styled.div`
    background-color : #16202d;
    padding: 10px;
    margin-top: 50px;
    width : 100%;
    display : flex;

    @media screen and (max-width : 600px){
        width : 100%;
    }

    @media screen and (min-width : 601px){
        width : 600px;
    }
`

export const LoginBoxSection = styled.div`
    padding: 5px;
    width : 50%;
    font-size : 12px;
    position : relative;
   
`

export const LoginBoxSectionSeparator = styled.div`
    flex: 0;
    border-left: 1px solid #264959;
    width: 2px;
    height: 210px;
    margin: 0 16px;
   
`

export const BeginSectionHeader = styled.h2`
    font-size : 18px;
`

export const ForgotPasswordText = styled.a`
    font-size : 12px;
    color : white;

    :hover{
        text-decoration : none;
        color : #66c0f4;
    }
   
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
    position : absolute;
    bottom: 0px;

    :hover{
        background: linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%);
        color : white !important;
    }
`
