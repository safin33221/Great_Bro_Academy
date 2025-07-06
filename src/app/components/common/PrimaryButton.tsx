"use client"
import React from 'react';

interface PrimaryButtonProps {
    title: string;
}

const PrimaryButton = ({ title }: PrimaryButtonProps) => {
    return (

        <span className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 hover:brightness-110 transition-colors rounded text-white font-medium">
            {title}
        </span>

    );
};

export default PrimaryButton;