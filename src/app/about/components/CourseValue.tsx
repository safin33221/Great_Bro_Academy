import SectionTitle from '@/app/components/common/SectionTitle';
import React from 'react';
import { FaBookOpen, FaHandsHelping, FaBullseye } from 'react-icons/fa';

const CoreValues = () => {
  return (
    <section className="  py-2 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        <SectionTitle title='Our Core Values' />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"

            className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <FaBookOpen className="text-4xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Education for All</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe everyone deserves access to quality tech education, regardless of background.
            </p>
          </div>

          {/* Value 2 */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"

            className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <FaHandsHelping className="text-4xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Student Support First</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our students growth is our priority. We’re here to guide, support, and inspire.
            </p>
          </div>

          {/* Value 3 */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"

            className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <FaBullseye className="text-4xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Practical &gt; Theoretical</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We focus on real-world skills over theory, helping students build job-ready confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
