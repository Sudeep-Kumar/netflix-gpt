import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkFormValidation } from '../utils/validateForm';

const Login = () => {
    const [isSignInForm, setSignInForm ]= useState(true);
    const [errorMessage, setErrorMessage] =useState(true);

    const email= useRef(null);
    const password= useRef(null);


    const toggleButtonPress=()=>{
        setSignInForm(!isSignInForm);
    }

    const handleButtonPress=()=>{

     console.log(email, password);
      
     const message = checkFormValidation(email.current.value, password.current.value);
      setErrorMessage(message);
     //console.log(message);


    }
  return (
    <div className=''>
        <Header/>
       <div className=' absolute'>
       <img  alt='body-logo' src='https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg' />
       </div >
     
       <form  onSubmit={(e)=>e.preventDefault()} className=' w-3/12  mx-auto  absolute  my-40 p-8  right-0 left-0  bg-black  text-white opacity-90 '>
        <h1 className=' text-2xl '>{isSignInForm?'Sign In':'Sign Up'}</h1>
        {!isSignInForm && (
             <input type='text' className=' rounded-lg p-2  my-2 w-full bg-gray-700' placeholder='Full Name'/>

        )
        }
        <input onChange={(e)=> setErrorMessage(null)}  ref={email} type='text' className=' p-2 my-2  w-full   bg-gray-700   rounded-lg'  placeholder='Email or mobile number'/>
        <input  onChange={(e)=> setErrorMessage(null)}   ref ={password} type='text' className='  rounded-lg p-2  my-2 w-full bg-gray-700' placeholder='Password'/>
        {errorMessage && (<p className='font-bold  p-2 text-red-500 ' >{errorMessage}</p>)}
        <button onClick={ handleButtonPress} className=' rounded-lg my-4 p-2 w-full bg-red-500 '>{isSignInForm?'SignIn':'SignUp'}</button> 
        <p onClick={toggleButtonPress} className='my-2' > {isSignInForm?'New to Netflix? SignUp now':'Already have account? SignIn '}</p>
       </form>
       </div>

      
  )
}

export default Login