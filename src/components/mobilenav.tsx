'use client'

import { useState } from 'react';
import { FaBars, FaTimes, FaBriefcase, FaCogs, FaHandsHelping, FaHome, FaInfoCircle, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface NavButtonProps {
    href: string;
    icon: React.ReactNode;
}

const NavButton = ({ href, icon }: NavButtonProps) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-2xl dark:text-white my-1 mr-4 w-12 h-12 dark:bg-purple-800 bg-pink-600 rounded-full flex items-center justify-center opacity-100 hover:opacity-80"
            whileHover={{ scale: 1.2 }}
        >
            {icon}
        </motion.a>
    );
};

const navButtons = [
    {
        href: "https://twitter.com/",
        icon: (
            <FaHome className='' />
        ),
    },
    {
        href: "https://github.com/",
        icon: (
            <FaInfoCircle />
        ),
    },
    {
        href: "https://github.com/",
        icon: (
            <FaLaptopCode />
        ),
    },
    {
        href: "https://github.com/",
        icon: (
            <FaCogs />
        ),
    },
    {
        href: "https://github.com/",
        icon: (
            <FaBriefcase />
        ),
    },
    {
        href: "https://github.com/",
        icon: (
            <FaHandsHelping />
        ),
    },
];

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden ">
            <button
                onClick={toggleMenu}
                className="my-4 ml-2 z-10 fixed dark:bg-purple-800 bg-pink-600 text-black dark:text-white inline-flex items-center justify-center p-3 rounded-full "
                aria-expanded={isOpen ? "true" : "false"}
            >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                    <FaTimes className="block h-5 w-5" aria-hidden="true" />
                ) : (
                    <FaBars className="block h-5 w-5" aria-hidden="true" />
                )}
            </button>
            {isOpen && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{  scale: 1 }}
                    transition={{
                        type: "keyframes"
                        
                    }}
                    className=" z-10 fixed top-14 left-0 right-0 bottom-0">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navButtons.map((button, index) => (
                            <NavButton key={index} href={button.href} icon={button.icon} />
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
}