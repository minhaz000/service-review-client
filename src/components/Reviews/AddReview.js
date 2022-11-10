import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import { RootContext } from '../../context/RootContext';
import  axios  from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
function AddReview(props) {
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/services'
  const {user,setReLoad} = useContext(RootContext)
  const [serviceDetalis,setServiceDetalis] = useState([])
  const [newReview,setNewReview] = useState({
    userName:"", 
    message:"",
    photo:"",
    email:"",
    serveiceId:params.ID,
    
   })

   const HandeleOnChange= (event)=>{
    event.preventDefault();
      const name = event.target.name
      const value = event.target.value
      setNewReview({...newReview, [name]:value ,photo:user.photoURL,email:user.email ,userName:user.displayName , serveice:serviceDetalis[0] })
    }

    const handleSubmit =(e)=>{
      e.preventDefault()
      console.log( " me is working ");
       const url = `https://server-assignment-11.vercel.app/review`
       axios.post(url , {newReview}).then(res =>{
         console.log(res);
         toast.success(res.data.message);
         setReLoad(value=> !value)
         navigate(from , {replace:true})
         
       }).catch(error => toast.error(error.code))
       } 

 useEffect(()=>{ 
  const url = `http://localhost:5000/services?q=${params.ID}`
    axios.get(url).then(res=>{ 
      setServiceDetalis(res.data)
    })
 
 },[])      
  return (
    <div> { console.log(newReview)}
      <h1 className='text-center text-5xl my-2 mt-10'> Add Review  </h1>
    <div className=' grid grid-cols-2 '>
      <div> <img src="/img/Online Review-amico.png" alt="" /></div>

<form className=' self-center  px-10' onSubmit={handleSubmit}>
  <label className="block w-3/4">
    <span className="block text-sm font-medium text-slate-700">Display  Name</span>
    <input onChange={HandeleOnChange} type="text" value={user.displayName} disabled  name='userName'  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
     
    "/>
  </label> 
   <label className="block w-3/4 mt-5">
    <span className="block text-sm font-medium text-slate-700">Message</span>
    
    <textarea onChange={HandeleOnChange} value={newReview.message}  name='message' rows="5" cols="33" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
    ">  </textarea>
  </label>
  
    <button className='btn btn-success w-3/4 mt-10 text-white'> Add Review </button>
    
</form>
      
    </div>
    </div>
  );
}

export default AddReview;