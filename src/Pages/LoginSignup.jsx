import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsighnup'>
        <div className="loginsighnup-container">
          <h1>Sign Up</h1>
          <div className="loginsighnup-fields">
            <input type='text' placeholder='Your Name'/>
            <input type='email' placeholder='Email Address'/>
            <input type='password' placeholder='PAssword'/>
          </div>
          <button>Continue</button>
          <p className='loginsighnup-login'>Already have an account <span>Login here</span></p>
          <div className="loginsighnup-agree">
            <input type='checkbox' name='' id=''/>
            <p>By continuing, you agree to be bound by these Terms of Service.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup
