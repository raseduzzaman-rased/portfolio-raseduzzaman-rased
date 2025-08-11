import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import SkillsSection from './SkillsSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div >
             <HeroSection></HeroSection>
           </div>
             <AboutMe></AboutMe>
             <SkillsSection></SkillsSection>
        </div>
    );
};

export default Home;