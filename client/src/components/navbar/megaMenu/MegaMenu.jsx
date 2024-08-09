import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './megaMenu.module.css'
import clsx from 'clsx'

const MegaMenu = ({ title, href, cols, data }) => {
    return (
        <div className='w-full h-full  py-8 bg-white overflow-y-auto max-h-[calc(100vh - 112px)]'>
            {/* <div className='flex justify-between items-center'>
                <h1 className='text-3xl uppercase'>{title}</h1>
                <Link href={href}>View All »</Link>
            </div> */}
            <div className='grid grid-cols-5'>
                <div className='flex flex-col col-span-1'>
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <span className='py-4 px-8 cursor-pointer hover:text-primary hover:bg-hoverBg'>Coding</span>
                    ))}
                </div>
                <div className='col-span-4 px-8'>
                    <div className="grid grid-cols-6 gap-4">
                        {Array.from({ length: 12 }).map((_, idx) => (
                            <Link href={'/'} className={clsx(styles.listItem, 'group xl:col-span-2 col-span-3 flex justify-start w-full items-start space-x-4')}>
                                <div className='relative w-20 rounded-lg aspect-square overflow-hidden'>
                                    <Image src={'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'} fill />
                                </div>
                                <p className={clsx('truncate3Lines', 'flex-1 font-bold text-md')}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi ad officia!
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MegaMenu
