import React from 'react'
import {useEffect, useState} from 'react';
import {GrLinkTop} from 'react-icons/gr'

function BackToButton(){
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div>
        {backToTopButton && (
            <button className=' up d-flex align-items-center justify-content-center'
            onClick={scrollUp}
            >
                <GrLinkTop className='upicon'/>
            </button>
        )}
    </div>
  )
}

export default BackToButton