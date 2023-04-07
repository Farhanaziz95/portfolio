'use client'

import { FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion';

export default function BacktoTop() {
    return (
        <motion.a
            href={'#HeroSection'}
            className="z-10 fixed bottom-0 right-0 my-4 mr-4 w-12 h-12 dark:bg-purple-800 bg-pink-600 text-black text-2xl dark:text-white rounded-full flex items-center justify-center opacity-100 hover:opacity-80"
            whileHover={{ scale: 1.1 }}
        >
            <FaArrowUp/>
        </motion.a>
    );
};