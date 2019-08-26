import {CLOSE_MODAL,OPEN_MODAL} from './typeActions';

export const openModal =(title)=>{
    console.log(`You click ${OPEN_MODAL}`);
    return{
        type:OPEN_MODAL,
        title:title
    }
}
export const closeModal=()=>{
    console.log(`You click ${CLOSE_MODAL}`);
    return{
        type:CLOSE_MODAL
    }
}