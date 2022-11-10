import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RootContext } from '../context/RootContext';

function PrivateRoute(props) {
  const location = useLocation()
  const {user,loading} = useContext(RootContext)
 if(loading){ return(
                     <div className=' grid h-screen place-items-center'>  <div>
                     <h1 className=' text-4xl font-bold text-center'>Loading</h1> 
                       <progress className="progress  w-[50vw]"></progress> </div>
                     </div>
                  )} 
  if(user){return props.children  }
  else{return <Navigate to='/login' state={{from:location}}  replace />  }
}

export default PrivateRoute;