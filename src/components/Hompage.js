import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
const Homepage = () => {
    var data =document.cookie;
    let sp1=data.split(';');
    let sp_3=sp1[2].split('=');
    console.log(sp_3)
    const btn_logout=()=>{
        document.cookie = `checked=false;expires=Thu, 18 Dec 2019 12:00:00 UTC`;
        document.cookie = `jwt=0;expires=Thu, 18 Dec 2019 12:00:00 UTC`;
        window.location.reload()
        console.log(document.cookie);   
    }
    if(sp_3[1]==='true'){
        return (
            <div>
                <div className="center" style={{ marginTop: '50px' }}>
                   <Button variant="primary" className="mr-2" onClick={()=>{btn_logout()}} >Logout</Button>
                </div>
                <Redirect to="/user"/>
            </div>
        ) 
    }
    return (
        <div>

            <div className="center" style={{ marginTop: '50px' }}>
                <Link to="/login"><Button variant="danger" className="mr-2" >Login</Button></Link>
                <Link to="/signup"> <Button variant="warning" className="ml-2">Sign Up </Button></Link>
                <Button variant="primary" className="ml-2" onClick={()=>{console.log(document.cookie)}}>Check Cookie </Button>
            </div>
        </div>


    )
}

export default Homepage;