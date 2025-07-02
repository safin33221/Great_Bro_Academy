import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            {title}_
        </h2>
    );
};

export default SectionTitle;