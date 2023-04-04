import AccordionList from '@/components/Accordionaffi'
import BacktoTop from '@/components/backtotopaffi'
import DarkMode from '@/components/darkmodeaffi'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navaffi'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar/>
      <BacktoTop/>
      <DarkMode/>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <AccordionList />
    </>
  )
}
