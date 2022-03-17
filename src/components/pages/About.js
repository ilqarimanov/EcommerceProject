import React,{useState} from 'react'

const About = () => {
  const [show1, setShow1]= useState(true)
  const [show2, setShow2]= useState(false)
  const [show3, setShow3]= useState(false)
  const [show4, setShow4]= useState(false)
  const [show5, setShow5]= useState(false)
  return (
    <div className='about'>
      <div className="aboutheader d-flex flex-column align-items-center justify-content-center">
        <h1>About Us</h1>
        <p>
          Passion may be a friendly or eager interest in or admiration for a proposal, cause, discovery, or activity or love to a feeling of unusual excitement.
        </p>
      </div>

      <div className="aboutsection1 py-5">
        <div className="container">
          <div className="row d-flex justify-content-between">
              <div className="col1 col-lg-4 col-md-5 col-11">
                  <div className="img1"></div>
                  <div className="text d-flex flex-column align-items-center justify-content-center">
                      <h5 className='py-4'>What we really do?</h5>
                      <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                  </div>
               </div>

               <div className="col1 col-lg-4 col-md-5 col-11">
                  <div className="img2"></div>
                  <div className="text d-flex flex-column align-items-center justify-content-center">
                      <h5 className='py-4'>Our Vision</h5>
                      <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                  </div>
              </div>

              <div className="col1 col-lg-4 col-md-5 col-11">
                  <div className="img3"></div>
                  <div className="text  d-flex flex-column align-items-center justify-content-center">
                      <h5 className='py-4'>History of Beginning</h5>
                      <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                  </div>
              </div>
          </div>
        </div>
      </div>

      <div className="aboutsection2 py-5 my-5">
        <div className="container">
          <div className="row d-flex justify-content-between">
             <div className="col-lg-2 col-md-4 col-11 my-4">
                <div className="img1"></div>
                <div className="text text-center">
                  <h5>Thomas Snow</h5>
                  <p>CEO/Founder</p>
                </div>
             </div>

             <div className="col-lg-2 col-md-4 col-11 my-4">
                <div className="img2"></div>
                <div className="text text-center">
                  <h5>Thomas Snow</h5>
                  <p>CEO/Founder</p>
                </div>
             </div>

             <div className="col-lg-2 col-md-4 col-11 my-4">
                <div className="img3"></div>
                <div className="text text-center">
                  <h5>Thomas Snow</h5>
                  <p>CEO/Founder</p>
                </div>
             </div>

             <div className="col-lg-2 col-md-4 col-11 my-4">
                <div className="img4"></div>
                <div className="text text-center">
                  <h5>Thomas Snow</h5>
                  <p>CEO/Founder</p>
                </div>
             </div>

             <div className="col-lg-2 col-md-4 col-11 my-4">
                <div className="img5"></div>
                <div className="text text-center">
                  <h5>Thomas Snow</h5>
                  <p>CEO/Founder</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="aboutsection3">
        <div className="container d-flex justify-content-between">
          <div className="row row1 d-flex justify-content-between">
            <div className='col-lg-6 col-md-10'>
              <div className="text">
                 <h5 className='mb-5'>What we really do?</h5>
                 <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.</p>
              </div>
              <div className="text py-3">
                 <h5 className='mb-5'>History of the Company</h5>
                 <p>Mauris rhoncus aliquet purus, a ornare nisi euismod in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam imperdiet eu metus vel ornare. Nullam in risus vel orci feugiat vestibulum. In sed aliquam mi. Nullam condimentum sollicitudin dui.</p>
              </div>
            </div>

            <div className='col-lg-6 col-md-10'>
                <div className="text">
                   <h5 className='mb-5'>Our Vision</h5>
                   <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur. Vestibulum velit nibh, egestas vel faucibus vitae.</p>
                </div>
                <div className="text py-3">
                   <h5  className='mb-5'>Cooperate with Us!</h5>
                   <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.</p>
                </div>
            </div>

          </div>

          <div className="row row2">
            <h5  className='mt-4 mb-3'>What can we do for you ?</h5>
            <div className='buttons'>
            <div>
                  <div className="button d-flex">
                     <button
                      onClick={()=>setShow1(
                        !show1, 
                        show2? setShow2(false) : null ,
                        show3? setShow3(false) : null ,
                        show4? setShow4(false) : null ,
                        show5? setShow5(false) : null 
                      )} 
                      style={{ backgroundColor: show1 ? '#fed700' : "#EFEFEF"}}>
                      {show1 ? <h4>-</h4> : <h4>+</h4>}
                    </button>
                     <p className='title'>Support 24/7</p>
                  </div>
                  {
                     show1 ? <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.</p> : null
                  }
            </div>

            <div>
                  <div className="button d-flex">
                     <button onClick={()=>
                      setShow2(!show2,
                        show1? setShow1(false) : null ,
                        show3? setShow3(false) : null ,
                        show4? setShow4(false) : null ,
                        show5? setShow5(false) : null 
                        )} 
                      style={{ backgroundColor: show2 ? '#fed700' : "#EFEFEF"}}>
                        {show2 ? <h4>-</h4> : <h4>+</h4>}
                      </button>
                     <p className='title'>Best Quality</p>
                  </div>
                  {
                     show2 ? <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.</p> : null
                  }
            </div>

            <div>
                <div className="button d-flex">
                     <button
                      onClick={()=>
                        setShow3(
                          !show3,
                          show1? setShow1(false) : null ,
                          show2? setShow2(false) : null ,
                          show4? setShow4(false) : null ,
                          show5? setShow5(false) : null 
                          )} 
                        style={{ backgroundColor: show3 ? '#fed700' : "#EFEFEF"}}>
                        {show3 ? <h4>-</h4> : <h4>+</h4>}
                     </button>
                     <p className='title'>Fastest Delivery</p>
                  </div>
                  {
                     show3 ? <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.</p> : null
                  }
            </div>

            <div>
                  <div className="button d-flex">
                     <button
                      onClick={()=>
                        setShow4(
                          !show4,
                          show1? setShow1(false) : null ,
                          show2? setShow2(false) : null ,
                          show3? setShow3(false) : null ,
                          show5? setShow5(false) : null 
                           )} 
                      style={{ backgroundColor: show4 ? '#fed700' : "#EFEFEF"}}>
                      {show4 ? <h4>-</h4> : <h4>+</h4>}
                    </button>
                     <p className='title'>Customer Care</p>
                  </div>
                  {
                     show4 ? <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.</p> : null
                  }
            </div>

            <div>
                  <div className="button d-flex">
                     <button
                      onClick={()=>
                      setShow5(
                        !show5, 
                        show1? setShow1(false) : null ,
                        show2? setShow2(false) : null ,
                        show3? setShow3(false) : null ,
                        show4? setShow4(false) : null 
                        )} 
                      style={{ backgroundColor: show5 ? '#fed700' : "#EFEFEF"}}>
                      {show5 ? <h4>-</h4> : <h4>+</h4>}
                    </button>
                     <p className='title'>Over 200 Satisfied Customers</p>
                  </div>
                  {
                     show5 ? <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.</p> : null
                  }
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About