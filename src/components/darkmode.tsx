

'use client'

import { FaMoon, FaSun } from 'react-icons/fa';
import React, { useState } from 'react';

import { motion } from 'framer-motion';

export default function DarkMode() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

    function handleToggleDarkMode() {
        setIsDarkModeEnabled(prev => !prev);
        document.body.classList.toggle('dark')
    }

    return (
        <motion.button
            className="z-10 fixed top-0 right-0 my-4 mr-4 w-12 h-12 dark:bg-purple-800 bg-pink-600 rounded-full flex items-center justify-center opacity-100 hover:opacity-80"
            whileHover={{ scale: 1.1 }}
            onClick={handleToggleDarkMode}
        >
            {isDarkModeEnabled ? <FaSun className='text-white' /> : <FaMoon className='text-black'/>}
        </motion.button>
    );
}