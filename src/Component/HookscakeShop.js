import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from './redux';


const HookCakeShop=()=>{
    const [number,setNumber]=useState(1)

    const numberofCake=useSelector(state=>state.cake.Numofcake);
    const Dispatch=useDispatch()
    return (<>
    <h2>Number of Cakes {numberofCake}</h2>
    <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    <button onClick={() =>Dispatch(buyCake(number))}>Buy {number} Cake</button>
    </>)
}
export default HookCakeShop;