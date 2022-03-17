import React from 'react';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdLocationPin, MdAttachEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <div class="contact">
		<div class="container">
			<section className="contactsection1">
			<div class="text-center py-5">
				<h2 class="heading-section">Contact Form</h2>
			</div>
			<div className="row d-flex justify-content-between align-items-center">
				<div className="col-lg-6 col-md-8">
					<h4>SEND US A MESSAGE</h4>
					<form>
						<div className='d-flex mt-4'>
							<div class="d-flex flex-column">
								<label htmlFor="name" className='ms-2'>Full Name</label>
								<input className='py-2 px-4 mt-2' type="text" id='name' placeholder='Name'/>
							</div>
							<div class="d-flex flex-column ms-4">
								<label htmlFor="email" className='ms-2'>Email Address</label>
								<input className='py-2 px-4 mt-2' type="email" id='email' placeholder='Email'/>
							</div>
						</div>
						<div class="d-flex flex-column mt-4">
							<label htmlFor='subject' className='ms-2' >Subject</label>
							<input className='py-2 px-4 mt-2 subject' type="text" id='subject' placeholder='Subject'/>
						</div>
						<div class="d-flex flex-column mt-4">
							<label htmlFor="message" className='ms-2'>Message</label>
							<textarea className='px-4 mt-2 py-2'  id="message" placeholder='Message'></textarea>
						</div>
						<button>Send Message</button>
					</form>
				</div>
				<div className="col-lg-6 col-md-8">
					<div className="mapouter">
						<div className="gmap_canvas">
							<iframe 
							id="gmap_canvas" 
							src="https://maps.google.com/maps?q=Azerbaijan%20Baku&t=&z=13&ie=UTF8&iwloc=&output=embed" 
							frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
							<a href="https://putlocker-is.org" />
							<br />
							<style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:650px;width:100%;}" }} />
							<a href="https://www.embedgooglemap.net"></a>
							<style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:650px;width:100%;}" }} />
						</div>
					</div>
				</div>
			</div>
			</section>
			<section className="contactsection2 my-5">
				<div className="row d-flex justify-content-between px-5">
					<div className='col-lg-4 col-md-7 d-flex flex-column align-items-center '>
						<div className="circle">
							<MdLocationPin/>
						</div>
						<p>198 West 21th Street, Suite 721 New York NY 10016</p>
					</div>
					
					<div className='col-lg-4 col-md-7 d-flex flex-column align-items-center '>
						<div className="circle">
							<BsFillTelephoneFill/>
						</div>
						<p>+ 1235 2355 98</p>
					</div>
					<div className='col-lg-4 col-md-7 d-flex flex-column align-items-center'>
						<div className="circle">
							<MdAttachEmail/>
						</div>
						<p>info@yoursite.com</p>
					</div>
				</div>

			</section>
		</div>
	</div>
  )
}

export default Contact