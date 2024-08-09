import React from 'react'
import { GoComment } from "react-icons/go";
import { MdBookmarkBorder } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

const ActionMenu = () => {
    return (
        <div>
            <div className='flex items-center space-x-2'>
                <span title='Views' className='flex items-center justify-center  space-x-1 px-3 py-4 rounded-md hover:bg-hoverBg hover:text-primary'>
                    <span> <IoEyeOutline /></span>
                    <span className='text-xs'>(1.1K)</span>
                </span>
                <button title='Like this Post' className='flex items-center justify-center  space-x-1 px-3 py-4 rounded-md hover:bg-hoverBg hover:text-primary'>
                    <span> <FiHeart /></span>
                    <span className='text-xs'>(100)</span>
                </button>
                <button title='Bookmark this Post' className='flex items-center justify-center  space-x-1 px-3 py-4 rounded-md hover:bg-hoverBg hover:text-primary'>
                    <span> <MdBookmarkBorder /></span>
                    <span className='text-xs'>(100)</span>
                </button>
                <button title='Comment on this Post' className='flex items-center justify-center  space-x-1 px-3 py-4 rounded-md hover:bg-hoverBg hover:text-primary'>
                    <span><GoComment /></span>
                    <span className='text-xs'>(100)</span>
                </button>
            </div>
        </div>
    )
}

export default ActionMenu
