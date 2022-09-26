import React from "react";
import Api from "./Api"
// import { useState } from "react";
import Web from "./Web";
import Footer from "./Footer";

const About = () => {
  // const [Education, setEducation] = useState(Api)
  
  return (
    <div className="font-mulish text-gray-600">
   
   <h1 className="text-2xl px-7  mt-2 text-[#6b21a8]"> About Me</h1>
      <div className=" px-7 text-xl mb-5 ">
        <h1>Umesh Jagannath Pawar</h1>
        <p>A/P- Mohi, Taluka- Khanapur, District - Sangli</p>
        <p>Mobile Number - 8600159396 / 9923511930</p>
        <p>Email- pawaruj01@gmail.com</p>
      </div>
      <hr />
      <Web/>
      <hr /> 
      <div className=" px-7">
        <h1 className="text-2xl text-center mt-4 text-[#6b21a8] ">Education Qualification</h1>
        <div className="grid md:grid md:grid-cols-3 pb-10 mt-4 ">
        {
            Api.map((curElem)=>{
              return(
                <div className="   max-w-sm bg-white shadow-lg mt-4  mx-auto px-10 py-5 rounded-md  border border-1 border-gray-300 hover:shadow-xl hover:-translate-y-2 hover:transition-all cursor-pointer" key={curElem.id}>
          <h1 className="text-xl text-gray-700">{curElem.class}</h1>
          <p>Percentage - {curElem.percentage}</p>
          <img className="w-48 h-48 mt-2" src={curElem.image} alt="" />

        </div>
              )
            })
            
          }
          </div>
        
      </div>
      <hr  />
      
    
      <Footer/>
    </div>
  );
};

export default About;
