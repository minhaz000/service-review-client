import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { RootContext } from '../context/RootContext';

function Header(props) {
  const {user,LogOut} = useContext(RootContext)

  const HandleLogOut = (e)=>{
    e.preventDefault();
    LogOut().then( res=>{ 
      toast.success( " LogOut successful !!!")
    }).catch(err=> toast.error(err.code))

  }
  const handlePhoto = ()=>{
    toast(" Hello , " +user.displayName)
  }
  return ( 
    <div> {console.log(user)}
    
    <div className="navbar bg-base-100 px-10 py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 ml-0 shadow bg-base-100 rounded-box w-[200px] h-[100vh]">
        <li className=' bg-red-100'><a> Home </a></li>
        <li className=' bg-red-100'><a> Home </a></li>
        <li className=' bg-red-100'> 
          
        </li>
        
        
      </ul>
    </div>
    <Link to='/' className=" font-bold normal-case text-xl">Minhaz  <span className=' text-success '>  Rahman </span> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li> <Link to='/'> Home</Link> </li>
      <li> <Link to='/blog'> Blog</Link> </li>
      <li> <Link to='/add-services'>Add Service</Link> </li>
     { user ? <li> <Link to='/my-reviews'>My Reviews</Link> </li>:"" } 
     
     
      
    </ul>
  </div>
  <div className="navbar-end"> 
  { user ? <> <img onMouseOver={handlePhoto} className='h-[50px] rounded-full cursor-pointer mr-5' src={user.photoURL} alt="" />
  <span className=' mr-5'> {user.displayName}</span>
  </>
  : ""}

  {  user? <button onClick={HandleLogOut} className="btn btn-error text-white">Log OUT</button> : 
    <Link to='/login' className="btn btn-success text-white">Log In</Link>
  }
    
    
  </div>
</div>
    </div>
  );
}

export default Header;