import Card from '@/components/cards/Card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>
            <div className='md:pt-16 pt-8 lg:px-16 md:px-8 px-2'>
                <div className="border-b-2 border-gray-300">
                    <h1 className="relative w-max md:text-3xl text-2xl pb-4 before:content-[''] before:absolute before:h-[2px] before:w-[120%] before:bg-primary before:top-full uppercase font-extrabold">Search Results : ai</h1>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-4 pt-8'>
                    {Array.from({ length: 12 }).map((_, idx) => (
                        <div className='h-[450px]'>
                            <Card />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page
