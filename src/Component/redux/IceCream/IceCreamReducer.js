import {Ice_Cream} from './IceCreamType'

const initialState={
    NumOfIcecream:20
}

const IceCreamreducer=(state=initialState, action)=>{

    switch(action.type){
        case Ice_Cream: return { ...state, NumOfIcecream:state.NumOfIcecream-1}
        default: return state
    }
}

export default IceCreamreducer