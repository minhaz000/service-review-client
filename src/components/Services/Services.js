import axios from 'axios';
import React, { useEffect , useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function Services(props) {
  const location = useLocation()
  const [services,setServices] = useState([])
  useEffect(()=>{ 
   const url=`https://server-assignment-11.vercel.app/services?l=${props.l}`
    axios.get( url).then( res=>{ 
     setServices(res.data)
    })
  },[])
  

  return (<>  { console.log( services)}
    <div className=' grid grid-cols-3 gap-4 px-4 my-24'>
      
      { services? services.map(item => { 
        return(
          <div key={item._id} className=" col-span-3 md:col-span-2 lg:col-span-1 card card-compact  bg-base-100 shadow-xl">
          <figure><img className=' h-[250px]' src={item.photo} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.message}</p>
            <p className='font-bold '> Price:  ${item.price}</p>
            <div className="card-actions justify-end">
              <Link to={location.pathname === "/services" ?`${item._id}` :`services/${item._id} `} className="btn btn-success text-white px-6">show details </Link>
            </div>
          </div>
        </div>
      )}) :null }
    
      
    </div>
    </>
  );
}

export default Services;