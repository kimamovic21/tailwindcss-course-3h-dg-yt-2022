import React from 'react';

const Rocket = ({imgSrc, imgAlt, title, sign, description}) => {
    return (
        <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black'>
            <img 
                src={imgSrc} 
                alt={imgAlt} 
                className='w-1/2 mb-6'
            />
            <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
                {title}
            </h3>
            <p className='hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2'>
                {sign}
            </p>
            <p className='sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                {description}
            </p>
        </li>
    );
};

export default Rocket;