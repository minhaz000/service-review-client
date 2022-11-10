import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {Outlet} from 'react-router-dom'
import SideNav from '../components/SideNav';
function Layout(props) {
  return (
    <>

      <Header> </Header>
      <div className=" grid grid-cols-12 min-h-[80vh]">
         <div className='hidden md:block md:col-span-3 lg:col-span-2'><SideNav> </SideNav> </div> 
         <div className=" col-span-12 md:col-span-9 lg:col-span-10">  <Outlet ></Outlet></div>
      </div>  
      <Footer> </Footer>


    </>
  );
}

export default Layout;