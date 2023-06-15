import React from "react";
import { Productdata } from "./ProductsData.js";
import Style from "./Products.module.css";

export default function Products() {
  const listItem = Productdata.map((person) => (
    <>
      <div className={Style.box}>
        <img src={person.image} alt={person.name} key={person.id} />
        <div className="div"><h3>See more</h3></div>
    
      </div>
    </>
  ));

  return (
    <>
    
      <ul>{listItem}</ul>
    </>
  );
}
