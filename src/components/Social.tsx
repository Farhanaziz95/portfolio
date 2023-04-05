import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

export default function Social() {
  return (
    <div className='max-lg:hidden'>
      <Link href={"https://www.facebook.com/"} target='_blank'>
        <div className='ml-[-120px] hover:ml-0 duration-300 cursor-pointer flex justify-between items-center w-[175px] glassicon rounded-r-xl fixed py-3 px-4 z-10 top-[40vh]'>
          <h6 className=''>Facebook</h6>
          <FaFacebookSquare size={"30px"} color={"#f3f4f6"}></FaFacebookSquare>
        </div>
      </Link>
      <Link href={"https://www.linkedin.com/"} target='_blank'>
        <div className='ml-[-120px] hover:ml-0 duration-300 cursor-pointer flex justify-between items-center w-[175px] glassicon rounded-r-xl fixed py-3 px-4 z-10 top-[50vh]'>
          <h6>Linkedin</h6>
          <FaLinkedin size={"30px"} color={"#f3f4f6"}></FaLinkedin>
        </div>
      </Link>

      <Link href={"https://twitter.com/"} target='_blank'>
        <div className='ml-[-120px] hover:ml-0 duration-300 cursor-pointer flex justify-between items-center w-[175px] glassicon rounded-r-xl fixed py-3 px-4 z-10 top-[60vh]'>
          <h6>Twitter</h6>
          <FaTwitterSquare size={"30px"} color={"#f3f4f6"}></FaTwitterSquare>
        </div>
      </Link>
    </div>
  )
}