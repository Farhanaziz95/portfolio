import { FaCloudUploadAlt, FaLock, FaServer } from 'react-icons/fa'

const Contact = [
    {
        name: 'Location',
        description: 'Karachi, Pakistan',
        icon: <FaCloudUploadAlt className='mr-4 w-8 h-8 dark:text-purple-800 text-pink-600' />,
    },
    {
        name: 'Email',
        description: 'Farhanazizumrani95@gmail.com',
        icon: <FaLock className='mr-4 w-8 h-8 dark:text-purple-800 text-pink-600' />,
    },
    {
        name: 'Phone Number',
        description: '+92 303 2538134',
        icon: <FaServer className='mr-4 w-8 h-8 dark:text-purple-800 text-pink-600' />,
    },
    {
        name: 'Languages',
        description: 'English, Urdu, Sindhi',
        icon: <FaServer className='mr-4 w-8 h-8 dark:text-purple-800 text-pink-600' />,
    }

]

export default function ContactUs() {
    return (
        <div id='ContantSection' className="overflow-hidden dark:bg-gray-700 bg-white py-24 sm:py-16">
            <div className="pt-8 text-center mx-auto max-w-full lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">Contact Me</h2>
                <p className="mt-2 text-lg leading-8 dark:text-gray-400 text-gray-500">What me to build you stuffs , massage me on any platform </p>
            </div>
            <div className="w-full dark:bg-gray-700 pb-14 px-14 grid grid-cols-1 sm:grid-cols-2">
                <div className=''>
                    {Contact.map((item) => (
                        <div className='flex item-center max-sm:flex-col py-6 items-center' key={item.name}>

                            {item.icon}
                            {/* <img src={item.iconUrl} alt="icon" className="h-6 w-6 mr-2" /> */}
                            {/* {item.iconUrl} */}

                            {/* <h3 className="dark:text-white text-black font-bold">{item.name}</h3> */}
                            <p className='dark:text-white text-black w-[30%]'><strong>{item.name}</strong>:</p>
                            <span className='dark:text-gray-400 text-gray-500 flex max-sm:justify-start max-sm:w-full justify-end w-[70%]'>{item.description}</span>



                        </div>
                    ))}
                </div>
                <div>
                    <form>
                        <div className="ml-4 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                {/* <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label> */}
                                <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" placeholder='Enter Your Full Name' autoComplete="given-name" className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 dark:bg-gray-600 focus:ring-inset  sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                {/* <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label> */}
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" placeholder='Enter Your Email' autoComplete="family-name" className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:bg-gray-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="col-span-full">
                                {/* <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label> */}
                                <div className="mt-2">
                                    <input type="text" placeholder='Enter Your Subject' name="street-address" id="street-address" autoComplete="street-address" className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:bg-gray-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="col-span-full">
                                {/* <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About</label> */}
                                <div className="mt-2">
                                    <textarea placeholder='Write Your Message' id="about" name="about" rows={3} className="block w-full rounded-full px-8 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:bg-gray-600 sm:py-1.5 sm:text-sm sm:leading-6"></textarea>
                                </div>
                                {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-center gap-x-6">
                            {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button> */}
                            <button type="submit" className="rounded-full w-full dark:bg-purple-800 bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow- dark:hover:bg-purple-600 hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}