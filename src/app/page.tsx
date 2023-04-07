import AccordionList from '@/components/Accordionaffi'
import BacktoTop from '@/components/backtotopaffi'
import DarkMode from '@/components/darkmodeaffi'
import HeroSection from '@/components/HeroSectionaffi'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navaffi'
import Social from '@/components/Socialaffi'
import HamburgerMenu from '@/components/mobilenavaffi'
import Aboutme from '@/components/aboutaffi'
import styles from './page.module.css'
import ContactUs from '@/components/contantaffi'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar/>
      <BacktoTop/>
      <DarkMode/>
      <Social/>
      <HamburgerMenu/>
      <HeroSection/>
      <Aboutme/>
      <AccordionList />
      <ContactUs/>

    </>
  )
}
