 import React, { useReducer } from 'react';
 let initialState=0;
 const reducer=(state,action)=>{
   if(action.type==="INCREMENT"){
     return state+1;
   }
   if(action.type==="DECREMENT"){
     return state-1 ;
   }

   if(action.type==="MULTIPLY"){
     return state*2;
   }
   if(action.type==="DIVIDE"){
     return state/2;
   }
 }
 const App = () => {

  const [state,dispatch]=useReducer(reducer,initialState);
   return (
     <>
     <h1>{state}</h1>
     <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
     <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
     <button onClick={()=>dispatch({type:"MULTIPLY"})}>MULTIPLY</button>
     <button onClick={()=>dispatch({type:"DIVIDE"})}>DIVIDE</button>
     </>
   )
 }
 
 export default App;