import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'


const CardInset = ({ headingSize = "text-4xl", pSize = "text-md" }) => {
    return (
        <div className='h-full'>
            <div className='group relative overflow-hidden rounded-3xl h-full'>
                <Link href={'/'} className='absolute w-full h-full top-0 left-0'>
                    <Image src={'https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=600'} fill className='group-hover:scale-110 duration-300' />
                </Link>
                <div className={clsx(styles.inset_overlay, 'absolute bottom-0 flex flex-col space-y-2 p-8 pt-12')}>
                    <Link href={'/'}>
                        <span className='uppercase font-bold py-1 px-2 md:text-sm text-xs rounded-full border-2 border-white text-white w-max'>category</span>
                    </Link>
                    <Link href={'/'}>
                        <h1 className={clsx(headingSize, "truncate2Lines", 'font-bold text-white')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laudantium!</h1>
                    </Link>
                    <Link href={'/'} className='max-h-0 opacity-0 invisible pointer-events-none group-hover:max-h-80 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 duration-500 ease-in-out'>
                        <p className={clsx("truncate3Lines", pSize, ' text-white/50 ')}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro veritatis voluptatem saepe doloribus aliquam omnis alias provident laborum, mollitia excepturi possimus id deleniti officiis iure ducimus sapiente modi eaque! Ipsa?</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardInset
