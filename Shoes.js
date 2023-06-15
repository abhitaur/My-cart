import React from "react";
import { shoes } from "./Shoesdata";
import  Style from "./Shoes.module.css";

export default function Shoes() {
const listItem = shoes.map((data,i) => (
    <>
      <div className={Style.box}>
        <img src={data.image} alt={data.name} />
        <h3>{data.name}</h3>
        <div className={Style.price}><h3>₹{data.price}</h3></div>
       <div className={Style.delivery}><h5>{data.delivery}</h5></div>
       <div className={Style.emi}><h5>{data.emi}</h5></div>
       <button>Add to cart</button><br />
       <button>Buy Now</button>
        </div>
     
    </>
   

   

  ));
  return (
    
      <ul>{listItem}</ul>
   
  );
}
