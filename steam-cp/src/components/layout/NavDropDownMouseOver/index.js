import React from "react";
import {StyledNavDropdown} from './css'


export default class NavDropDownMouseOver extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            open : false
        }
    }

    onMouseEnter = ()=>{
        this.setState({open : true})
    }

    onMouseLeave = ()=>{
        this.setState({open : false})
    }

    render(){
        return (
            <StyledNavDropdown show={this.state.open} {...this.props} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
                {this.props.children}
            </StyledNavDropdown>    
        )
    }
}