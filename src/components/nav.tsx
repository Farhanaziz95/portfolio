'use client'

// import { useState } from 'react'

import {FaBriefcase, FaCogs, FaHandsHelping, FaHome, FaInfoCircle, FaLaptopCode} from 'react-icons/fa'

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
    href: string;
    icon: React.ReactNode;
}


const Button = ({ href, icon }:ButtonProps) => {
    return (
        
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-2xl dark:text-white my-1 mr-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center opacity-80 hover:opacity-100"
                whileHover={{ scale: 1.2 }}
            >
                {icon}
            </motion.a>
        
    );
};

const buttons = [
    {
        href: "https://twitter.com/",
        icon: (
            <FaHome className=''/>
        ),
    },
    {
        href: "https://github.com/",
        icon: (
            <FaInfoCircle/>
        ),
    },
    {
        href: "https://github.com/",
        icon: (
            <FaLaptopCode/>
        ),
    },
    {
        href: "https://github.com/",
        icon: (
            <FaCogs/>
        ),
    },
    {
        href: "https://github.com/",
        icon: (
            <FaBriefcase/>
        ),
    },
    {
        href: "https://github.com/",
        icon: (
            <FaHandsHelping/>
        ),
    },
];

export default function NavBar() {
    return (
        <div className='z-10 fixed flex flex-col right-0 top-1/4'>
            {buttons.map((button, index) => (
                <Button key={index} href={button.href} icon={button.icon} />
            ))}
        </div>
    );
};
