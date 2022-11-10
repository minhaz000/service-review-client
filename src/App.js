import React, { useContext } from 'react';
import  { Toaster } from 'react-hot-toast';
import { RootContext } from './context/RootContext';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './layout/Layout'
import Home from './components/Home/Home'
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Blog from './components/Pages/Blog';
import AddServices from './components/Services/AddServices';
import AddReview from './components/Reviews/AddReview';
import AllServices from './components/Services/AllServices';
import ServiceDetails from './components/Services/ServiceDetails';
import PrivateRoute from './private/PrivateRoute';
function App(props) {
   

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
                  path:"/add-review",
                  element:<AddReview></AddReview>
                },
                {
                  path:"/services",
                  element:<AllServices> </AllServices>
                },
                {
                  path:"/services/:ID",
                  element: <ServiceDetails> </ServiceDetails>
                },
                {
                  path:"/add-services",
                  element: <PrivateRoute> <AddServices></AddServices></PrivateRoute>
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
    <Toaster />   
    </div>
  );
}

export default App;