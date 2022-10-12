import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div className='error w-full sm:h-full'>
            <h1 className='text-9xl pt-10 mt-10 text-red-400'>404</h1>
            <p className='text-2xl font-semibold'>This Page Is not found.</p>
        </div>
    );
};

export default Error;