import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Changer = () => {
    const dispatch=useDispatch();
    const actions=bindActionCreators(actionCreators,dispatch);
    // destructing of this 
    const {depositMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch);
  return (
    <>
    {/* <button onClick={()=>{dispatch(actionCreators.depositMoney(23))}}>+</button> */}
    {/* <button onClick={()=>{dispatch(actionCreators.withdrawMoney(23))}}>-</button> */}
    

    {/* <button onClick={()=>{actions.depositMoney(23)}}>+</button>
    <button onClick={()=>{actions.withdrawMoney(23)}}>-</button> */}


<button onClick={()=>{depositMoney(23)}}>+</button>
    <button onClick={()=>{withdrawMoney(23)}}>-</button>
    
    
    
    </>
  )
}

export default Changer;