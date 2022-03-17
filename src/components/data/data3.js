import img31 from '../../assets/img/img31.png'
import img32 from '../../assets/img/img32.png'
import img33 from '../../assets/img/img33.png'
import img34 from '../../assets/img/img34.png'
import img35 from '../../assets/img/img35.png'
import img36 from '../../assets/img/img36.png'
import img37 from '../../assets/img/img37.png'
import img38 from '../../assets/img/img38.png'
import img39 from '../../assets/img/img39.png'
import {AiFillStar} from 'react-icons/ai'

const data3 = {
    productData1:[
        {
            id:1,
            img:img31,
            desc: 'Tablet Thin EliteBook Revolve 810 G6',
            star: <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>,
            price: '$1,300.00'
        },
        {
            id:2,
            img:img32,
            desc: 'Notebook Widescreen Z51-70 40K6013UPB',
            star: <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>,
            price: '$1,100.00'
        },
        {
            id:3,
            img:img33,
            desc: 'Smartphone 6S 128GB LTE',
            price: <div className='d-flex'> <p style={{color: "red"}}>$750.00</p> <del className='ms-2'>$780.00</del> </div>
        }
    ],
    productData2:[
        {
            id:1,
            img:img34,
            desc: 'Game Console Controller + USB 3.0',
            price:  <div className='d-flex'> <p style={{color: "red"}}>$79.00</p> <del className='ms-2'>$99.00</del> </div>
        },
        {
            id:2,
            img:img35,
            desc: 'Wireless Audio System Multiroom 360',
            price:  '$2,299.00'
        },
        {
            id:3,
            img:img36,
            desc: 'Tablet Red EliteBook Revolve 810 G2',
            star: <div><AiFillStar/><AiFillStar/><AiFillStar/></div>,
            price: <div className='d-flex'> <p style={{color: "red"}}>$2,100.00</p> <del className='ms-2'>$2,299.00</del> </div>
        }
    ],
    productData3:[
        {
            id:1,
            img:img37,
            desc: 'Ultrabook UX305CA-FC050T',
            star: <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>,
            price: <div className='d-flex'> <p style={{color: "red"}}>$1,200.00</p> <del className='ms-2'>$1,218.00</del> </div>
        },
        {
            id:2,
            img:img38,
            desc: 'Smartwatch 2.0 LTE Wifi Waterproof',
            star: <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>,
            price: <div className='d-flex'> <p style={{color: "red"}}>$700.00</p> <del className='ms-2'>$725.00</del> </div>
        },
        {
            id:3,
            img:img39,
            desc: 'Powerbank 1130 mAh Blue',
            price: <div className='d-flex'> <p style={{color: "red"}}>$200.00</p> <del className='ms-2'>$210.00</del> </div>
        }
    ],
};
export default data3;