import AccordionList from '@/components/Accordionaffi'
import BacktoTop from '@/components/backtotopaffi'
import DarkMode from '@/components/darkmodeaffi'
import HeroSection from '@/components/HeroSectionaffi'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navaffi'
import Social from '@/components/Social'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar/>
      <BacktoTop/>
      <DarkMode/>
      <Social/>
      <HeroSection/>
      <AccordionList />
    </>
  )
}
