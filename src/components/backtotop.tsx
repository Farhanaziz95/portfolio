'use client'

import { FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion';

export default function BacktoTop() {
    return (
        <motion.a
            href={'#toTop'}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-0 right-0 my-4 mr-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center opacity-80 hover:opacity-100"
            whileHover={{ scale: 1.1 }}
        >
            <FaArrowUp/>
        </motion.a>
    );
};