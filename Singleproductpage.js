import React from 'react'
import style from './Singleproductpage.module.css'
import { SamsungUltra } from './Singleproductpagedata'

export default function SingleProductpage() {
const listItem = SamsungUltra.map((data)=>(

  <>

   <div className={style.box}></div>
   <div className={style.longimage}>
    <img src={data.image} alt="" />
   </div>
  
    <div className={style.details}>
      <ul>
<li><h5>{data.name}</h5></li>
<li><h5>{data.price}</h5></li>
<li><h5>{data.camera}</h5></li>
<li><h5>{data.Battery}</h5></li>
<li><h5>{data.Memory}</h5></li>
<li><h5>{data.Display}</h5></li>
<li><h5>{data.Dimensions}</h5></li>
<li><h5>{data.frontcamera}</h5></li>
<li><h5>{data.Warranty}</h5></li>
</ul>
<button>Add to cart </button>
<button>Buy Now</button>
 </div>

</>

))

  return (
    <>
<ul>{listItem}</ul>
</>
 )
}

