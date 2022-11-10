import React from 'react';

function SideNav(props) {
  return (
    <div className=' bg-green-100 h-[100%] pt-5 ' >
      <div className=' sticky top-10'> 
      <img className=' w-[100px]   ml-auto px-5 ' src="/img/profile.jpg" alt="" />

      <p className='text-right px-5 mt-3'>pro photographer</p>

      <div className=''> 

      <ul className="menu fl mt-16 ">
  <li><a href='#home' className=' justify-center '>HOME</a></li>
  <li><a href='#serveices' className=' justify-center '>SERVICES</a></li>
  <li><a href='#about' className=' justify-center '>ABOUT</a></li>
  <li><a href='#contact' className=' justify-center '>CONTACT</a></li>
  
</ul>
      </div>
      </div>
    </div>
    
  );
}

export default SideNav;