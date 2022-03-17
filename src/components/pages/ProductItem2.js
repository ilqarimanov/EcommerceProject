import React from 'react'
import { useCart } from 'react-use-cart'

const ProductItem2 = (props) => {
    const {addItem} = useCart();
    return (
      <div className="card col productItem2 p-4">
        
      <div className="card-body">
        <p className="card-title">{props.title}</p>
        <h5 className="card-text">{props.desc}</h5>
        <img src={props.img} className="card-img-top" alt="err"  />
        <div className="mini d-flex mt-5">
            <img src={props.mini1} alt="err" />
            <img src={props.mini2} alt="err" />
            <img src={props.mini3} alt="err" />
          </div>
        <div className="pricebutton d-flex justify-content-between mt-4">
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

export default ProductItem2