import  styled  from 'styled-components'

import { Form}  from  'react-bootstrap'


export const Content = styled.div`
    width : 100%;
    margin-bottom : 18px;
   
`

export const StyledFormControl = styled(Form.Control)`
    background-color: rgba( 0, 0, 0, 0.2 );
    color: #fff;
    border: 1px solid #000;
    border-radius: 3px;
    box-shadow: 1px 1px 0px #45556c;
    padding: 5px;
    margin: 4px 0;

    :focus{
        background-color: rgba( 0, 0, 0, 0.2 );
        border: 1px solid white;
        box-shadow: none;
        color: #fff;
    }
`


export const StyledFormLabel = styled(Form.Label)`
    margin-bottom : 0px;
`
export const StyledFormGroup = styled(Form.Group)`
    margin-bottom : 0px;
`

