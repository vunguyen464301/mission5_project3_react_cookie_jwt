import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import*as Actions from '../actions/index';
import {Button} from 'react-bootstrap';


const Btn_signup =({case_num,title,actions})=>{
    const btn_signup=()=>{
        actions.openModal(case_num+" : "+title)
    }
    return(
        <Button variant="primary" type="submit" className="float-right"
        onClick={btn_signup}
        >
        Sign Up
      </Button>
    )
}

const mapDispatchToProps=(dispatch)=>({
    actions:bindActionCreators(Actions,dispatch)
})

export default connect(null,mapDispatchToProps)(Btn_signup);