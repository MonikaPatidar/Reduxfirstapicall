import {Buy_cake} from './CakeType'

const initialState={
    Numofcake:10
}

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case Buy_cake: return { ...state, Numofcake:state.Numofcake - action.payload}
        default : return state
    }
}

export default cakeReducer;
