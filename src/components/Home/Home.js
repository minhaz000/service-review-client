import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';

function Home(props) {
  return (
    <div className='' id='home'>
      <div className="  min-h-[80vh] px-10 bg-base-200 grid grid-cols-2">
  <div className=" self-center col-span-2 md:col-span-1">
    <img src="/img/Fashion photoshoot-bro.svg" alt='' className=" rounded-lg " /> </div>

    <div className=' self-center col-span-2 my-10  md:col-span-1 '>
      <h1 className="text-2xl capitalize font-bold">Capture every precious moment with us </h1>
      <p className="py-6">Simply select your photo shoot package in almost any city and I will be there  shortly.</p>
      <a href='#serveices' className="btn btn-success text-white">Get Services</a>
    </div>
  
</div>

  
  <div id='serveices' className="divider text-3xl font-bold mt-10 ">Services</div>
  <Link to='services' className='btn btn-error text-white px-10  ml-auto absolute right-10'>Sell all </Link>
  
  
   <Services l="3" > </Services>


    <div className=' min-h-screen bg-base-200' id='about'> 
      <h1 className=' text-5xl pt-10 text-center'> About Me </h1>
      <div className='aboutMe h-[150px] mx-10 mt-10'> 
      
      </div>
      <p className=' px-10 mt-20'> Confident and dedicated photographer with experience in both professional and freelance photography. Holds nearly 10 years of working experience with great variety in order to tackle any photography job quickly and effectively. Intimately familiar taking high quality digital photographs, including framing, selecting and setting up lighting, and determining advanced shutter and lens options. Prioritizes communication on the job to avoid errors. A candidate that combines a long professional career with dedicated freelance photography ideals and loyalty.</p>

    </div>
{/* ================================================================== */}
<div className="hero min-h-screen " id='contact'>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Me </h1>
      <p className="py-6">please fill the form and send me a message and i will reach you soon.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
        <span className="label-text">Message</span>
        <textarea value='Message' name='message' rows="5" cols="33" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
    ">  </textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  );
}

export default Home;