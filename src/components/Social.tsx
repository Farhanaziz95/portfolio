import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

interface Icon {
  icon: JSX.Element;
  title: string;
  href: string;
  top: string;
}

export default function Social() {

  const icons: Icon[] = [
    {
      icon: <FaFacebookSquare size={"30px"} className='dark:text-white text-black' />,
      title: 'Facebook',
      href: 'https://www.facebook.com/',
      top: '40vh'
    },
    {
      icon: <FaLinkedin size={"30px"}  className='dark:text-white text-black' />,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      top: '50vh'
    },
    {
      icon: <FaTwitterSquare className='dark:text-white text-black' size={"30px"}  />,
      title: 'Twitter',
      href: 'https://twitter.com/',
      top: '60vh'
    },
  ];

  return (
    <div className='max-lg:hidden'>
      {icons.map((icon, index) => (
        <Link href={icon.href} key={index}>
          <div className='ml-[-120px] hover:ml-0 duration-300 cursor-pointer flex justify-between items-center w-[175px] glassicon rounded-r-xl fixed py-3 px-4 z-10 ' style={{ top: icon.top }}>
            <h6 className='text-xl font-bold text-black dark:text-white'>{icon.title}</h6>
            {icon.icon}
          </div>
        </Link>
      ))}
    </div>
  )
}