import React from 'react';
import {bindActionCreators} from 'redux';
import*as Actions from '../actions/index';
import {connect} from 'react-redux';
import {Modal,Button} from 'react-bootstrap';
const Modal_show =({isShow,title,actions})=>{

    return(
        <Modal show={isShow} onHide={actions.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Warning !</Modal.Title>
        </Modal.Header>
        <Modal.Body>{title}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={actions.closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={actions.closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

const mapStateToProps =(state)=>({
    isShow:state.modal.show,
    title:state.modal.title
});

const mapDispatchToProps=(dispatch)=>({
    actions:bindActionCreators(Actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Modal_show);