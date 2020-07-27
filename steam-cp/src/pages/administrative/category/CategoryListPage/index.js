import React from 'react';

import {  Container, Row, Col, Table } from 'react-bootstrap'

import { Content } from './css'

import NavBar from '../../../../components/layout/NavBar';

import {listAll} from '../../../../service/categoryService'

export default class CategoryListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list : []
        }
    }

    componentDidMount(){
        listAll().then(response => {
            this.setState({ list : response})
        })
    }

    render() {
        return (
            <Content>
                <NavBar />
                <Container>
                 <Row>
                    <Col>
                    
                       
                <Table striped bordered hover >
                                <thead>
                                    <tr>
                                    <th> id </th>
                                    <th> nome </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.state.list.map( e =>{
                                        return (
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{e.name}</td>
                                            </tr>
                                        )
                                    } ) }
                                </tbody>
                        </Table>
                        </Col>     
                </Row>
                </Container>
            </Content>
        )
    }
}