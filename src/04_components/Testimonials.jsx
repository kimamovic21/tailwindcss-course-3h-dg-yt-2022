import React from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
    return (
        <section id='testimonials' className='p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height'>
            <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
                Testimonials
            </h2>
            <Testimonial 
                text="Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. 
                Life-long costomer! A++ shopping experience." 
                author="Wile E. Coyote, Genius"
            />
            <Testimonial 
                text="The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several
                      occassions.This makes me very, very angry! Nevertheless, K-9
                      and I have awarded Acme the
                      Martian contract for space exploration rockets based on Acme's quality and sturdy designs."
                author="Marvin The Martian &amp; K-9"
            />
            <Testimonial 
                text="I knew I not only wanted &#8212; I needed &#8212; Acme's Infinity
                      Rocket for my mission in space. Acme delivered in one day! Nothing says Take me
                      to your leader like Acme's Infinity Rocket!💯"
                author="Buzz Lightyear"
            />
        </section>
    );
};

export default Testimonials;