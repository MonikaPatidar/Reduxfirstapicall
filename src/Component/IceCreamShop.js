import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Icecream} from './redux/IceCream/IcecreamAction'

const IcecreamShop=()=>{
    const useselector=useSelector(state=>state.IceCream.NumOfIcecream);
    const dispatch=useDispatch()
    return (<>
    <h2>Number of IceCream - {useselector}</h2>
    <button onClick={()=>dispatch(Icecream())}>Buy IceCream</button>
    </>)
}

export default IcecreamShop;