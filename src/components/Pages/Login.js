import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RootContext } from '../../context/RootContext';

function Login(props) {
  const [userInfo,setUserInfo] =  useState({email:"",password:""})
  const {googleLogIn,EmailLogIn} = useContext(RootContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  console.log(from)
  const HandleChange =(e)=>{
              const name = e.target.name 
              const value = e.target.value
              setUserInfo({...userInfo,[name]:value})
  }
  const HandleEmailLongIN = (e)=>{
    e.preventDefault()
    EmailLogIn(userInfo.email,userInfo.password).then(res=>{
      toast.success("Login successful !!!"); 
      navigate(from,{replace :true})
    }).catch(error=>{ toast.error(error.code)})

  }
  const HandleGoogle = (e)=>{
    e.preventDefault()
    googleLogIn().then(res=>{ 
      toast.success("Login successful !!!");
      navigate(from, {replace:true})
    }).catch(err=> toast.error( err.code))
  }
  return (<> { console.log( userInfo)}
  <h1 className='text-center text-5xl my-2'> LogIn</h1>
    <div className=' grid grid-cols-2 '>
      <div> <img src="/img/Mention.gif" alt="" /></div>

<form className=' self-center  px-10'>
  <label className="block w-3/4">
    <span className="block text-sm font-medium text-slate-700">Email</span>
    <input onChange={HandleChange} name='email' type="email"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
     
    "/>
  </label> 
   <label className="block w-3/4 mt-5">
    <span className="block text-sm font-medium text-slate-700">Password</span>
    <input onChange={HandleChange} name='password' type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
    "/>
  </label>
    <button onClick={HandleEmailLongIN} className='btn btn-success w-3/4 mt-10 text-white'> Login </button>
     <p className='capitalize mt-5'> dont have an acount ? <Link className='text-blue-400' to='/register'> Resiter NOW </Link> </p>
    <button onClick={HandleGoogle} className='btn btn-error w-3/4 mt-5 text-white'><i className="fa-brands fa-google mr-4"></i> Continue With google  </button>
</form>
      
    </div> </>
  );
}

export default Login;