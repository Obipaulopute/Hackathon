import React from 'react'
import { Link } from 'react-router-dom';

function AboutSite() {
  return (
    <div className='absolute top-18 bg-slate-300 w-full h-screen '>
        <div className='container m-auto'>
            <h2 className='text-xl py-20 font-semibold'>About Us </h2>
            <div>
             <ul>
                <Link to="/AboutLink"> The main function of this App </Link>
                <Link to="/"> Thin function of this App </Link>
             </ul>
             <h2>Who we are </h2>
            </div>
        </div>
    </div>
  )
}

export default AboutSite;