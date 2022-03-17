import React from 'react'
import { Link } from 'react-router-dom'
import {TiTick} from 'react-icons/ti'

const Account = () => {
  return (
    <div className='account'>
        <div className="link d-flex align-items-center justify-content-center">
            <Link to="/" className='link1'>Home / </Link>
            <p className='link2'> My Account</p>
        </div>
        <div className="container py-5">

        <div className='row d-flex justify-content-between'>
            <div className="col-5 login">
                <h1 className='mb-3'>Login</h1>
                 <div className="line">
                     <hr />
                     <div className="line2"></div>
                </div>
                <p>Welcome back! Sign in to your account.</p>
                <form className='d-flex flex-column'>
                    <label htmlFor='name'>Username or email address * </label>
                    <input className='input' type="text" id='name' />
                    <label htmlFor="password">Password *</label>
                    <input className='input' type="password"  id='password'/>
                    <div className='py-3'><input type="checkbox" /> Remember me</div>
                    <button>Log in</button>
                    <p className='mt-2'>Lost you password?</p>
                   
                </form>
            </div>
            <div className="col-5 register">
                <h1 className='mb-3'>Register</h1>
                 <div className="line">
                     <hr />
                     <div className="line2"></div>
                </div>
                <p>Create new account today to reap the benefits of a personalized shopping experience.</p>
                <form className='d-flex flex-column'>
                    <label htmlFor='name'>Username * </label>
                    <input className='input' type="text" id='name' />
                    <label htmlFor='email'>Email address * </label>
                    <input className='input' type="email" id='email' />
                    <label htmlFor="password">Password *</label>
                    <input className='input' type="password"  id='password'/>
                    <p className='py-2'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    <button>Register</button>
                    <div className="end mt-3">
                        <h6>Sign up today and you will be able to :</h6>
                        <p className='mt-4'> <TiTick className='icon'/> Speed your way through checkout</p>
                        <p>  <TiTick className='icon'/>Track your orders easily</p>
                        <p>  <TiTick className='icon'/>Keep a record of all your purchases</p>
                    </div>
                   
                </form>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Account