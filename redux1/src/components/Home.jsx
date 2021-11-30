import React from 'react';
import iphone from './iphone.jpg';
import cart from './cart.png';

const Home = () => {
    return (
        <>
            <div>
            <div className="add-to-cart">
                <img src={cart}/>
            </div>
           
           <h1>Home Component</h1>
           <div className="cart-wrapper">
               <div className="img-wrapper item">
                   <img src={iphone} />
               </div>
               <div className="text-wrapper item">
                   <span>
                       I-Phone
                   </span>
                   <span>
                       Price: $1000.00
                   </span>
               </div>
               <div className="btn-wrapper item">
                   <button 
                //    onClick={
                //        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                //        }
                >
                       Add To Cart</button>
               </div>
           </div>
       </div>
        </>
    )
}

export default Home;
