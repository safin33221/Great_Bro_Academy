import React from 'react';


const MissionAndVision = () => {
  return (
    <section className="bg-gray-50 dark:bg-zinc-950 py-20 px-4 space-y-24">

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            To make quality tech education accessible for every student in Bangladesh — empowering them to learn, grow, and thrive in the digital era.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          {/* <Image width={100} height={100} src={missionImg.src} alt="Our Mission" className="rounded-xl shadow-md w-full" /> */}
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            To become the leading online platform for practical skill development in South Asia — building the future with empowered creators and innovators.
          </p>
        </div>
        {/* Image width={100} height={100} */}
        <div className="md:w-1/2">
          {/* <Image width={100} height={100} src={visionImg.src} alt="Our Vision" className="rounded-xl shadow-md w-full" /> */}
        </div>
      </div>

    </section>
  );
};

export default MissionAndVision;
