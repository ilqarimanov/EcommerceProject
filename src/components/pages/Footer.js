import React from 'react'
import {BiSupport} from 'react-icons/bi'
import {AiOutlineShoppingCart, AiFillYoutube} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import { BsFacebook, BsWhatsapp, BsInstagram, BsPinterest, BsLinkedin} from 'react-icons/bs'
import img30 from '../../assets/img/img30.png'
import img40 from '../../assets/img/img40.jpg'
import img44 from '../../assets/img/img44.png'
import img45 from '../../assets/img/img45.png'
import img46 from '../../assets/img/img46.png'
import img47 from '../../assets/img/img47.png'
import img48 from '../../assets/img/img48.png'
import img49 from '../../assets/img/img49.png'
import Slider from "react-slick";
import ProductItem4 from './ProductItem4'
import data3 from '../data/data3';
import BackToButton from './BackToButton';

const Footer = () => {
    const settings1 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,

      };
  return (
    <div>
        <section className="section6 py-5">
    <div className="container">
        <Slider {...settings1}>
            <div>
                <img src={img44} alt="err" />
            </div>
            <div>
                <img src={img45} alt="err" />
            </div>
            <div>
                <img src={img46} alt="err" />
            </div>
            <div>
                <img src={img47} alt="err" />
            </div>
            <div>
                <img src={img48} alt="err" />
            </div>
            <div>
                <img src={img49} alt="err" />
            </div>
        </Slider>        
    </div>
</section>

{/* Section7 Start */}
<section className='section7 py-5'>
    <div className="container">
        <div className="row d-flex">
            <div className="col-3">
                <div className="text">
                    <h4>Featured Products</h4>
                    <div className="line d-flex">
                         <div className="line1"></div>
                         <div className="line2"></div>
                    </div>
                </div>
                {data3.productData1.map((item,index)=>{
                     return(
                        <ProductItem4
                        img={item.img}
                        desc={item.desc}
                        price={item.price}
                        star={item.star}
                        item={item}
                        key={index}
                        />
                    )
                })}
            </div>
            <div className="col-3">
                <div className="text">
                    <h4>Top Selling Products</h4>
                    <div className="line d-flex">
                         <div className="line1"></div>
                         <div className="line2"></div>
                    </div>
                </div>
                {data3.productData2.map((item,index)=>{
                     return(
                        <ProductItem4
                        img={item.img}
                        desc={item.desc}
                        price={item.price}
                        star={item.star}
                        item={item}
                        key={index}
                        />
                    )
                })}
            </div>
            <div className="col-3">
                <div className="text">
                    <h4>On-sale Products</h4>
                    <div className="line d-flex">
                         <div className="line1"></div>
                         <div className="line2"></div>
                    </div>
                </div>
                {data3.productData3.map((item,index)=>{
                     return(
                        <ProductItem4
                        img={item.img}
                        desc={item.desc}
                        price={item.price}
                        star={item.star}
                        item={item}
                        key={index}
                        />
                    )
                })}
            </div>
            <div className="col-3">
                <img src={img40} alt="err" />
            </div>
        </div>
    </div>
</section>
{/* Section7 End */}

{/* Footer Start */}
<footer>
    <div className="start">
        <div className="container d-flex justify-content-between align-items-center py-2">
            <div className='d-flex justify-content-between align-items-center'>
                <FaTelegramPlane className='icon'/>
                <h5 className='ms-4 mt-2'>Sign up to Newsletter</h5>
            </div>
            <div>
                <p className='mt-3'>...and receive <b>$20 coupon for first shopping</b></p>
            </div>
            <div>
                <input className='py-2 px-3' type="email" placeholder='Enter your email address' />
                <button className='py-2 px-4'>SignUp</button>
            </div>
        </div>
    </div>
    <div className="container py-5">
        <div className="row">
            <div className="col-5">
                <svg version="1.1" x="0px" y="0px" width="175.748px" height="42.52px" viewBox="0 0 175.748 42.52" enable-background="new 0 0 175.748 42.52">
<ellipse class="ellipse-bg" fill-rule="evenodd" clip-rule="evenodd" fill="#FDD700" cx="170.05" cy="36.341" rx="5.32" ry="5.367"></ellipse>
<path fill-rule="evenodd" clip-rule="evenodd" fill="#333E48" d="M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056
C30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187
c0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731
c-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733
c-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725
c0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766
c0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277
c0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443
c-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z
M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0
c-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842
c-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381
c0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21
c-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z
M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9
c6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467
c-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563
C26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627
C17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056
c-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781
c-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508
c-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037
C61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686
c3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064
c-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007
c0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684
c2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952
c-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77
c0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967
C157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402
c-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612
c3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072
c0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846
c-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377
c5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z"></path>
                </svg>
                <div className="text1 d-flex mt-4">
                    <BiSupport className='icon1'/>
                    <div className="minitext ms-5">
                        <p>Got Questions ? Call us 24/7!</p>
                        <h5>(800) 8001-8588, (0600) 874 548</h5>
                    </div>
                </div>
                <div className="text2 mt-4">
                    <b>Contact Info</b>
                    <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
                <div className="icons d-flex justify-content-between">
                    <BsFacebook/>
                    <BsWhatsapp/>
                    <BsPinterest/>
                    <BsLinkedin/>
                    <BsInstagram/>
                    <AiFillYoutube/>
                </div>
            </div>
            <div className="col-4 mt-3">
                <b>Find It Fast</b>
                <div className="menu d-flex justify-content-between mt-3">
                    <ul>
                        <li><a href="#">Laptops & Computers</a></li>
                        <li><a href="#">Cameras & Photography</a></li>
                        <li><a href="#">Smart Phones & Tablets</a></li>
                        <li><a href="#">Video Games & Consoles</a></li>
                        <li><a href="#">TV & Audio</a></li>
                        <li><a href="#">Gadgets</a></li>
                        <li><a href="#">Waterproof Headphones</a></li>
                    </ul>
                    <ul >
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Compare</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Store Directory</a></li>
                    </ul>
                </div>
            </div> 
            <div className="col mt-3 d-flex flex-column align-items-center">
                <b className='ms-4'>Customer Care</b>
                <ul className='mt-3'>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Track your Order</a></li>
                    <li><a href="#">Customer Service</a></li>
                    <li><a href="#">Returns/Exchange</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Product Support</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="end py-2">
        <div className="container d-flex justify-content-between align-items-center">
            <p className='my-auto'>© <b>Electro</b> - All Rights Reserved</p>
            <img src={img30} alt="err" />
        </div>
    </div>
</footer> 
        
{/* Footer End */}
<BackToButton/>
    </div>
  )
}

export default Footer