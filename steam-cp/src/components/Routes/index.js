import React,{Component, Children} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import StoreHomePage from '../../pages/store/StoreHomePage'
import LoginPage from '../../pages/LoginPage'
import CategoryListPage from  '../../pages/administrative/category/CategoryListPage'
import CategoryFormPage from  '../../pages/administrative/category/CategoryFormPage'



function SecureRoute ({children, ...rest}){
  
  return (
    <Route {...rest} 
      render={
        props=>
          true ? (
              children
            ) : (
              <Redirect to={{ pathname : '/login', state:{ from: props.location } }} />
            )
          }
  />  
  )  
}

function LoginRoute ({children, ...rest}){
  
  return (
    <Route {...rest} 
      render={
        props=>
          !false ? (
              children
            ) : (
              <Redirect to={{ pathname : '/', state:{ from: props.location } }} />
            )
          }
  />  
  )  
}


export default function Routes() {
  return (
    <Router>
         <Switch>
            <LoginRoute path="/login" exact={true}>
                <LoginPage/>
            </LoginRoute>
            
            <SecureRoute path="/category" exact={true}>
                <CategoryListPage />
            </SecureRoute> 
            <SecureRoute path="/category/create" exact={true}>
                <CategoryFormPage />
            </SecureRoute> 
            <SecureRoute path="/category/edit/:id" exact={true}>
                <CategoryFormPage />
            </SecureRoute> 
            <SecureRoute path="/" exact={true}>
                <StoreHomePage />
            </SecureRoute> 
        </Switch>
    </Router>
  );
}