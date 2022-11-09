import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';

function Home(props) {
  return (
    <div className=''>
      <div className="  min-h-[80vh] px-10 bg-base-200 grid grid-cols-2">
  <div className=" self-center">
    <img src="/img/Fashion photoshoot-bro.svg" alt='' className=" rounded-lg " /> </div>

    <div className=' self-center'>
      <h1 className="text-2xl capitalize font-bold">Capture every precious moment with us </h1>
      <p className="py-6">Simply select your photo shoot package in almost any city and I will be there  shortly.</p>
      <a href='#serveices' className="btn btn-success text-white">Get Services</a>
    </div>
  
</div>

  
  <div id='serveices' className="divider text-3xl font-bold mt-10 ">Services</div>
  <Link to='services' className='btn btn-error text-white px-10  ml-auto absolute right-10'>Sell all </Link>
  
  
   <Services l="3" > </Services>

    </div>
  );
}

export default Home;