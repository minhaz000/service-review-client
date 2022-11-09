import React, { useState } from 'react';

function Reviews(props) {
  const [newReview, setNewReview] = useState({ userName:"",email:"" ,photo:"",message:""})

const HandeleOnChange= (event)=>{
    const name = event.target.name
    const value = event.target.value
    setNewReview({...newReview, [name]:value})
  }
const handleSubmit =()=>{
 console.log( " me is working ")
  }
  return (<> { console.log( newReview)}


    <div className=' px-10 mt-10 relative'>
          <label htmlFor="my-modal" className=' btn btn-info text-white absolute right-0 '> add reviwe</label>
          <div className="mt-16">

                  <div className="card w-100 bg-red-100 shadow-xl ">
                    <div className="card-body">
                      
                      <p>We are using cookies for no reason.</p>
                    </div>
                </div>
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
           <label className="block ">
            <span className="block text-sm font-medium text-slate-700">Photo</span>
            <input onChange={HandeleOnChange} type="text" name='photo'  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
            
            "/>
          </label> 
          <label className="block ">
            <span className="block text-sm font-medium text-slate-700">Email</span>
            <input onChange={HandeleOnChange} type="text" name='email'  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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