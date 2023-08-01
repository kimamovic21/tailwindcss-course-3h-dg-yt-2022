import React from 'react';
import './App03.css';
import Header from './Header';
import Hero from './Hero';
import Rockets from './Rockets';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const App03 = () => {
    return (
        <div className='min-h-screen bg-slate-50 dark:bg-black dark:text-white'>
            <Header />
            <main className='max-w-4xl mx-auto'>
                <Hero />
                <hr className='mx-auto bg-black dark:bg-white w-1/2'/>
                <Rockets />
                <hr className='mx-auto bg-black dark:bg-white w-1/2'/>
                <Testimonials />
                <hr className='mx-auto bg-black dark:bg-white w-1/2'/>
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App03;