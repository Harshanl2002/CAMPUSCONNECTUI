import logo from "../assets/Output.svg";
import "../index.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MyDrawer from "./drawer";


const Headers = () => {
    return (
      <div  className="min-w-full min-h-[10vh] shadow-xl flex items-center min-md:px-[8vw] justify-between overflow-clip">
        <div className="flex gap-5 text-xl transition-all max-md:hidden">
          <NavLink className={({ isActive }) => (isActive ? ' text-orange-400 transition-all' : 'text-black transition-all')} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-orange-400 transition-all' : 'text-black transition-all')} to="/about">About</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-orange-400 transition-all' : 'text-black transition-all')} to="/contact">Contact</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-orange-400 transition-all' : 'text-black transition-all')} to="/pricing">Pricing</NavLink>
        </div>
        <Link to={"/"} className="flex items-center min-w-fit ">
          <img src={logo} width={"50px"}/>
          <h2 className="mx-1 text-2xl anton text-[#ff8640] ">{"Campus".toLocaleUpperCase()}<span className="text-[#1e1e1e] mx-[2px]">{"Connect".toLocaleUpperCase()}</span></h2>
        </Link>
        <Link to={"/login"} className="max-md:hidden bg-orange-400 rounded-[5px] px-5 py-2 text-white shadow-xl font-sans font-semibold hover:bg-orange-600 hover:outline-1 hover:outline-orange-500">Login</Link>
        <div className="hidden max-md:block">
        <MyDrawer></MyDrawer>
        </div>
      </div>
    )
  }
  
  export default Headers