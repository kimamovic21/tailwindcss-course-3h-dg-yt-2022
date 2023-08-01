import React from 'react';
import Rocketman from '../assets/rocketman.png';
import Rocketride from '../assets/rocketride.png';
import Rocketlaunch from '../assets/rocketlaunch.png';
import Rocket from './Rocket';

const Rockets = () => {
    return (
        <section id='rockets' className='p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height'>
            <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
                Our Rockets
            </h2>
            <ul className='list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8'> 
                <Rocket 
                    imgSrc={Rocketman} 
                    imgAlt='Rocket man' 
                    title='Explorer'
                    sign='$' 
                    description='Affordable Exploration'
                />
                <Rocket 
                    imgSrc={Rocketride} 
                    imgAlt='Rocket ride' 
                    title='Adventurer'
                    sign='$$' 
                    description='Best Selling
                    Rocket!'
                />
                <Rocket
                    imgSrc={Rocketlaunch} 
                    imgAlt='Rocket launch' 
                    title='Infinity'
                    sign='$$$' 
                    description='Luxury Starship'
                />
            </ul>   
        </section>
    );
};

export default Rockets;