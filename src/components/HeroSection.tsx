/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image';
import TypedComponent from './TypedComponent';

export default function HeroSection() {

    return (
        <section id='HeroSection' style={{ backgroundImage: 'url(/bghero.jpg)' }} className=" bg-cover bg-center bg-no-repeat bg-fixed dark:invert dark:bg-gray-900">
            <div className=" dark:invert grid max-w-screen-xl px-20 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hi, I'm <br /><span className='text-pink-600 dark:text-purple-800'> Farhan Aziz Umrani</span> <TypedComponent /> </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">As a highly skilled and experienced full stack developer, I offer comprehensive solutions for web development projects, ranging from front-end design to back-end database integration, ensuring seamless functionality and user-friendly interfaces.</p>
                    <a href="/MyCV.pdf" target='_blank' className="text-black dark:text-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Download My CV
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#ContantSection" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Hire Me
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        src="/q.png"
                        alt="mockup"
                        width={1600}
                        height={900}
                        />
                </div>
            </div>
        </section>
    );
};