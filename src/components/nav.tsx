'use client'

import {FaBriefcase, FaCogs, FaHandsHelping, FaHome, FaInfoCircle, FaLaptopCode} from 'react-icons/fa'

import { motion } from 'framer-motion';

interface ButtonProps {
    href: string;
    icon: React.ReactNode;
}


const Button = ({ href, icon }:ButtonProps) => {
    return (
        
            <motion.a
                href={href}
                // target="_blank"
                // rel="noopener noreferrer"
                className="text-black text-2xl dark:text-white my-1 mr-4 w-12 h-12 dark:bg-purple-800 bg-pink-600 rounded-full flex items-center justify-center opacity-100 hover:opacity-80"
                whileHover={{ scale: 1.2 }}
            >
                {icon}
            </motion.a>
        
    );
};

const buttons = [
    {
        href: "#HeroSection",
        icon: (
            <FaHome className=''/>
        ),
    },
    {
        href: "#AboutSection",
        icon: (
            <FaInfoCircle/>
        ),
    },
    {
        href: "#SkillSection",
        icon: (
            <FaLaptopCode/>
        ),
    },
    {
        href: "#ServiceSection",
        icon: (
            <FaCogs/>
        ),
    },
    {
        href: "#PortfolioSection",
        icon: (
            <FaBriefcase/>
        ),
    },
    {
        href: "#ContantSection",
        icon: (
            <FaHandsHelping/>
        ),
    },
];

export default function NavBar() {
    return (
        <div className='max-md:hidden z-10 fixed flex flex-col right-0 top-1/4'>
            {buttons.map((button, index) => (
                <Button key={index} href={button.href} icon={button.icon} />
            ))}
        </div>
    );
};
