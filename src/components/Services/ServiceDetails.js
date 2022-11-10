import axios from 'axios';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import  {Helmet}from 'react-helmet'


function ServiceDetails(props) {
  const prams = useParams();
  const [service, SetService] = useState()

  useEffect(()=>{ 
    

   

   const url = `https://server-assignment-11.vercel.app/services?q=${prams.ID}`
    axios.get(url).then(res=>{ 
       SetService(res.data)
    })
  },[])

  return (
    <div className=' px-10 '> <Helmet> <title> Minhaz  || Service</title> </Helmet>
    { service? service.map(item=>{
      return ( 
        <div key={item._id} className="grid grid-cols-1 md:grid-cols-2 ">
{/* ====================Details Section =========================== */}
        <div className='sm:my-20  md:mt-10 '> 
              <PhotoProvider>
                      <PhotoView src={item.photo}>
                        <img src={item.photo} alt="" />
                      </PhotoView>
              </PhotoProvider>
              
              <h1 className='text-4xl mt-5'>{item.title}</h1>
              <p className=' font-bold my-5'> Price  :  $ <span className=' text-red-400'>{item.price}</span></p>          
              <p> { item.message} </p>
         </div>
{/* ======================= Review Section ========================== */}
       
  <Reviews></Reviews> 
       
        </div>
      )
    }) 
     
     :null}
    </div>
  );
}

export default ServiceDetails;