import React from 'react'
import { useCart } from 'react-use-cart'

const Card = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items, totalItems,
        cartTotal, updateItemQuantity,
        removeItem,
        emptyCart, } = useCart();

    if (isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>
    return (
        <div>
            <h1 className='text-center'>Card</h1>
            <selection className="py-4 container">
                <div className='col-auto ms-auto d-flex align-items-center justify-content-center w-100'>
                    <h1>Total Price: ${cartTotal}</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h5>Cart({totalUniqueItems}) totalItems:({totalItems})</h5>
                        <table className='d-flex align-items-center justify-content-center table table-light table-hover m-0'>
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><img src={item.img} style={{ height: '6rem' }} /></td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>

                                            <td><button className='btn btn-success ms-2' onClick={() =>
                                                updateItemQuantity(item.id, item.quantity - 1)
                                            }>-</button></td>

                                            <td><button className='btn btn-success ms-2' onClick={() =>
                                                updateItemQuantity(item.id, item.quantity + 1)
                                            }>+</button></td>
                                               <td><button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)
                                                
                                            }>remove item</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto ms-auto d-flex align-items-center justify-content-center w-100">
                        <button onClick={()=>emptyCart()} className="btn btn-danger">Clear Cart</button>
                    </div>
                </div>

            </selection>
        </div>
    )
}

export default Card