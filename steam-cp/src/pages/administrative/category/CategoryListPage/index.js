import React from 'react';

import {  Container, Row, Col } from 'react-bootstrap'

import { Redirect } from "react-router-dom";

import { Content , CustomTable, CustomButton} from './css'

import NavBar from '../../../../components/layout/NavBar';

import {listAll} from '../../../../service/categoryService'

export default class CategoryListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list : [],
            redirectToForm :false,
            formUrl : ''
        }
    }

    componentDidMount(){
        listAll().then(response => {
            this.setState({ list : response})
        })
    }

    goToFormPage = ( category ) =>{
        if(category){
            this.setState({ redirectToForm : true, formUrl : `/category/edit/${category.id}`})
        }else{
            this.setState({ redirectToForm : true, formUrl : '/category/create'})
        }
    }

    render() {
        return (
            <Content>
                <NavBar />
                <Container>
                    <Row>
                        <Col> 
                            <CustomButton onClick={()=>this.goToFormPage()}>
                                Novo
                            </CustomButton> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col>                        
                            <CustomTable striped bordered hover >
                                    <thead>
                                        <tr>
                                        <th> id </th>
                                        <th> nome </th>
                                        <th style={{width: '50px'}}>  </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { this.state.list.map( e =>{
                                            return (
                                                <tr key={e.id}>
                                                    <td>{e.id}</td>
                                                    <td>{e.name}</td>
                                                    <td> 
                                                        <CustomButton onClick={() => this.goToFormPage(e)}>
                                                            Editar
                                                        </CustomButton>
                                                    </td>
                                                </tr>
                                            )
                                        } ) }
                                    </tbody>
                            </CustomTable>
                        </Col>     
                    </Row>
                </Container>
                { this.state.redirectToForm&&<Redirect to={{ pathname : this.state.formUrl, state:{ from: this.props.location } }} /> }
            </Content>
        )
    }
}