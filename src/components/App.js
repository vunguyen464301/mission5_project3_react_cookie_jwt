import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Hompage from '../components/Hompage';
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import User from './User'
import Modal_show from '../containers/Modal_show';
function App() {
  return (
   <div className="container">
     <Router>
     <Hompage/>
     {/* <Route path="/" exact component={Index} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/user" component={User} />
     </Router>
    <Modal_show/>
   </div>
  );
}

export default App;
