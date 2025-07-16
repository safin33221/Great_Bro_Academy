/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import OurTeam from './components/OurTeam';
import AboutHero from './components/Hero.about';
import MissionAndVision from './components/MissionAndVision';
import CoreValues from './components/CourseValue';
import ContactInfo from './components/ContactInfo';


const page = () => {
    return (
        <div>
            <AboutHero />
            <MissionAndVision/>
            <CoreValues/>
            {/* <ContactInfo/> */}
            {/* <OurTeam /> */}
        </div>
    );
};

export default page;