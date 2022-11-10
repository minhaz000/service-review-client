import React, { useContext, useEffect, useState } from 'react';
import { RootContext } from '../../context/RootContext';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { reload } from 'firebase/auth';
function Reviews(props) {
  const {user,reLoad,setReLoad} = useContext(RootContext)
  const [review,setReview]  = useState([])
  const [newReview, setNewReview] = useState({userName:"",email:"" ,photo:"",message:""})
  console.log( reLoad )
const HandeleOnChange= (event)=>{
  event.preventDefault();
    const name = event.target.name
    const value = event.target.value
    setNewReview({...newReview, [name]:value ,photo:user.photoURL,email:user.email})
  }
const handleSubmit =(e)=>{
 
 console.log( " me is working ");
  const url = `http://localhost:5000/review`
  axios.post(url , {newReview}).then(res =>{
    console.log(res);
    toast.success(res.data.message);
    setReLoad(value=> !value)
  }).catch(error => toast.error(error.code))
  } 
 useEffect(()=>{
  console.log( " new data get ")
 const   url = `http://localhost:5000/reviews`
 axios.get( url).then( res => { 
    setReview(res.data) 

 }) 
  },[reLoad])  
  return (<> 
            { console.log( review)}

    <div className=' px-10 mt-10 relative'>
          <label htmlFor="my-modal" className=' btn btn-info text-white absolute right-0 '> add reviwe</label>
          <div className="mt-16">
                 {review? review.map( item=>  { 
                  return( 
                  
              <div key={item._id} className="card w-100 bg-red-100 shadow-xl my-4"> 
                  <div className="card-body grid grid-cols-3">
                    <img className=' row-span-2  w-[50px] rounded-full' src={item.photo} alt="" />
                  <p className=' self-center '>{item.userName}  </p>  
                    <p className=' col-span-2 col-start-2'>{item.message}</p>
                  </div>
              </div>

                  )}) : " "
                  
                 }
                  
        </div>
        </div>




{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold  text-2xl text-center my-10">Add Your Review </h3>

    <form className=' px-10'>
            <label className="block ">
            <span className="block text-sm font-medium text-slate-700"> Review Message</span>
            <input onChange={HandeleOnChange} type="text" name='message'  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
            
            "/>
          </label> 
          <label className="block ">
            <span className="block text-sm font-medium text-slate-700">User Name</span>
            <input onChange={HandeleOnChange} type="text" name='userName'  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
            
            "/>
          </label>
          
      
    </form>


    <div className="modal-action">
      <label htmlFor="my-modal" onClick={handleSubmit} className="btn btn-success text-white">Submit </label>
    </div>
  </div>
</div>
        </> );
}

export default Reviews;