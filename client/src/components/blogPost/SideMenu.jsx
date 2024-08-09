import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './blogPost.module.css'
import clsx from 'clsx'
import { MdOutlineOpenInNew } from "react-icons/md";

const SideMenu = () => {
    return (
        <div className='h-full'>
            <div className='flex flex-col space-y-16 h-full'>
                <div className='flex flex-col space-y-4'>
                    <div className="border-b-2 border-gray-300">
                        <h1 className="relative w-max md:text-2xl text-xl font-bold pb-2 before:content-[''] before:absolute before:h-[2px] before:w-[120%] before:bg-primary before:top-full ">Recent Posts</h1>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <div className={clsx(styles.listItem, 'group xl:col-span-2 col-span-3 flex justify-start w-full items-start space-x-4')}>
                                <Link href={'/'} className='relative w-24 rounded-lg aspect-square overflow-hidden'>
                                    <Image src={'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'} fill />
                                </Link>
                                <div className='flex-1 flex flex-col space-y-2'>
                                    <div className='flex items-center space-x-2'>
                                        <Link href={'/'} className='uppercase text-xs text-primary font-bold'>
                                            Category
                                        </Link>
                                        <span className='text-xs text-text'>
                                            2 days ago
                                        </span>
                                    </div>
                                    <Link href={'/'}>
                                        <p className={clsx('truncate2Lines', 'flex-1 font-bold text-md')}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi ad officia!
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div className="border-b-2 border-gray-300">
                        <h1 className="relative w-max md:text-2xl text-xl font-bold pb-4 before:content-[''] before:absolute before:h-[2px] before:w-[120%] before:bg-primary before:top-full ">Popular Categories</h1>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <Link href={'/'} className='flex items-center rounded-lg overflow-hidden shadow-md cursor-pointer  hover:scale-105 duration-300'>
                                <div className='px-4 py-4'>
                                    <span className='uppercase font-bold md:text-sm text-xs'>Category</span>
                                    <span className='text-primary text-xs'>(18)</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div className="border-b-2 border-gray-300">
                        <h1 className="relative w-max md:text-2xl text-xl font-bold pb-4 before:content-[''] before:absolute before:h-[2px] before:w-[120%] before:bg-primary before:top-full ">Tags</h1>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <Link href={'/'} className='group flex px-4 py-2 items-center space-x-2 rounded-lg border border-primary cursor-pointer hover:bg-hoverBg'>
                                <span className='uppercase font-bold text-xs group-hover:text-primary'>Category</span>
                                <span className='text-lg text-primary opacity-0 max-w-0 group-hover:max-w-4 group-hover:opacity-100 duration-300'><MdOutlineOpenInNew /></span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='sticky top-0 pt-2'>
                    <div className='relative'>
                        <Image src={'https://images.pexels.com/photos/5077065/pexels-photo-5077065.jpeg?auto=compress&cs=tinysrgb&w=600'} width={600} height={600} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu
