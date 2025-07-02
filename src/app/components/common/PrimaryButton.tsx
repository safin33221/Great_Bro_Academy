"use client"
import React from 'react';

interface PrimaryButtonProps {
    title: string;
}

const PrimaryButton = ({ title }: PrimaryButtonProps) => {
    return (

        <span className="mt-4 px-6 py-2 bg-primary transition-colors rounded text-white font-medium">
            {title}
        </span>
    );
};

export default PrimaryButton;