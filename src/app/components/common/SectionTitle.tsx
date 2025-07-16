import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {

    return (
        <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            {title}_    
        </h2>
    );
};

export default SectionTitle;