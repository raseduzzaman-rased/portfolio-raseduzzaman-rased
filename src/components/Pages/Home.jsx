import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import SkillsSection from './SkillsSection';
import MyExperience from './MyExperience';

import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div >
             <HeroSection></HeroSection>
           </div>
             <AboutMe></AboutMe>
             <SkillsSection></SkillsSection>
             <MyExperience></MyExperience>
        <ProjectsSection></ProjectsSection>
        <EducationSection></EducationSection>
        </div>
    );
};

export default Home;