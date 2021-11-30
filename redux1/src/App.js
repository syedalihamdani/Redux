 import React from 'react';
//  import User from './components/User';
// import HomeContainer from './container/HomeContainer';
import { useSelector,useDispatch } from 'react-redux';
import {IncNumber,DecNumber} from './actions/index';
 
 const App = () => {
   const mystate=useSelector((state)=>state.changeTheNumber )
   const dispatch=useDispatch();
   return (
     <>
     <div className="container">
     <h1> INcrement and decrement operators</h1>
     <h4>using react and redux</h4>
     <div className="quantity">
       <button className="quantity__minus" title="Decrement" 
       onClick={()=>dispatch(DecNumber())}><span> - </span></button>
       <input name='quantity' type="text" class="quantity__input" value={mystate}/>
       <button className="quantity__Plus" title="Increment"
       onClick={()=>dispatch(IncNumber())} ><span> + </span></button>
     </div>
     </div>
     </>
   )
 }
 
 export default App
 