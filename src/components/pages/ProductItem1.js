import React from 'react'
import { useCart } from 'react-use-cart'
import {Link} from 'react-router-dom'

const ProductItem1 = (props) => {
    const {addItem} = useCart();
    return (
        <div className="card col productItem p-2">
        
        <div className="card-body">
          <p className="card-title">{props.title}</p>
          <h5 className="card-text">{props.desc}</h5>
          <img src={props.img} className="card-img-top" alt="err"  />
          <div className="pricebutton d-flex justify-content-between">
            <div className="price">
            <del>${props.exprice}.00</del>
            <p className="card-text">${props.price}.00</p>
            </div>
            <button title='Add to cart' onClick={()=>addItem(props.item)} className="d-flex align-items-center justify-content-center">🛒</button>
          </div>


        </div>
      </div>
    )
}

export default ProductItem1