import React from 'react';

import { Nav, Container, Row, Col, Form } from 'react-bootstrap'

import { Content, LoginBox, LoginBoxSection, BeginSectionHeader, ForgotPasswordText, LoginBoxSectionSeparator, CustomButton } from './css'
import {InputGroup} from '../../components/layout/SteamForm'

import NavBar from '../../components/layout/NavBar';

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onChange = (event) =>{
        this.setState({[event.target.name] :  event.target.value});
    }

    render() {
        return (
            <Content>
                <NavBar />
                <Container>
                    <Row>
                        <Col>
                            <LoginBox>
                                <LoginBoxSection>
                                    <BeginSectionHeader>INICIAR SESSÃO</BeginSectionHeader>
                                    Com uma conta Steam existente
                                    <br/>
                                    <br/>
                                    <Form>
                                        <InputGroup id="username" label="Nome da conta Steam" name="username" value={this.state.username} onChange={this.onChange}/>
                                        <InputGroup id="password" label="Palavra-passe" name="password" value={this.state.password} onChange={this.onChange} type="password"/>
                                    </Form>
                                    <br/>
                                    <br/>

                                    <CustomButton> Iniciar sessão</CustomButton>
                                </LoginBoxSection>
                                <LoginBoxSectionSeparator/>
                                <LoginBoxSection>
                                <BeginSectionHeader>CRIAR</BeginSectionHeader>
                                    Uma nova conta gratuita

                                    <br/>
                                    <br/>
                                    <p>
                                     É fácil de utilizar e de adesão gratuita. Continua para criares a tua conta e aderires ao Steam, a solução digital líder para jogadores de PC, Mac e Linux.
                                    </p>

                                   
                                    
                                    <CustomButton> Aderir ao Steam</CustomButton>
                            </LoginBoxSection>


                            </LoginBox>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ForgotPasswordText href="/"> Esqueceu a sua senha? </ForgotPasswordText>

                        </Col>
                    </Row>
                </Container>
            </Content>
        )
    }
}