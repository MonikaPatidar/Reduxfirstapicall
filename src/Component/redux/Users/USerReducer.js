import {FETCH_USER_REQUEST, FETCH_USER_LIST, FETCH_USER_ERROR} from './UserType';

const initialState={
    loading:false,
    users:[],
    error:''
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST: return{...state, loading:true }
        case FETCH_USER_LIST: return{...state, loading:false, users:action.payload, error:'' }
        case FETCH_USER_ERROR: return{...state, error:action.payload }
        default: return state
    }
}

export default reducer