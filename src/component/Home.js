import React from "react";
import { NavLink } from "react-router-dom";
import Bg from "../img/web.webp";



const Home = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 md:col-span-2 pt-20  font-mulish ">
        <div className="mx-auto">
          <img src={Bg} alt="" className="h-60  w-60 hover:   " />
        </div>
        <div className="text-center py-6 my-10 md:text-left md:my-10 text-gray-600 ">
          <p className=" text-2xl  ">Hello I'm</p>
          <h1 className="text-6xl font-bold text-[#2596be] mt-2">UMESH PAWAR</h1>
          <p className=" text-2xl mt-2 ">Front End Developer- React Js</p>
          <div className="mt-4 text-center">

          <NavLink to="/about"  className=" bg-blue-500  px-4 py-2 text-white mt-6 rounded-sm  hover:bg-blue-400 hover:text-white" >Hire Me</NavLink>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
