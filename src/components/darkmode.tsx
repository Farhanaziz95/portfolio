

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
            className="fixed top-0 right-0 my-4 mr-4 w-12 h-12 dark:bg-gray-800 bg-indigo-600 rounded-full flex items-center justify-center opacity-80 hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            onClick={handleToggleDarkMode}
        >
            {isDarkModeEnabled ? <FaSun className='text-yellow-700' /> : <FaMoon className='text-white'/>}
        </motion.button>
    );
}