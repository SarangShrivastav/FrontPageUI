import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from'../Assets/person.png'
import email_icon from'../Assets/email.png'
import password_icon from'../Assets/password.png'
import Validation from './Validation'

const LoginSignup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleInput(event) {
        const newObj = {...values, [event.target.name]: event.target.value}
        setValues(newObj)
    }

    const [errors, setErors] = useState({})

    function handleValidation(event) {
        event.preventDefault();
        setErors(Validation(values));
    }

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleValidation}>
      <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name='name' placeholder='Name' onChange={handleInput}/>
        </div>
        {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" name='email' placeholder='Email Id'  onChange={handleInput}/>
        </div>
        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" name='password' placeholder='Password'  onChange={handleInput}/>
        </div>
        {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

      </form>
      <div className="forget-password">Lost Password <span>Click Here!</span></div>
      
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
