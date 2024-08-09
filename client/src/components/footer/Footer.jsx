import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='w-full'>
            <div className='max-w-screen-2xl mx-auto md:px-8 px-4 '>
                <div className='grid grid-cols-12  grid-rows-2 py-16 gap-8'>
                    <div className='xl:col-span-4 col-span-12 row-span-2 flex flex-col space-y-4'>
                        <Link href={'/'} className='relative h-12'>
                            {/* <Image src={''} fill /> */}
                            <h1 className='text-3xl font-bold text-text'>LOGO</h1>
                        </Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corrupti incidunt tempore cupiditate ratione expedita vel sapiente voluptate maxime, ipsum iure asperiores aliquam eaque beatae quia, praesentium veniam cum vitae.</p>
                        <div className='flex justify-start items-center space-x-2'>
                            <Link className='text-softText text-3xl' href="/">
                                <span>
                                    <FaInstagram />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className='xl:col-span-4 sm:col-span-6 col-span-12 flex flex-col space-y-4'>
                        <h2 className='font-bold uppercase'>Popular topics</h2>
                        <ul>
                            <li>
                                <Link href={'/'}>AI</Link>
                            </li>
                            <li>
                                <Link href={'/'}>AI</Link>
                            </li>
                            <li>
                                <Link href={'/'}>AI</Link>
                            </li>
                            <li>
                                <Link href={'/'}>AI</Link>
                            </li>
                            <li>
                                <Link href={'/'}>AI</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
