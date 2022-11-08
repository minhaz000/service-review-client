import React from 'react';
import Services from './Services';

function Home(props) {
  return (
    <div className=''>
      <div className="  min-h-[80vh] px-10 bg-base-200 grid grid-cols-2">
  <div className=" self-center">
    <img src="/img/Fashion photoshoot-bro.svg" alt='' className=" rounded-lg " /> </div>

    <div className=' self-center'>
      <h1 className="text-2xl capitalize font-bold">Capture every precious moment with us </h1>
      <p className="py-6">Simply select your photo shoot package in almost any city and I will be there  shortly.</p>
      <button className="btn btn-success text-white">Get Services</button>
    </div>
  
</div>

  
  <div className="divider text-3xl font-bold mt-10 ">Services</div>
  
   <Services> </Services>

    </div>
  );
}

export default Home;