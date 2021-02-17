import {combineReducers} from 'redux'
import cakeReducer from './Cake/CakeReducer';
import IceCreamreducer from './IceCream/IceCreamReducer';
import UserReducer from './Users/USerReducer'

const rootReducer=combineReducers({
    cake: cakeReducer,
    IceCream: IceCreamreducer,
    user: UserReducer
})

export default rootReducer;