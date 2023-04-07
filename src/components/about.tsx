import { FaCloudUploadAlt, FaLock, FaServer } from 'react-icons/fa'

const features = [
  {
    name: 'Expertise in Next.js, Tailwind CSS, and Chakra-UI.',
    description: 'Im well-versed in the latest front-end technologies, and I use them to build beautiful and responsive user interfaces that engage users and drive conversions.',
    icon: FaCloudUploadAlt,
  },
  {
    name: 'Experience with Contentful, Neon PostgreSQL, and Prisma.',
    description: 'I have a deep understanding of backend development, and I use these tools to create robust and scalable systems that can handle large amounts of data with ease.',
    icon: FaLock,
  },
  {
    name: 'Proficient in TypeScript.',
    description: 'Im a big fan of TypeScript, and I use it extensively in my projects to catch bugs before they can cause problems. Im also comfortable working with other programming languages and frameworks, which allows me to take on projects of any size and complexity.',
    icon: FaServer,
  },
]

export default function Aboutme() {
  return (
    <div id='AboutSection' className="overflow-hidden dark:bg-gray-700 bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-pink-600 dark:text-purple-600">About Me</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">and my passion for coding </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              With my passion for building high-quality, scalable software and my commitment to staying up-to-date with the latest technologies, I bring a wealth of knowledge and experience to every project I work on. Whether its creating visually stunning user interfaces, building robust backend systems, or writing clean and maintainable code, I take pride in delivering solutions that exceed my clients expectations. So if youre looking for a Full-Stack developer who can help you turn your ideas into reality, Im here to help.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold  dark:text-white text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-pink-600 dark:text-purple-800" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline dark:text-gray-400">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/about.jpg"
            alt="Product screenshot"
            className="dark:hue-rotate-[345] hue-rotate-15 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}