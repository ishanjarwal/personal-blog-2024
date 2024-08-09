import React from 'react'
import CardInset from '../cards/CardInset'
import Card from '../cards/Card'
import HomepageCategoryList from '../homepageCategoryList/HomepageCategoryList'

const HomepageGrid = () => {
    return (
        <div className='md:pt-16 pt-8'>
            <div className="border-b-2 border-gray-300">
                <h1 className="relative w-max md:text-3xl text-2xl font-bold pb-4 before:content-[''] before:absolute before:h-[2px] before:w-[120%] before:bg-primary before:top-full ">Latest Tech News</h1>
            </div>
            <div className='grid grid-cols-6 gap-8 md:py-8 py-4 '>
                <div className='lg:col-span-3 col-span-6 lg:h-[550px] h-[400px]'>
                    <CardInset headingSize='lg:text-2xl text-xl' />
                </div>
                <div className='lg:col-span-3 col-span-6  lg:h-[550px] h-[400px]'>
                    <Card />
                </div>
                <div className='lg:col-span-3 col-span-6  lg:h-[550px] h-[400px]'>
                    <Card />
                </div>
                <div className='lg:col-span-3 col-span-6  lg:h-[550px] h-[400px]'>
                    <CardInset headingSize='lg:text-2xl text-xl' />
                </div>
                <div className="col-span-6">
                    <HomepageCategoryList />
                </div>
                <div className='lg:col-span-2 col-span-6 lg:h-[550px] h-[400px]'>
                    <Card />
                </div>
                <div className='lg:col-span-2 col-span-6  lg:h-[550px] h-[400px]'>
                    <Card />
                </div>
                <div className='lg:col-span-2 col-span-6  lg:h-[550px] h-[400px]'>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default HomepageGrid
