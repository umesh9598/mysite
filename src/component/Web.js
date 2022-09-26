import React from 'react'
// import { useState } from 'react'
import WebApi from './WebApi'

const Web = () => {
    // const [webCert, setWebCert] = useState(WebApi)
   
  return (
    <div>
       <div className=" px-7 mt-4 cursor-pointer">
        <h1 className="text-2xl text-center  mt-2 text-[#6b21a8]"> Web Development Certificates</h1>
        <div className="grid md:grid md:grid-cols-3 pb-10 mt-4">
        {
            WebApi.map((curElem)=>{
              return(
                <div className="  max-w-sm bg-white shadow-lg mt-4 mx-auto px-10 py-5 rounded-md  border border-1 border-gray-300 hover:shadow-xl hover:-translate-y-2 hover:transition-all cursor-pointer " key={curElem.id}>
          <h1 className='text-xl text-gray-700'>{curElem.class}</h1>
                    <img className="w-48 h-48 mt-2" src={curElem.image} alt="" />

        </div>
              )
            })
            
          }
          </div>
        
      </div>
    </div>
  )
}

export default Web;
