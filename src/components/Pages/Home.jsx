import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import SkillsSection from './SkillsSection';
import MyExperience from './MyExperience';

import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div >
             <HeroSection></HeroSection>
           </div>
             <AboutMe></AboutMe>
        <EducationSection></EducationSection>
             <SkillsSection></SkillsSection>
             <MyExperience></MyExperience>
        <ProjectsSection></ProjectsSection>
        <Contact></Contact>
        </div>
    );
};

export default Home;