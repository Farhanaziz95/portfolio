'use client'

import React, { ReactNode, useState } from 'react'

import { FaCheckCircle } from 'react-icons/fa'

type CardProps = {
    title: string
    content: string
    icon: ReactNode
    innerList: innerList[]
}

type innerList = {
    contant: string
}

const Card: React.FC<CardProps> = ({ title, content, innerList, icon }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCardClick = () => {
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            
            <div
                className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md cursor-pointer"
                onClick={handleCardClick}
            >
                {icon}
                <h2 className="text-xl dark:text-white font-medium mb-2">{title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{content}</p>
            </div>
            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block align-bottom pb-8 dark:bg-gray-800 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="dark:bg-gray-800 bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline  -flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-transparent text-base font-medium text-pink-600 dark:text-purple-800  focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleModalClose}
                                >
                                    Close
                                </button>
                            </div>
                            <div className="dark:bg-gray-800 bg-white px-4 pb-4 sm:px-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-pink-100 sm:mx-0 sm:h-14 sm:w-14">
                                        {icon}
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium dark:text-white text-gray-900">{title}</h3>
                                        <div className="mt-2">
                                            <ul className="list-disc">

                                                {innerList.map((listitem, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <div className="h-5 w-5 rounded-full text-pink-600 dark:text-purple-800 text-xl mr-2"><FaCheckCircle /></div>
                                                        <span className="dark:text-gray-400 text-gray-700">{listitem.contant}</span>
                                                    </li>

                                                ))}
                                            </ul>

                                            {/* { content } */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card