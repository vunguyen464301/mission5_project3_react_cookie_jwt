import React from 'react';
import {Form,Button,Card,Alert} from 'react-bootstrap';
import*as Action from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Btn_signup from './Btn_signup';
import { Redirect } from 'react-router'

class Signup extends React.Component{
    state={
        email:'',
        password:''
    }
    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        document.cookie=
            `email=${this.state.email};
            expires=Thu, 18 Dec 2019 12:00:00 UTC`;
        document.cookie=
            `password=${this.state.password};
            expires=Thu, 18 Dec 2019 12:00:00 UTC`;
        document.cookie=
            `checked=false;
            expires=Thu, 18 Dec 2019 12:00:00 UTC`;
        document.cookie=
            `jwt=0;
            expires=Thu, 18 Dec 2019 12:00:00 UTC`;
            console.log(this.getCookie(document.cookie))
        alert("Signup Successful")
    }
    getCookie=(data)=> {
        let sp1=data.split(';');
        let sp_1=sp1[0].split('=');
        let sp_2=sp1[1].split('=');
        let obj={
        email:sp_1[1],
        password:sp_2[1]
    }
    return obj;
    }
    loadpage=()=>{
        var data=document.cookie;
       
        if(data.length>0){
            let sp1=data.split(';');
            let sp_3=sp1[2].split('=');
            console.log(sp_3[1])
            if(sp_3[1]==='true'){
                return(
                 <div>
                     <Redirect to='/user'/>
                </div>
                )
            }
        }
        return(
           
        <Card style={{ width: '18rem' }}>
              <Card.Body>
            <Card.Title>Sign Up</Card.Title>         
            <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            name="email"
            onChange={this.handleInputChange} 
            required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        
          <Form.Group >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              name="password"
              onChange={this.handleInputChange}
              required
            />
          </Form.Group>
    {/* <Btn_signup/> */}
    <Button variant="primary" type="submit" className="float-right">
        Sign Up
      </Button>

        </Form>
          </Card.Body>
        </Card>
    
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
export default Signup