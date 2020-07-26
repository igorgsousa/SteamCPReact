import React from "react";

import { Nav, Container, Row, Col}  from  'react-bootstrap'
import {Content, Logo, HeaderRow, Link} from './css'
import NavDropDownMouseOver from '../NavDropDownMouseOver'

export default function Header() {
    return (
        <Content>
            <Container>
                <Row>
                    <Col>
                        <HeaderRow halign='flex-end' fontSize="11px">
                            <Nav.Item>
                                <Link href="/login" >
                                    Iniciar sessão
                                </Link>
                            </Nav.Item>
                        </HeaderRow>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HeaderRow>
                            <Nav.Item>
                                <a href="/">
                                    <Logo src="/img/layout/header_logo.png" /> 
                                </a>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href="/" >
                                    LOJA
                                </Link>
                            </Nav.Item>
                            <NavDropDownMouseOver title="COMUNIDADE" id="comunidade-dropdown">
                                <Link href="/" fontSize="11px">INÍCIO </Link>
                                <Link href="/" fontSize="11px">DISCUSSÕES </Link>
                                <Link href="/" fontSize="11px">WORKSHOP </Link>
                            </NavDropDownMouseOver>
                            <Nav.Item>
                                <Link href="/">
                                    SOBRE
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href="/">
                                    SUPORTE
                                </Link>
                            </Nav.Item>
                        </HeaderRow>
                    </Col>
                </Row>
            </Container>
            
        </Content>
    );
  }