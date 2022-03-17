import React, {useState, useEffect} from 'react'
import { AiOutlineMenuUnfold} from 'react-icons/ai'
import {FaAngleDown} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import img2 from '../../assets/img/img2.png'
import img3 from '../../assets/img/img3.png'
import img4 from '../../assets/img/img4.png'
import data1 from '../data/data1';
import data4 from '../data/data4';
import data5 from '../data/data5'
import data6 from '../data/data6'
import ProductItem1 from './ProductItem1'
import ProductItem2 from './ProductItem2'
import ProductItem3 from './ProductItem3'
import ProductItem5 from './ProductItem5'
import ProductItem6 from './ProductItem6'
import Shop from './Shop'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Counter from './Counter'
import Menu from './Menu'
import data2 from '../data/data2';
import img29 from '../../assets/img/img29.png'
import img70 from '../../assets/img/img70.png'

const Home = (props) => {
    const [id, setid] = useState(props.id);
useEffect(()=>{
    localStorage.setItem('id', id);
},[id])
    const{totalItems, addItem}=useCart();

      var settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 5,
        // autoplay: true,
        // autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
        <div className='home'>
           <section className='section1'>
<div className="menu mt-4">
<div className="container d-flex">
<b className='all px-3 d-flex align-items-center'> <AiOutlineMenuUnfold className='me-2'/> All Departments</b>
<ul className='d-flex justify-content-between ul1 mt-2 ms-3'>
<li className='li1'> <b>All Pages</b>  <FaAngleDown/>
  <div className='d-flex open'>
{data2.menuData.map((item,index)=>{
    return(
        <Menu 
        li1={item.li1} li2={item.li2} li3={item.li3} li4={item.li4} li5={item.li5} li6={item.li6} li7={item.li7} li8={item.li8} li9={item.li9} li10={item.li10} li11={item.li11} li12={item.li12} li13={item.li13} li14={item.li14} li15={item.li15} li16={item.li16} li17={item.li17}
        key={index}
        />
    )
})}</div>
</li>
<li><a href="#"><b>Featured Brands</b></a></li>
<li><a href="#"><b>Trending Styles</b></a></li>
<li><a href="#"><b>Gift Cards</b></a></li>
</ul>
</div>
</div>
    <div className="bg">
    <div className="container d-flex justify-content-between">
    <ul>
        <li>Value of the Day</li>
        <li>Top 100 Offers</li>
        <li>New Arrivals</li>
        <li>Computer & Accessories</li>
        <li>Cameras, Audio & Video</li>
        <li>Mobiles & Tablets</li>
        <li>Movies, Music & Video Games</li>
        <li>TV & Audio</li>
        <li>Watches & Eyewear</li>
        <li>Car, Motorbike & Industrial</li>
        <li className='end'>Accessories</li>
    </ul>
 
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active button" aria-current="true" aria-label="Slide 1" />
<button className='button' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
<button className='button' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
</div>
<div className="carousel-inner">
<div className="carousel-item active">
  <div className='d-flex justify-content-between'>
  <div className="text ">
  <h1>THE NEW <br /> STANDARD</h1>
      <h6>UNDER FAVORABLE SMARTWATCHES</h6>
      <p>FROM</p>
      <b><sup>$</sup> 749 <sup>99</sup></b>
      <button className='mt-2 py-2'>Start Buying</button>
  </div>
  <img src={img2} alt="err" />
  </div>

</div>
<div className="carousel-item">
<div className='d-flex justify-content-between'>
  <div className="text p-5">
      <h5>SHOP TO GET WHAT YOU LOVE</h5>
      <h2>TIMEPIECES THAT <br /> MAKE A STATEMENT <br /> UP TO <b>40% OFF</b> </h2>
      <button className='mt-4 py-2'>Start Buying</button>
  </div>
  <img src={img3} alt="err" />
  </div>
</div>
<div className="carousel-item">
<div className='d-flex justify-content-between'>
<div className="text p-5">
      <h5>SHOP TO GET WHAT YOU LOVE</h5>
      <h2>TIMEPIECES THAT <br /> MAKE A STATEMENT <br /> UP TO <b>40% OFF</b> </h2>
      <button className='mt-4 py-2'>Start Buying</button>
  </div>
  <img src={img4} alt="err" />
  </div>
</div>
</div>

</div>
    </div>
    </div>
    <div className="container my-4">
    <div className="row shops d-flex justify-content-between">
    {data4.shop.map((item,index)=>{
            return(
                <Shop
                img={item.img}
                text={item.text}
                item={item}
                key={index}
                />
            )
        })}
    </div>
    </div>

</section>

<section className="section2 py-5">
    <div className="container d-flex justify-content-between">
        <div className="row1 d-flex flex-column justify-content-between p-5 ">
            <div className="text1 d-flex justify-content-between align-items-center">
                <h5>Special Offer</h5>
                <div className="text2 d-flex align-items-center justify-content-center">
                    <p className='text-center mt-2'> <span> Save </span><br/> $20.00</p>
                </div>
            </div>
            <img src={img70} alt="err" />
            <div className="text3">
                <p className='title'>Game Console Controller + USB 3.0 CABLE</p>
                <p className="price">$79.00 <del>$99.00</del> </p>
                <p className='desc'>Hurry Up! Offer ends in: </p>
                <div className="timer d-flex justify-content-center">
                    <Counter/>                 
                </div>
            </div>
        </div>
        <div className="row2 ms-5">
        <div className="buttons d-flex ">
             <button id="1" onClick={()=>setid(1)} style={{fontWeight: id=== 1 ? 'bold' : "normal", color: id=== 1 ? 'red' : "black", backgroundColor: id=== 1 ? '#fed700' : "#EFEFEF"}}> Featured </button>
             <button  id="2" onClick={()=>setid(2)} style={{fontWeight: id=== 2 ? 'bold' : "normal", color: id=== 2 ? 'red' : "black", backgroundColor: id=== 2 ? '#fed700' : "#EFEFEF"}} >On Sale</button>
             <button  id="3" onClick={()=>setid(3)}  style={{fontWeight: id=== 3 ? 'bold' : "normal", color: id=== 3 ? 'red' : "black", backgroundColor: id=== 3 ? '#fed700' : "#EFEFEF"}} >Top Rated</button>
             </div>
             {(() => {
                 if (id==1) {
                     return(
                        <div className='row row3'>
                            {data6.productData1.map((item,index)=>{
                            return(
                    <ProductItem6
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index}
                                />
                            )
                        }
                   
                        )}
                        </div>
                     )
                            }else if(id==2){
                                return(
                                    <div className='row row3'>
                                        {data6.productData2.map((item,index)=>{
                                        return(
                                <ProductItem6
                                            img={item.img}
                                            title={item.title}
                                            desc={item.desc}
                                            price={item.price}
                                            item={item}
                                            key={index}
                                            />
                                        )
                                    }
                               
                                    )}
                                    </div>
                                 )
                            }else if(id==3){
                                return(
                                    <div className='row row3'>
                                        {data6.productData3.map((item,index)=>{
                                        return(
                                <ProductItem6
                                            img={item.img}
                                            title={item.title}
                                            desc={item.desc}
                                            price={item.price}
                                            item={item}
                                            key={index}
                                            />
                                        )
                                    }
                               
                                    )}
                                    </div>
                                 )
                            }
                    })()} 
      
        </div>
    </div>
