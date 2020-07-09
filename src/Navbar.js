import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='px-1 pt-3 pb-1 flex flex-row sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between border-b-2 bg-flame-border-b'>
      <div className="flex">
        <i className='fa fa-code-branch mr-2 text-2xl text-green-500'></i>
        <a className=" text-black hover:text-black text-xl hover:no-underline" href="/">tuts</a>
      </div>
      <ul className="flex mt-1 justify-between">
      <li className="mr-6">
        <Link to='/write' className="text-green-500 hover:text-green-600 font-bold hover:no-underline hover:text-black" >Write</Link>
      </li>
      <li className="mr-6">
        <Link to='/' className="text-green-500 hover:text-green-600 font-bold hover:no-underline hover:text-black">Posts</Link>
      </li>
    </ul>
    </nav>
  )  
};
