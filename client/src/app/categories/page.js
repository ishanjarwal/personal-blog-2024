import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div className='md:pt-16 pt-8 lg:px-16 md:px-8 px-2'>
            <div className="border-b-2 border-gray-300">
                <h1 className="relative w-max md:text-3xl text-2xl pb-4 before:content-[''] before:absolute before:h-[2px] before:w-[120%] before:bg-primary before:top-full uppercase font-extrabold">All Categories</h1>
            </div>
            <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 gap-4 py-8'>
                {Array.from({ length: 12 }).map((_, idx) => (
                    <Link href={'/'} className='group relative md:rounded-3xl rounded-2xl overflow-hidden aspect-square bg-softBg hover:shadow-xl hover:scale-105 duration-300 '>
                        <div className='absolute w-full h-full top-0 left-0'>
                            <Image src={'https://images.pexels.com/photos/4569882/pexels-photo-4569882.jpeg?auto=compress&cs=tinysrgb&w=600'} fill className='object-cover object-center' />
                        </div>
                        <div className="absolute w-full h-full top-0 left-0 bg-black/50 text-white text-xl font-bold flex justify-center items-center duration-300 group-hover:backdrop-blur-md group-hover:bg-black/75">
                            <p>
                                <span className='uppercase'>Category</span>
                                <span>(18)</span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Page
