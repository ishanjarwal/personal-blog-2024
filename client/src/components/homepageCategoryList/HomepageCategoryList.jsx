"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import Link from 'next/link';

const swiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 8,
    grabCursor: true,
    freeMode: true,
    modules: [FreeMode]
}

const HomepageCategoryList = () => {
    return (
        <div className='md:pt-16 pt-8'>
            <div className="border-b-2 border-gray-300">
                <h1 className="relative w-max md:text-3xl text-2xl font-bold pb-4 before:content-[''] before:absolute before:h-[2px] before:w-[120%] before:bg-primary before:top-full ">Popular Categories</h1>
            </div>
            <div className='md:pt-8 pt-2'>
                <Swiper {...swiperOptions} className='relative !py-4 !px-1'>
                    {Array.from({ length: 8 }).map((cat, idx) => (
                        <SwiperSlide className='!w-auto'>
                            <Link href={'/'} className='flex items-center rounded-lg overflow-hidden shadow-md cursor-pointer '>
                                {/* <div className='relative aspect-square flex-1 w-16'>
                                    <Image src={'https://images.pexels.com/photos/27390962/pexels-photo-27390962/free-photo-of-boat-ocean-and-the-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} fill />
                                </div> */}
                                <div className='px-4 py-4'>
                                    <span className='uppercase font-bold md:text-sm text-xs'>Category</span>
                                    <span className='text-primary text-xs'>(18)</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                    <SwiperSlide className='!w-auto'>
                        <Link href={'/'} className='flex items-center rounded-lg overflow-hidden shadow-md cursor-pointer '>
                            <div className='px-4 py-4'>
                                <span className='uppercase font-bold md:text-sm text-xs text-primary'>View All →</span>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomepageCategoryList
