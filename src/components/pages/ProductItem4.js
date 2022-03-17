import React from 'react';

const ProductItem4 = (props) => {
  return(
   <div>
       <div className="products mt-2">
           <div className="product d-flex justify-content-between ">
               <img src={props.img} alt="err" />
               <div className="producttext d-flex flex-column justify-content-between">
                    <p className='desc'>{props.desc}</p>
                    <div className="star">{props.star}</div>
                    <p>{props.price}</p>
               </div>
           </div>
       </div>
  </div>
  )
}

export default ProductItem4;
