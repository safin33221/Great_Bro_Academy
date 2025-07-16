import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-100 to-white dark:from-zinc-900 dark:to-zinc-800 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          We are <span className="text-orange-500">GreatBro Academy</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Empowering youth with real-world digital skills to thrive in the tech-driven future.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
