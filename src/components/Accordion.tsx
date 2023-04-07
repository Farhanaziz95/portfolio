'use client'

import { FaCode, FaCodeBranch, FaCodepen, FaDatabase } from 'react-icons/fa'
import React, { useState } from 'react';
import { Variants, motion } from "framer-motion"

type InnerListItem = {
    id: number;
    innertitle: string;
    progress: number;
};

type AccordionItem = {
    title: string;
    subtitle: string;
    iconUrl: React.ReactNode; // new property to hold URL of icon image
    innerlist: InnerListItem[];
};

type AccordionProps = {
    item: AccordionItem;
};

const Accordion: React.FC<AccordionProps> = ({ item }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const accordionVariants: Variants = {
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        closed: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className={` dark:bg-gray-700 m-10 bg-white w-11/12 rounded-md mb-2 `}>
            <div
                className="flex justify-between px-4 py-2 cursor-pointer select-none"
                onClick={toggleAccordion}
            >
                <div className="flex items-center">
                    {/* <img src={item.iconUrl} alt="icon" className="h-6 w-6 mr-2" /> */}
                    {item.iconUrl}
                    <div>
                        <h3 className="dark:text-white text-black font-bold">{item.title}</h3>
                        <p className='dark:text-white text-black'>{item.subtitle}</p>
                    </div>
                </div>
                <svg
                    className={`fill-current text-gray-700 h-6 w-6 transition-transform transform ${isOpen ? "rotate-180" : ""
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M6 8l4 4 4-4"></path>
                </svg>
            </div>
            <motion.div
                className="px-4 overflow-hidden"
                variants={accordionVariants}
                animate={isOpen ? "open" : "closed"}
            >
                {item.innerlist.map((item) => (
                    <div key={item.id} className="mb-2">
                        <h4 className="dark:text-white text-black font-bold mb-1 flex justify-between items-center">
                            {item.innertitle}
                            <span className="text-gray-600 dark:text-slate-400 text-sm font-normal">
                                {item.progress}%
                            </span>
                        </h4>
                        <div className="bg-gray-300 dark:bg-slate-500 h-2 w-full rounded-full">
                            <div
                                className="dark:bg-purple-800 bg-pink-600 h-2 rounded-full"
                                style={{ width: `${item.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function AccordionList() {
    const AccordList: AccordionItem[] = [
        {
            title: 'Programming Languages',
            subtitle: 'Experience of Some Title',
            iconUrl: <FaCode  className='mr-5 text-2xl dark:text-purple-800 text-pink-600'/>, // example URL for placeholder image
            innerlist: [
                {
                    id: 1,
                    innertitle: 'PHP',
                    progress: 90
                },
                {
                    id: 1,
                    innertitle: 'Python',
                    progress: 85
                },
                {
                    id: 1,
                    innertitle: 'C++',
                    progress: 40
                },
                {
                    id: 1,
                    innertitle: 'JavaScript',
                    progress: 80
                },
                {
                    id: 1,
                    innertitle: 'TypeScript',
                    progress: 70
                }
            ]
        },
        {
            title: 'Database',
            subtitle: 'Experience of Another Title',
            iconUrl: <FaDatabase  className='mr-5 text-2xl dark:text-purple-800 text-pink-600'/>, // example URL for placeholder image
            innerlist: [
                {
                    id: 1,
                    innertitle: 'Neon',
                    progress: 10
                },
                {
                    id: 1,
                    innertitle: 'PostgreSQL',
                    progress: 30
                },
                {
                    id: 1,
                    innertitle: 'MySQL',
                    progress: 95
                },
                {
                    id: 1,
                    innertitle: 'Firebase',
                    progress: 85
                },
                {
                    id: 1,
                    innertitle: 'Prisma',
                    progress: 5
                }
            ]
        }
        ,
        {
            title: 'Front End',
            subtitle: 'Experience of Another Title',
            iconUrl: <FaCodepen  className='mr-5 text-2xl dark:text-purple-800 text-pink-600'/>, // example URL for placeholder image
            innerlist: [
                {
                    id: 1,
                    innertitle: 'HTML',
                    progress: 95
                },
                {
                    id: 1,
                    innertitle: 'CSS',
                    progress: 30
                },
                {
                    id: 1,
                    innertitle: 'Tailwind CSS',
                    progress: 0
                },
                {
                    id: 1,
                    innertitle: 'Chakra-UI',
                    progress: 0
                }

            ]
        },
        {
            title: 'Back End',
            subtitle: 'Experience of Another Title',
            iconUrl: <FaCodeBranch className='mr-5 text-2xl dark:text-purple-800 text-pink-600' />, // example URL for placeholder image
            innerlist: [
                {
                    id: 1,
                    innertitle: 'Next.JS',
                    progress: 95
                },
                {
                    id: 1,
                    innertitle: 'React',
                    progress: 30
                },
                {
                    id: 1,
                    innertitle: 'Node.JS',
                    progress: 0
                },
                {
                    id: 1,
                    innertitle: 'API',
                    progress: 0
                },
            ]
        }
    ];

    return (
        <>

            <div id='SkillSection' className='h-max  dark:bg-gray-700  '>
                <div className="pt-8 text-center mx-auto max-w-full lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">Skills</h2>
                    <p className="mt-2 text-lg leading-8 dark:text-gray-400 text-gray-500">See My Expertise in various technologys to grow your business</p>
                </div>
                <div className="w-full dark:bg-gray-700   pb-14 px-14 justify-items-center grid grid-cols-1 sm:grid-cols-2">
                    {AccordList.map(item => (
                        <Accordion
                            item={item}
                            key={item.title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

