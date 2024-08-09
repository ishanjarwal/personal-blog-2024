"use client"
import { MobileMenuContext } from '@/contexts/MobileMenuContext';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import Link from 'next/link';
import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { BiCategoryAlt, BiLike } from "react-icons/bi";
import { GoFileZip } from "react-icons/go";
import { IoMdStarOutline } from "react-icons/io";


const links = [
    {
        display: "home",
        href: "/",
        icon: <IoHomeOutline />
    },
    {
        display: "categories",
        href: "/",
        icon: <BiCategoryAlt />
    },
    {
        display: "archive",
        href: "/",
        icon: <GoFileZip />
    },
    {
        display: "most viewed",
        href: "/",
        icon: <BiLike />
    },
    {
        display: "editor's picks",
        href: "/",
        icon: <IoMdStarOutline />
    },
]

const MobileMenu = () => {
    const { open, setOpen } = useContext(MobileMenuContext);
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-25 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700"
                        >
                            <div className="relative flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                                {/* content */}
                                <button
                                    className='absolute top-4 right-4 text-2xl'
                                    onClick={() => setOpen(false)}
                                >
                                    <IoClose />
                                </button>

                                <div className='mt-12 px-4 flex flex-col gap-y-2'>
                                    {links.map((link, idx) => (
                                        <Link href={link.href} className='group rounded-md flex justify-between items-center px-4 py-4 hover:bg-hoverBg duration-150'>
                                            <div className='flex items-center justify-start space-x-2'>
                                                <span className='text-xl text-text group-hover:text-primary'>
                                                    {link.icon}
                                                </span>
                                                <span className='uppercase text-text group-hover:text-primary'>{link.display}</span>
                                            </div>
                                            <span className='text-primary -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-150'><FaArrowRightLong /></span>
                                        </Link>
                                    ))}
                                </div>

                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default MobileMenu
