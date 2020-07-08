import React from 'react';

export default function Navbar() {
  return (
    <nav className='px-1 pt-3 pb-1 flex flex-row sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between border-b-2 border-gray-800 border-text-flame'>
      <div className="flex">
        <i className='fa fa-code-branch mr-2 text-2xl text-flame'></i>
        <a className=" text-black hover:text-black text-xl hover:no-underline" href="/">tuts</a>
      </div>
      <ul className="flex mt-1 justify-between">
      <li className="mr-6">
        <a className="text-flame font-bold hover:no-underline hover:text-black" href="/">Write</a>
      </li>
      <li className="mr-6">
        <a className="text-flame font-bold hover:no-underline hover:text-black" href="/">Posts</a>
      </li>
    </ul>
    </nav>
  )  
};
