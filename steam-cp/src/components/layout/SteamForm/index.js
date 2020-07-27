import React from 'react';

import { Row, Col, Form}  from  'react-bootstrap'

import {Content, StyledFormControl, StyledFormLabel, StyledFormGroup} from './css'



export function InputGroup(props){
    return (
        <Content>
            <Row>
                <Col> 
                    <StyledFormGroup controlId={props.id}>
                        <StyledFormLabel>{props.label}</StyledFormLabel>
                        <StyledFormControl type={props.type ? props.type : 'text'} 
                                      placeholder={props.placeholder} 
                                      value={props.value}
                                      name={props.name ? props.name : props.id}
                                      onChange={props.onChange} />
                    </StyledFormGroup>
                </Col>
            </Row> 
        </Content>
    )
}