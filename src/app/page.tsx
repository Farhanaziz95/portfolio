import PortfolioCard, { PortfolioItem } from '@/components/portfolioaffi'

import Aboutme from '@/components/aboutaffi'
import AccordionList from '@/components/Accordionaffi'
import BacktoTop from '@/components/backtotopaffi'
import Card from '@/components/servicesaffi'
import { CiGrid42 } from 'react-icons/ci'
import ContactUs from '@/components/contantaffi'
import DarkMode from '@/components/darkmodeaffi'
import { FaCode } from 'react-icons/fa';
import HamburgerMenu from '@/components/mobilenavaffi'
import HeroSection from '@/components/HeroSectionaffi'
import { Inter } from 'next/font/google'
import { MdMiscellaneousServices } from 'react-icons/md'
import NavBar from '@/components/navaffi'
import Social from '@/components/Socialaffi'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const portfolioItems: PortfolioItem[] = [
    {
      title: "PIAIC",
      description: "A Complete Static Website Of PIAIC Using Next.JS, Chakra UI & TypeScript",
      imageSrc: "/portfolio/port1.png",
      liveDemoUrl: "https://piaic-five.vercel.app/",
      githubUrl: "https://github.com/Farhanaziz95/piaic"
    },
    {
      title: "Panaverse DAO Syllabus",
      description: "A Complete Static Website Of Panaverse DAO Syllabus Using Next.JS, Chakra UI & TypeScript",
      imageSrc: "/portfolio/port2.png",
      liveDemoUrl: "https://panaverse-dao-syllabus-nu.vercel.app/",
      githubUrl: "https://github.com/Farhanaziz95/panaverse-dao-syllabus"
    },
    {
      title: "Expert Plus Employment (On Going)",
      description: "A Simple Web Application where users give there information and in back-end filtration applied to select candidates for there perfect Job",
      imageSrc: "/portfolio/port3.png",
      liveDemoUrl: "",
      githubUrl: ""
    },
    {
      title: "Dubai 2 Visa",
      description: "A Simple Web Application which collection users information to process Visa using PHP",
      imageSrc: "/portfolio/port13.png",
      liveDemoUrl: "",
      githubUrl: ""
    },
    {
      title: "Clean Berry",
      description: "An E-commerce Website without E-commerce functionality (Client requirment) A Web Application having back-end using PHP",
      imageSrc: "/portfolio/port12.png",
      liveDemoUrl: "",
      githubUrl: ""
    },
    {
      title: "Kruddson OMS",
      description: "A Order Management system designed to handle there specific needs in mind",
      imageSrc: "/portfolio/port4.png",
      liveDemoUrl: "",
      githubUrl: ""
    },
    {
      title: "AMS Supplies",
      description: "A beautiful & minimalist design website using HTML,CSS,JavaScript with Contact us using PHP",
      imageSrc: "/portfolio/port6.png",
      liveDemoUrl: "ams-supplies.pk",
      githubUrl: ""
    },
    {
      title: "Ali Brothers Website",
      description: "A beautiful & minimalist design website using HTML,CSS,JavaScript with Contact us using PHP",
      imageSrc: "/portfolio/port7.png",
      liveDemoUrl: "https://ali-brothers.com/",
      githubUrl: ""
    },
    {
      title: "ORB Marketers",
      description: "A beautiful & minimalist design website using HTML,CSS,JavaScript with Contact us using PHP",
      imageSrc: "/portfolio/port11.png",
      liveDemoUrl: "http://orbmarketers.com/",
      githubUrl: ""
    },
    {
      title: "Ali Brothers OMS",
      description: "A Order Management system designed to handle there specific needs in mind",
      imageSrc: "/portfolio/portconfi.jpg",
      liveDemoUrl: "",
      githubUrl: ""
    },
    {
      title: "GMSA",
      description: "Created Wordpress Elementor Plugins using their website themes ",
      imageSrc: "/portfolio/port5.png",
      liveDemoUrl: "https://gmsa-rg.ch/",
      githubUrl: ""
    },
    {
      title: "Youtube Automation Script (On Going)",
      description: "A Personal Project using Selenium, Python, MySQL, TikTok & Youtube a complex system to run and manage a youtube channel",
      imageSrc: "/portfolio/portconfi.jpg",
      liveDemoUrl: "",
      githubUrl: ""
    },
    {
      title: "Incourage (On Going)",
      description: "A Simple and minimalist design website using Next Js, Chakra UI, Tailwind Css",
      imageSrc: "/portfolio/portconfi.jpg",
      liveDemoUrl: "",
      githubUrl: ""
    },
    // add more items as needed
  ];

  const cards = [
    {
      title: 'UI/UX Designing',
      content: 'I will work closely with you to create visually stunning and intuitive user interfaces that will enhance your brand\'s identity and improve user engagement. From wireframes to prototypes, i will take care of everything to ensure a seamless design process.',
      icon: <CiGrid42 className='dark:text-purple-800 text-pink-600 text-4xl' />,
      innerList: [
        {
          contant: 'Customized design solutions to suit your unique business needs'
        },
        {
          contant: 'User research and analysis to create a user-centric design'
        },
        {
          contant: 'Interactive prototyping to visualize your design concept'
        },
        {
          contant: 'UI style guides to ensure consistency across your website or application'
        },
      ]
    },
    {
      title: 'Front-End Development',
      content: 'I\'m specialized in developing responsive and dynamic web applications that provide users with an exceptional online experience. I\'m well-versed in the latest web technologies and frameworks, ensuring that your website or application is up-to-date with the latest trends and standards.',
      icon: <FaCode className='dark:text-purple-800 text-pink-600 text-4xl' />,
      innerList: [
        {
          contant: 'Expertise in the latest web technologies and frameworks such as React, Angular, Vue.js, and more'
        },
        {
          contant: 'Cross-browser and cross-device compatibility testing for a seamless user experience'
        },
        {
          contant: 'Mobile-first approach to ensure your website or application is optimized for mobile devices'
        },
        {
          contant: 'Integration with third-party APIs to enhance your website or application functionality'
        },
      ]
    },
    {
      title: 'Back-End Development',
      content: 'i\'ll will take care of the server-side of your web application, ensuring that your website or application runs smoothly and efficiently. From database management to API integrations, i will take care of everything, so you can focus on growing your business.',
      icon: <MdMiscellaneousServices className='dark:text-purple-800 text-pink-600 text-4xl' />,
      innerList: [
        {
          contant: 'Full-stack development solutions for your web application'

        },
        {
          contant: 'Custom database design and management'

        },
        {
          contant: 'API development and integration to connect your application with third-party services'

        },
        {
          contant: 'Web security and performance optimization to ensure your application runs smoothly and securely'

        },
      ]
    }
  ]
  return (
    <>
      <NavBar />
      <BacktoTop />
      <DarkMode />
      <Social />
      <HamburgerMenu />
      <HeroSection />
      <Aboutme />
      <AccordionList />
      <div id='ServiceSection' className='py-8 px-16 dark:bg-gray-700'>
        <div className="py-8 text-center mx-auto max-w-full lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">My Services</h2>
          <p className="mt-2 text-lg leading-8 dark:text-gray-400 text-gray-500">See My Expertise in various technologys to grow your business</p>
        </div>
        <div className="grid max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-4">

          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} icon={card.icon} innerList={card.innerList} />
          ))}
        </div>
      </div>
      <PortfolioCard items={portfolioItems} />
      {/* <PortfolioCard title='asdf' imageSrc='/q.png' description='asdaf' liveDemoUrl='asdasd' githubUrl='asdjasd'/> */}

      <ContactUs />

    </>
  )
}
