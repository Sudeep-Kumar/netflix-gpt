import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setSignInForm ]= useState(true);

    const toggleButtonPress=()=>{
        setSignInForm(!isSignInForm);
    }
  return (
    <div className=''>
        <Header/>
       <div className=' absolute'>
       <img  alt='body-logo' src='https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg' />
       </div >
     
       <form className=' w-3/12  mx-auto  absolute  my-40 p-8  right-0 left-0  bg-black  text-white opacity-100 '>
        <h1 className=' text-2xl '>{isSignInForm?'Sign In':'Sign Up'}</h1>
        {!isSignInForm && (
             <input type='text' className=' rounded-lg p-2  my-2 w-full bg-gray-700' placeholder='Full Name'/>

        )
        }
        <input  type='text' className=' p-2 my-2  w-full   bg-gray-700   rounded-lg'  placeholder='Email or mobile number'/>
        <input type='text' className='  rounded-lg p-2  my-2 w-full bg-gray-700' placeholder='Password'/>
        <button className=' rounded-lg my-4 p-2 w-full bg-red-500 '>{isSignInForm?'SignIn':'SignUp'}</button>
        <p onClick={toggleButtonPress} className='my-2' > {isSignInForm?'New to Netflix? SignUp now':'Already have account? SignIn '}</p>
       </form>
       </div>

      
  )
}

export default Login