import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {toast}from 'react-hot-toast'
import { RootContext } from '../../context/RootContext';

function Register(props) {
  const [userInfo,setUserInfo] =  useState({email:"",password:"",photo:"",name:""})
  const {EmailSingnUp,googleLogIn} = useContext(RootContext)
  const HandleChange =(e)=>{
    const name = e.target.name
    const value = e.target.value
    setUserInfo({...userInfo,[name]: value})
  }
  const HandleEmailSingnUp =(e)=>{
    e.preventDefault();
    EmailSingnUp(userInfo).then(res=>{
      toast.success("Sign Up  successful !!!")
    }).catch(err=>{ 
      toast.error(err.code)
    })
    
  }

  const HandleGoogle = (e)=>{
    e.preventDefault()
    googleLogIn().then( res=>{ 
      toast.success("Login successful !!!")
    })
    .catch(err=> toast.error(err.code))

  }
  return (<> {console.log(userInfo)}
  <h1 className='text-center text-5xl my-2'> Sign Up </h1>
    <div className=' grid grid-cols-2 '>
      <div> <img src="/img/Fingerprint (1).gif" alt="" /></div>

<form className=' self-center  px-10'>
  <label className="block w-3/4">
    <span className="block text-sm font-medium text-slate-700">Email</span>
    <input onChange={HandleChange} name="email" type="email"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
     
    "/>
  </label> 
   <label className="block w-3/4 mt-5">
    <span className="block text-sm font-medium text-slate-700">Password</span>
    <input onChange={HandleChange} name="password" type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
    "/>
  </label>
  <label className="block w-3/4 mt-5">
    <span className="block text-sm font-medium text-slate-700"> Display Name</span>
    <input onChange={HandleChange} name='name' type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
    "/>
  </label>
  <label className="block w-3/4 mt-5">
    <span className="block text-sm font-medium text-slate-700">Photo Url</span>
    <input onChange={HandleChange} name='photo' type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
    "/>
  </label>
    <button onClick={HandleEmailSingnUp} className='btn btn-success w-3/4 mt-10 text-white'> Sign up </button>
     <p className='capitalize mt-5'> already have an acount ? <Link className='text-blue-400' to='/login'> Login NOW </Link> </p>
    <button onClick={HandleGoogle} className='btn btn-error w-3/4 mt-5 text-white'><i className="fa-brands fa-google mr-4"></i> Sign UP With google  </button>
</form>
      
    </div></>
  );
}

export default Register;