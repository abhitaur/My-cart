import React from "react";
import { products } from "./AddtoCartdata";
import style from "./AddtoCart.module.css";

export default function AddtoCart() {
  const listItem = products.map((data) => (
    <>
      <div className={style.paymentbox}>
        <h4>PRICE DATAILS</h4>
        <div class="container text-center">
          <div class="row">
            <div class="col-sm-5 col-md-6">
              <h4>Price</h4>
            </div>
            <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
              <h4>10000</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-5 col-lg-6">
              <h4>Discount</h4>
            </div>
            <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
              <h4>20000</h4>
            </div>
          </div>
        </div>

        <div class="container text-center">
          <div class="row">
            <div class="col-sm-5 col-md-6">
              <h4>Delivery Charges</h4>
            </div>
            <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
              <h4>40000</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-5 col-lg-6">
              <h4>Total Amount</h4>
            </div>
            <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
              <h4>60000</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.box2}>
          <div className={style.name}>{data.name}</div>
          <div className={style.price}>₹{data.price}</div>
          <div className={style.delivery}>₹{data.delivery}</div>
          <h6>Cash on delivery available</h6>
        </div>

        <img src={data.image} alt={data.name} key={data.id} />
        <br />

        <div class={style.btngroup} role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">
            -
          </button>
          <button type="button" class="btn btn-primary">
            0
          </button>
          <button type="button" class="btn btn-primary">
            +
          </button>
        </div>
      </div>
    </>
  ));
  return <>{listItem}</>;
}


