import React from 'react';

import {Content} from './css'
import NavBar from '../../../components/layout/NavBar';


export default function StoreHomePage(){
    return (
        <Content>
            <NavBar/>
            <img src="/img/fake.png"/>
        </Content>
    )
}