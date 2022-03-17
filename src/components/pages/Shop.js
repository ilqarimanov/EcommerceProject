import React from 'react';
import {FaAngleRight} from 'react-icons/fa'


const Shop = (props) => {
  return (
  <div className='col-3 shop d-flex justify-content-between align-items-center'>
      <img src={props.img} alt="err" />
      <div className="text">
          <p>{props.text}</p>
          <b className='d-flex'>Shop now <button className=' ms-2 mt-1 d-flex justify-content-center align-items-center'><FaAngleRight/></button></b>
      </div>

  </div>
  )
};

export default Shop;
