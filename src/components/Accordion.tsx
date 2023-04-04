'use client'

import React, { useState } from 'react';

type InnerListItem = {
    id: number;
    innertitle: string;
    progress: number;
};

type AccordionItem = {
    title: string;
    subtitle: string;
    iconUrl: string; // new property to hold URL of icon image
    innerlist: InnerListItem[];
};

type AccordionProps = {
    item: AccordionItem;
};

function Accordion({ item }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleAccordion() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="bg-gray-200 rounded-md mb-2">
            <div className="flex justify-between px-4 py-3 cursor-pointer select-none" onClick={toggleAccordion}>
                <div className="flex items-center">
                    <img src={item.iconUrl} alt="icon" className="h-6 w-6 mr-2" />
                    <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </div>
                </div>
                <svg className={`fill-current text-gray-700 h-6 w-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4"></path></svg>
            </div>
            <div className={`px-4 transition-all duration-700 ease-in-out ${isOpen ? '' : 'hidden'}`}>
                {item.innerlist.map(item => (
                    <div key={item.id} className="mb-2">
                        <h4 className="font-bold mb-1 flex justify-between items-center">
                            {item.innertitle}
                            <span className="text-gray-600 text-sm font-normal">{item.progress}%</span>
                        </h4>
                        <div className="bg-gray-300 h-2 w-full rounded-full">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${item.progress}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function AccordionList() {
    const AccordList: AccordionItem[] = [
        {
            title: 'Some Title',
            subtitle: 'Experience of Some Title',
            iconUrl: 'https://via.placeholder.com/30', // example URL for placeholder image
            innerlist: [
                {
                    id: 1,
                    innertitle: 'HTML',
                    progress: 90
                },
                {
                    id: 1,
                    innertitle: 'CSS',
                    progress: 80
                },
                {
                    id: 1,
                    innertitle: 'JavaScript',
                    progress: 70
                }
            ]
        },
        {
            title: 'Another Title',
            subtitle: 'Experience of Another Title',
            iconUrl: 'https://via.placeholder.com/30', // example URL for placeholder image
            innerlist: [
                {
                    id: 1,
                    innertitle: 'React',
                    progress: 95
                },
                {
                    id: 1,
                    innertitle: 'Node.js',
                    progress: 85
                },
                {
                    id: 1,
                    innertitle: 'MongoDB',
                    progress: 75
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col">
            {AccordList.map(item => (
                <Accordion
                    item={item}
                    key={item.title}
                />
            ))}
        </div>
    );
}

