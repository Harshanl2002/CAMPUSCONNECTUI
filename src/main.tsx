import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Errorpage from './pages/Errorpage';
import Layout from './components/Layout';
import Home from './pages/home';
import Student from './pages/student';
import Admin from './pages/admin';
import Login from './pages/Login';
import Register from './pages/register';
import Logout from './pages/logout';
import About from './pages/About';
import Contact from './pages/contact';
import Pricing from './pages/pricing';


const router=createBrowserRouter([{
  path:"/",
  errorElement:<Errorpage/>,
  element:<Layout/>,
  children:[
    {index:true,element:<Home/>},
    {path:"/student/",element:<Student/>},
    {path:"/admin/",element:<Admin/>},
    {path:"/Login",element:<Login/>},
    {path:"/register",element:<Register/>},
    {path:"/logout",element:<Logout/>},
    {path:"/about",element:<About/>},
    {path:"/contact",element:<Contact/>},
    {path:"/pricing",element:<Pricing/>}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
