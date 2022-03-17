import React from 'react'
import { useCart } from 'react-use-cart'
import {FiHeart} from 'react-icons/fi'
import {BiGitCompare} from 'react-icons/bi'

const ProductItem5 = (props) => {
    const {addItem} = useCart();
    return (
        <div className='box p-2'>
        <p className='p1'>{props.desc}</p>
        <h6>{props.title}</h6>
        <img src={props.img} alt="err" />
        <div className='end1 d-flex justify-content-between mt-2'>
            <p className="price">{props.price}</p>
            <button  title='Add to cart' onClick={()=>addItem(props.item)} className="d-flex align-items-center justify-content-center">🛒</button>
        </div>
        <div className='end2 text-center'>
            <p className='mt-2'><FiHeart/> Wishlist <br />
            <BiGitCompare/> Compare</p>
        </div>
        </div>

    )
}

export default ProductItem5