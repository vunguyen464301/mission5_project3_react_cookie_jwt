import React from 'react';
import { Redirect } from 'react-router-dom'
import jwt from 'jsonwebtoken';
import config from '../utils/config'
const User = () => {
    // const loadpage=()=>{
    var data = document.cookie;
    if (data.length > 0) {
        let sp1 = data.split(';');
        let sp_3 = sp1[2].split('=');
        let sp_4 = sp1[3].split('=');
        console.log(sp_4[1]);
       if(sp_3[1]==='true'){
        jwt.verify(sp_4[1], config.secret, (err, decode) => {
            if (err) {
                document.cookie = `checked=false;expires=Thu, 18 Dec 2019 12:00:00 UTC`;
                document.cookie = `jwt=0;expires=Thu, 18 Dec 2019 12:00:00 UTC`;
                window.location.reload();
              console.log('dang nhap lai')
            } else {
                console.log('dang nhap thanh cong')
            }
        });
        return(
            <div className="center mt-5">
                <h1>User</h1>
            </div>
        )
     
       }
    }
  
        return (

            <div>
                <Redirect to='/login' />
            </div>
        )
    
}
    export default User;