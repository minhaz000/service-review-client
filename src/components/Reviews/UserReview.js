import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { RootContext } from '../../context/RootContext';

function UserReview(props) {
  const {user} = useContext(RootContext)
  const [myReviews,setMyReviews] = useState()
  

  useEffect(()=>{ 
   const  url = `https://server-assignment-11.vercel.app/my-reviews?email=${user.email}`
   axios.get(url).then(res=>{ 
    setMyReviews(res.data)
    console.log(res)
   }) 
  },[])
  return (
    <div className=' my-16 px-10'>
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Service id</th>
        <th>Service</th>
        <th>Review</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
       { myReviews?  myReviews.map((item,i)=> {
        return( 
      <tr key={item._id} className={i%2===0? '':'active' }>
        <th>{i+1}</th>
        <td>{item.serveice._id}</td>
        <td>{item.serveice.title}</td>
        <td>{item.message}</td>
        <td> <button className='btn btn-info text-white px-6'> Edit </button> <button className='btn btn-error text-white'> Delete </button> </td>
      </tr>
        )}) : null
       }
      
     
    </tbody>
  </table>
</div>
    </div>
  );
}

export default UserReview;