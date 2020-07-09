import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center mt-16'>
            <section class="error-container">
                           <span>4</span>
                <span><span class="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <section className='text-center'>
                <p className='font-semibold text-monospace'>Yikes! this is embarrassing</p>
                <Link to='/' className=' underline  cursor-pointer text-green-500 hover:text-red-500 text-monospace'>Go back </Link>
            </section>
        </div>
    )
};
