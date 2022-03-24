import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../state/index';

const Buttons = () => {
  const dispatch=useDispatch();
  const action=bindActionCreators(actionCreator,dispatch);
  return (
    <>
    <div>
        <button onClick={()=>{action.depositMoney(333)}}>INCREMENT</button>
        <button onClick={()=>{action.withdrawMoney(33)}}>DECREMENT</button>
    </div>
    </>
  )
}

export default Buttons;