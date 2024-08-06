"use client"
import Link from 'next/link'
import styles from './navbar.module.css'
import React, { useState } from 'react'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { MdBookmarkBorder } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import Image from 'next/image';
import MegaMenu from './megaMenu/MegaMenu';
const Navbar = () => {

    const [dark, setDark] = useState(false);
    const status = "authenticated"
    return (
        <div className='w-full'>
            <div className="relative mx-auto max-w-screen-2xl md:h-28 h-16 md:px-16 px-4 flex justify-between items-center">
                <div className='flex justify-start items-center'>
                    <button className='lg:hidden block text-2xl me-2'>
                        <IoMenu />
                    </button>
                    <Link className='h-8 relative' href={'/'}>
                        {/* <Image className='object-center object-contain' src={'/'} fill /> */}
                        <h1 className='font-bold text-2xl'>LOGO</h1>
                    </Link>
                </div>
                <div className='flex self-stretch items-center space-x-4'>
                    <div className='lg:flex hidden items-stretch self-stretch space-x-4 text-text'>
                        <Link className='uppercase flex items-center' href={'/'}>home</Link>
                        <Link className='uppercase flex items-center' href={'/'}>archive</Link>
                        <Link className='uppercase flex items-center' href={'/'}>top</Link>
                        <Link className='uppercase flex items-center' href={'/'}>picks</Link>
                        <div className='group cursor-pointer flex items-center'>
                            <span className='uppercase cursor-pointer'>categories</span>
                            <div className='absolute w-full top-32 left-0 shadow-lg opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:top-28 duration-150'>
                                <div>
                                    <MegaMenu title={"categories"} href={'/'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <button onClick={() => { setDark(!dark) }} className={styles.darkmode}>
                            <span className={styles.sun}><IoSunnyOutline /></span>
                            <span className={styles.moon}><IoMoonOutline /></span>
                            <span className={styles.toggle} style={dark ? { left: '4px' } : { right: '4px' }}></span>
                        </button>
                        {status === "authenticated"
                            ?
                            <>
                                <Link href={"/"} className='py-2 md:px-4 px-2 flex justify-center items-center space-x-1 rounded-md bg-blue-600/10 text-blue-600 hover:bg-blue-600/15'>
                                    <span className='text-lg'><MdBookmarkBorder /></span>
                                    <span className='md:block hidden text-sm'>Saved</span>
                                </Link>
                                <Link href={"/"} className='py-2 md:px-4 px-2 flex justify-center items-center space-x-1 rounded-md bg-pink-500/10 text-pink-500 hover:bg-pink-500/15'>
                                    <span className='text-lg'><FiHeart /></span>
                                    <span className='md:block hidden text-sm'>Liked</span>
                                </Link>
                                <button className='relative w-12 h-12 rounded-full overflow-hidden'>
                                    <Image src={'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600'} fill className='object-cover object-center' />
                                </button>
                            </>
                            :
                            <Link className='uppercase py-2 px-4 rounded-md border-primary border-2 text-primary' href={'/login'}>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
