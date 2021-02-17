import React from 'react';
import {connect} from 'react-redux'
import { buyCake } from './redux/index'

const CakeShop=(props)=>{
    return(<>
    <h2>Number of Cakes {props.Numofcake}</h2>
    <button onClick={props.buyCake}>Buy Cake</button>
    </>)
}

const mapStateToProps=state=>{
    return{
        Numofcake:state.Numofcake
    }
}
 
const matchDispatchToProps= dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}


export default connect(mapStateToProps,matchDispatchToProps)(CakeShop);