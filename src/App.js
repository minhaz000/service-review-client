import React, { useContext } from 'react';
import { RootContext } from './context/RootContext';
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import Layout from './layout/Layout'
import Home from './components/Home/Home'
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Blog from './components/Pages/Blog';
import AddServices from './components/Services/AddServices';
function App(props) {
      const {user} = useContext(RootContext)

  const router = createBrowserRouter([
            {
              path: "/",
              element: <Layout> </Layout>,
              children:[
                {
                  path:"",
                  element:<Home> </Home>
                },
                {
                  path:"/blog",
                  element:<Blog></Blog> 
                },
                {
                  path:"/add-services",
                  element:<AddServices></AddServices>
                },
                 {
                  path:"/login",
                  element:<Login> </Login>
                }, 
                {
                  path:"/register",
                  element:<Register> </Register>
                },
              ]
            } 
  ])

  return (
    <div>
       

    <RouterProvider router={router} />     
    </div>
  );
}

export default App;