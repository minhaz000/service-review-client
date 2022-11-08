import React from 'react';

function Services(props) {
  return (<> 
    <div className=' grid grid-cols-3 gap-4 my-10'>
      
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">Watch</button>
        </div>
      </div>
    </div>
      
    </div>
  <button className='btn btn-error text-white px-10 float-right mr-10 mb-20'> Sell all</button>
    </>
  );
}

export default Services;