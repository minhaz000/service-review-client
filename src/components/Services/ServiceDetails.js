import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ServiceDetails(props) {
  const prams = useParams();
  const [service, SetService] = useState()

  useEffect(()=>{ 
    

    console.log(prams.ID)

   const url = `http://localhost:5000/services?q=${prams.ID}`
    axios.get(url).then(res=>{ 
       SetService(res.data)
    })
  },[])

  return (
    <div className=' px-10 '> { console.log(service)}
    { service? service.map(item=>{
      return ( 
        <div key={item._id} className="grid grid-cols-1 md:grid-cols-2 ">
{/* ====================Details Section =========================== */}
        <div className='sm:my-20  md:mt-10 '> 
              <img src={item.photo} className="sm:mt-10 md:mt-0" alt=" " />
              <h1 className='text-4xl mt-5'>{item.title}</h1>
              <p className=' font-bold my-5'> Price  :  $ <span className=' text-red-400'>{item.price}</span></p>          
              <p> { item.message} </p>
         </div>
{/* ======================= Review Section ========================== */}
        <div className=' px-10 mt-10 relative'>
          <button className=' btn btn-info text-white absolute right-0 '> add reviwe</button>
          <div className="mt-16">

                  <div className="card w-100 bg-red-100 shadow-xl ">
                    <div className="card-body">
                      
                      <p>We are using cookies for no reason.</p>
                    </div>
                </div>
        </div>
        </div>
       
          

          
        </div>
      )
    }) 
     
     :null}
    </div>
  );
}

export default ServiceDetails;