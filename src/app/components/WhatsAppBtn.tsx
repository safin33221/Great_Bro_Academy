"use client"
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppBtn = () => {
    const phoneNumber = '8801837429636'; // Replace with your WhatsApp number (country code + number)
    const message = 'Hello! I want to know more about your courses.'; // Optional default message

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={() => handleClick()}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition"
            >
                <FaWhatsapp className="text-xl" />
                Chat with Us
            </button>
        </div >
    );
};

export default WhatsAppBtn;
