import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Contact Us</h3>

        <div className="flex flex-col items-center gap-3 text-gray-700 dark:text-gray-300 text-base mt-4">

          {/* Office Location */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-500" />
            <span>Feni, Bangladesh</span>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" />
            <a
              href="https://wa.me/8801600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              +880 1600 000 000
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:info@greatbroacademy.com" className="hover:underline">
              info@greatbroacademy.com
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default ContactInfo;