</section>

{/* Section3 Start */}
<section className='section3 py-4 '>
    <div className="container">
    <div className='row products d-flex justify-content-between'>
    <div className='col'>
        {data1.productData.map((item,index)=>{
            return(
                <ProductItem1
                img={item.img}
                title={item.title}
                desc={item.desc}
                exprice={item.exprice}
                price={item.price}
                link={item.link}
                item={item}
                key={index}
                />
            )
        })}
    </div>
    <div className='col-6'>
    {data1.productData3.map((item,index)=>{
            return(
                <ProductItem2
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                mini1={item.mini1}
                mini2={item.mini2}
                mini3={item.mini3}
                exprice={item.exprice}
                item={item}
                key={index}
                />
            )
        })}
    </div>
    <div className='col'>
    {data1.productData2.map((item,index)=>{
            return(
                <ProductItem1
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                exprice={item.exprice}
                item={item}
                key={index}
                />
            )
        })}
    </div>
    </div>
    </div>
</section>

{/* Section3 End */}

{/* Section4 Start */}
<section className='section4'>
    <div className="container">
        <h1>Best Sellers</h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="row">
                    {data1.productData4.map((item,index)=>{
                        return(
                        <ProductItem3
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        exprice={item.exprice}
                        item={item}
                        key={index}
                        />
                        )
                        })}
                        </div>
                        <div className="row mt-3">
                            {data1.productData5.map((item,index)=>{
                                return(
                                <ProductItem3
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                exprice={item.exprice}
                                item={item}
                                key={index}
                                />
                                )
                                })}
                        </div>
                </div>
            <div className="carousel-item">
            <div className="row">
                    {data1.productData6.map((item,index)=>{
                        return(
                        <ProductItem3
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        exprice={item.exprice}
                        item={item}
                        key={index}
                        />
                        )
                        })}
                        </div>
                        <div className="row mt-3">
                            {data1.productData7.map((item,index)=>{
                                return(
                                <ProductItem3
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                exprice={item.exprice}
                                item={item}
                                key={index}
                                />
                                )
                                })}
                        </div>
            </div>
            <div className="carousel-item">
            <div className="row">
                    {data1.productData8.map((item,index)=>{
                        return(
                        <ProductItem3
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        exprice={item.exprice}
                        item={item}
                        key={index}
                        />
                        )
                        })}
                        </div>
                        <div className="row mt-3">
                            {data1.productData9.map((item,index)=>{
                                return(
                                <ProductItem3
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                exprice={item.exprice}
                                item={item}
                                key={index}
                                />
                                )
                                })}
                        </div>
            </div>
        </div>
</div>
<img className='img mt-3' src={img29} alt="err" />
   </div>

</section>
{/* Section4 End *


{/* Section5 Start */}
<section className='section5 py-5'>
    <div className="container">
        <h1 className='mb-3'>Recently Added</h1>
        <div className="line">
            <hr />
            <div className="line2"></div>
        </div>
    <Slider className='slider' {...settings2}>
    {data5.productData1.map((item,index)=>{
            return(
    <ProductItem5
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
                />
            )
        })}
    </Slider>
    </div>
</section>
{/* Section5 End */}

        </div>
    )
}
Home.defaultProps={
    id: 1
  }

export default Home



