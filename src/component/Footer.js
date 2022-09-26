import React from 'react'


const Footer = () => {
  return (
    <div>
      <div className='text-center py-3 shadow-inner bg-gray-50 px-5 font-mulish'>
        <div className='flex items-center justify-center px-2'>
        <h1 className='  text-center uppercase font-extrabold text-2xl font-sans text-[#6b21a8] '>UP</h1>
        <p className='text-gray-600 px-3'>Copyright &copy;2022</p>
        </div>
        <div className='text-xl text-center'>
          <a href="https://www.facebook.com/UmeshPawar9598/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-square-facebook px-3 hover:-translate-y-1 hover:scale-110  duration-300 text-blue-900"></i>
          </a>
          <a href="https://www.instagram.com/umesh__9598/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram px-3 hover:-translate-y-1 hover:scale-110  duration-300 text-[#e84393]"></i>
          </a>
          <a href="https://twitter.com/itsumeshpawar" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-twitter px-3 hover:-translate-y-1 hover:scale-110  duration-300 text-[#0097e6]"></i>
          </a>
         <a href="https://www.linkedin.com/in/umesh-pawar-4b635323a/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin hover:-translate-y-1 hover:scale-110  duration-300 text-[#0a66c2]"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
