import React from 'react'
import { useCart } from 'react-use-cart'

const ProductItem3 = (props) => {
    const {addItem} = useCart();
    return (
        <div className="col-4 productItem3 p-4">
        
        <div className=" d-flex justify-content-between">

        <img src={props.img} className="card-img-top" alt="err"  />

        <div className="card-text1">
           <p className="card-title">{props.title}</p>
          <h5 className="card-text">{props.desc}</h5>

          <div className="pricebutton d-flex justify-content-between mt-4">
            <div className="price d-flex mt-2">
            <p className="card-text">${props.price}.00</p>
            <del className='mt-1 mx-2'>{props.exprice}</del>
            </div>
            <button title='Add to cart' onClick={()=>addItem(props.item)} className="d-flex align-items-center justify-content-center">🛒</button>
          </div>
        </div>
     


        </div>
      </div>
    )
}

export default ProductItem3