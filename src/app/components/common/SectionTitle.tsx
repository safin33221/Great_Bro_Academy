import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const SectionTitle = ({ title }: { title: string }) => {
    AOS.init();
    return (
        <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            {title}_
        </h2>
    );
};

export default SectionTitle;