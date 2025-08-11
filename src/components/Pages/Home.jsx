import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroSection from './HeroSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='pt-48 md:py-16'>
             <HeroSection></HeroSection>
           </div>
        </div>
    );
};

export default Home;