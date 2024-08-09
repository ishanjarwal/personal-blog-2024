import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BreadCrumbs = ({ category, title }) => {
    return (
        <div className='flex items-center flex-nowrap space-x-4 py-4 px-2 '>
            <Link className='text-primary capitalize' href={'/'}>
                Home
            </Link>
            <span><MdKeyboardDoubleArrowRight /></span>
            <Link className='text-primary capitalize' href={'/'}>
                {category}
            </Link>
            <span><MdKeyboardDoubleArrowRight /></span>
            <Link className='text-primary capitalize text-ellipsis whitespace-nowrap overflow-hidden' href={'/'}>
                {title}
            </Link>
        </div>
    )
}

export default BreadCrumbs
