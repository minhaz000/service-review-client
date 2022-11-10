import React, { useState } from 'react';
import axios from 'axios'
import toast  from 'react-hot-toast';
function AddServices(props) {
  const [newService,setNewService] = useState({
    title:"", 
    message:"",
    photo:"",
    price:"",
   })
   const HandeleOnChange = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setNewService({...newService , [name] : value })

   }
   const handleSunmit= (e)=>{
    e.preventDefault();
  const url =`https://server-assignment-11.vercel.app/services`
  if(newService.title!==""){
    axios.post(url,{newService}).then( res=>{
      toast.success('Successfully Service Created !!!')
      e.target.reset() 
    }).catch(err=> toast.error(err.message ))
  }
  else { toast.error("Please fill from properly !!")}
    

   }

  return (
    <div> { console.log(newService)}
      <h1 className='text-center text-5xl my-2 mt-10'> Add Service  </h1>
    <div className=' grid grid-cols-2 '>
      <div> <img src="/img/Pipeline.svg" alt="" /></div>

<form className=' self-center  px-10' onSubmit={handleSunmit} >
  <label className="block w-3/4">
    <span className="block text-sm font-medium text-slate-700">Title</span>
    <input onChange={HandeleOnChange} type="text" name='title'  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
     
    "/>
  </label> 
   <label className="block w-3/4 mt-5">
    <span className="block text-sm font-medium text-slate-700">Message</span>
    
    <textarea onChange={HandeleOnChange} value={newService.message}  name='message' rows="5" cols="33" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
    ">  </textarea>
  </label>
  <label className="block w-3/4 mt-5">
    <span className="block text-sm font-medium text-slate-700">Price</span>
    <input onChange={HandeleOnChange}  name='price' type="number"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
    "/>
  </label>
  <label className="block w-3/4 mt-5">
    <span className="block text-sm font-medium text-slate-700">Photo Url</span>
    <input onChange={HandeleOnChange}  name='photo' type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
    "/>
  </label>
    <button className='btn btn-success w-3/4 mt-10 text-white'> Add Service </button>
    
</form>
      
    </div>
    </div>
  );
}

export default AddServices;