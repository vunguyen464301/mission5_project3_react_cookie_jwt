import React from 'react';
import {Form,Button,Card} from 'react-bootstrap';
import jwt from 'jsonwebtoken';
import config from '../utils/config';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
class Login extends React.Component{
    state={
        email:'',
        password:'',
        checked:false
    }
    checkCookie=(data)=> {
        let sp1=data.split(';');
        let sp_1=sp1[0].split('=');
        let sp_2=sp1[1].split('=');
        let sp_3=sp1[2].split('=');
        let obj={
        email:sp_1[1],
        password:sp_2[1],
        checked:sp_3[1]
        }
        if(this.state.email===obj.email){
            if(this.state.password===obj.password){
                alert("Login Success!");
               
                var token =jwt.sign({
                  emai:this.state.email,
                  password:this.state.password
                },config.secret,{algorithm:config.encode,expiresIn:config.tokenLife});
                 document.cookie=`checked=${this.state.checked};expires=Thu, 18 Dec 2019 12:00:00 UTC`;
                 document.cookie=`jwt=${token};expires=Thu, 18 Dec 2019 12:00:00 UTC`;
                console.log(document.cookie);




                window.location.reload()         
            }else{
                alert("Password wrong !")
            }
        }else{
            return(
                alert("Account not exists !")
            )
        }
    }
    handleOnChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.type==='checkbox'?e.target.checked:e.target.value
        });
    }
    handleOnSubmit=(e)=>{
        e.preventDefault();
        // console.log(this.state.email);
        // console.log(this.state.password);
        // console.log(this.state.checkbox);     
        this.checkCookie(document.cookie);
    //    return(<Redirect to="user"/>);
    }
    loadpage=()=>{
        var data=document.cookie;
       
        if(data.length>0){
            let sp1=data.split(';');
            let sp_3=sp1[2].split('=');
            if(sp_3[1]==='true'){
                return(
                 <div>
                     <Redirect to='/user'/>
                </div>
                )
            }
        }
        return(
            <div>
                  <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form onSubmit={this.handleOnSubmit}>
          <Form.Group >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            name='email'
            onChange={this.handleOnChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" 
            placeholder="Password" 
            name='password'
            onChange={this.handleOnChange}
            />
          </Form.Group>
          <Form.Group >
            <Form.Check type="checkbox" label="Save"
              name='checked'
              onChange={this.handleOnChange}
              value={true}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="float-right"
          >
            Login
          </Button>
        </Form>
          </Card.Body>
        </Card> 
            </div>
        )
    }   
    render(){
       return(
            <div className="center mt-5"> 
            {this.loadpage()}
            </div>
        )
    }
}
export default Login;

