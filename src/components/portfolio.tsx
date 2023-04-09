'use client'

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export type PortfolioItem = {
  title: string;
  description: string;
  imageSrc: string;
  liveDemoUrl: string;
  githubUrl: string;
};

export type PortfolioSliderProps = {
  items: PortfolioItem[];
};

const Portfolio: React.FC<PortfolioSliderProps> = ({ items }) => {

  const [showModal, setShowModal] = useState(false);
  // const [modalContent, setModalContent] = useState('');

  const handleClick = (url: string) => {
    if (!url) {
      setShowModal(true);
      // setModalContent('URL is missing');
    }
  }

  return (
    <div id='PortfolioSection' className='h-max  dark:bg-gray-700  '>
      <div className="pt-8 text-center mx-auto max-w-full lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">My Portfolio</h2>
        <p className="mt-2 text-lg leading-8 dark:text-gray-400 text-gray-500">See My Expertise in various technologys to grow your business</p>
      </div>

      <div className='flex pb-14 px-14 justify-around flex-wrap space-y-6'>

        {items.map(item => (
          <div key={item.githubUrl} className="mt-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={'500'}
              height={'500'}
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
              <div className='flex justify-evenly'>
                <Link href={item.liveDemoUrl}>
                  <button onClick={() => handleClick(item.liveDemoUrl)} className="inline-flex items-center p-4 text-sm font-medium text-center text-white dark:bg-purple-800 bg-pink-600 rounded-full dark:hover:bg-purple-600 hover:bg-pink-500 ">
                    <FaExternalLinkAlt className='text-2xl' />
                  </button>
                </Link>
                <Link href={item.githubUrl}>
                  <button onClick={() => handleClick(item.githubUrl)} className="inline-flex items-center p-4 text-sm font-medium text-center text-white dark:bg-purple-800 bg-pink-600 rounded-full dark:hover:bg-purple-600 hover:bg-pink-500 " >
                    <FaGithub className='text-2xl' />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white dark:bg-gray-700 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-lg leading-6 font-medium dark:text-white text-gray-900">
                      Error
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                      This Project is either Confidential by the client or for security purpose <br /> 
                      kindly reach me at farhanazizumrani95@gmail.com if you are somewhat interested in this project <br /> 
                      i will do my best to provide demo unless restricted by client <br /> 
                      Sorry for inconvenience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button onClick={() => setShowModal(false)} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white dark:bg-purple-800 dark:hover:bg-purple-600 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:text-sm">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;




