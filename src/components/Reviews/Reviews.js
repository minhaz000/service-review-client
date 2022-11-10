import React, { useContext, useEffect, useState } from 'react';
import { RootContext } from '../../context/RootContext';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios'
function Reviews(props) {
  const {user,reLoad,setReLoad} = useContext(RootContext)
  const [review,setReview]  = useState([])
  const location = useLocation()
  const prams = useParams()

 useEffect(()=>{
  console.log( " new data get ")
 const   url = `http://localhost:5000/reviews?q=${prams.ID}`
 axios.get( url).then( res => { 
    setReview(res.data) 
    console.log( res.data)

 }) 
  },[reLoad])  
  return (<> 
            

    <div className=' px-10 mt-10 relative'>
          <Link to={`/add-review/${prams.ID}`} replace state={{from:location}} className=' btn btn-info text-white absolute right-0 '> add a review</Link>
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





        </> );
}

export default Reviews;