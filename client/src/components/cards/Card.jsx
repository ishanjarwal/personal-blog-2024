import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'
import { CiClock2 } from "react-icons/ci";

const Card = ({ headingSize = "text-2xl", pSize = "text-md" }) => {
    return (
        <div className='group h-full'>
            <div className='flex flex-col space-y-4 h-full'>
                <Link href={'/'} className='relative rounded-3xl overflow-hidden h-full'>
                    <Image src={'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600'} fill className='group-hover:scale-110 duration-300' />
                </Link>
                <div className='flex flex-col flex-1 space-y-4 px-2'>
                    <div className='flex justify-start items-center space-x-2'>
                        <Link href={'/'}>
                            <span className='uppercase font-bold text-sm rounded-full  text-primary w-max'>category</span>
                        </Link>
                        <span className='text-softText'>
                            —
                        </span>
                        <span className='text-sm text-softText flex items-center space-x-1'>
                            <CiClock2 />
                            <span>
                                11th July 2024
                            </span>
                        </span>
                    </div>
                    <Link href={'/'}>
                        <h1 className={clsx("truncate3Lines", headingSize, 'font-bold text-text group-hover:underline')}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit rerum dolores perspiciatis dolorem totam deserunt eius officia voluptas sed ipsa.
                        </h1>
                    </Link>
                    {/* <Link href={'/'}>
                        <p className={clsx(styles.truncate3Lines, pSize, 'text-softText ')}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro veritatis voluptatem saepe doloribus aliquam omnis alias provident laborum, mollitia excepturi possimus id deleniti officiis iure ducimus sapiente modi eaque! Ipsa?</p>
                    </Link> */}
                </div>
            </div>
        </div >
    )
}

export default Card
