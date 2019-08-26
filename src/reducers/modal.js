import {CLOSE_MODAL,OPEN_MODAL} from '../actions/typeActions';

 const modal =(state={show:false},action)=>{
    switch(action.type){
        case OPEN_MODAL:
            return{
                show:true,
                title:action.title
            }
        case CLOSE_MODAL:
            return{
                show:false
            }
        default:
            return state;
    }
}

export default modal;