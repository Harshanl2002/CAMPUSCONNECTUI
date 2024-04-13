import { Outlet } from "react-router";
import Headers from "./Header";
import Footer from "./Footer";


const Layout = () => {
    return (
      <div>
        <Headers/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  
  export default Layout