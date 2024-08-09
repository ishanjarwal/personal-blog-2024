"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import CardInset from '../cards/CardInset'

const swiperOptions = {
    modules: [Autoplay],
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    loop: true,
    breakpoints: {
        1024: {
            speed: 3000,
            slidesPerView: "3",
            spaceBetween: 16,
        },
        768: {
            speed: 2000,
            slidesPerView: "2",
            spaceBetween: 8,
        },
        0: {
            slidesPerView: "1",
            spaceBetween: 8,
            speed: 1000,
            autoplay: {
                delay: 1000,
            },
        }
    },
    grabCursor: true
}

const HomepageSlideshow = () => {
    return (
        <div className='md:pt-16 pt-8'>
            <div className="border-b-2 border-gray-300">
                <h1 className="relative w-max md:text-3xl text-2xl font-bold pb-4 before:content-[''] before:absolute before:h-[2px] before:w-[120%] before:bg-primary before:top-full ">What's Hot</h1>
            </div>
            <div className='md:py-16 py-4 relative'>
                <Swiper {...swiperOptions}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <SwiperSlide className='!h-72'>
                            <CardInset headingSize='text-xl' pSize='text-sm' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default HomepageSlideshow
