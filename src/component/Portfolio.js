import React from 'react'
import ProjectApi from './ProjectApi'

import Footer from './Footer'


const Portfolio = () => {
  return (
    <div>
    <div className=" px-7 mt-4 cursor-pointer font-mulish">
     <h1 className="text-2xl text-center  mt-2 text-[#6b21a8] ">My Projects</h1>
     <div className="grid md:grid md:grid-cols-3 pb-6 mt-4">
     {
         ProjectApi.map((curElem)=>{
           return(
             <div className="  max-w-sm bg-white shadow-lg mt-4 mb-4 mx-auto px-10 py-5 rounded-md  border border-1 border-gray-300 hover:shadow-xl hover:-translate-y-2 hover:transition-all cursor-pointer " key={curElem.id}>
                 <img className="w-48 h-48 " src={curElem.image} alt="" />
       <h1 className='mt-4 text-center text-xl '>{curElem.name}</h1>
                 <div className='mt-5 mb-3 text-center ' >
                 <a href={curElem.link} target="_blank" className=" my-3 bg-[#6b21a8] py-2 px-4 rounded-full text-white text-sm text-center hover:bg-[#501f79] ">Click Here</a>

                 </div>


     </div>
           )
         })
         
       }
       </div>
     
   </div>
   <Footer/>
 </div>
  )
}

export default Portfolio;
