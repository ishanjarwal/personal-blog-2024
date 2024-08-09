import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";

const Page = () => {
    return (
        <div>
            <div className='grid grid-cols-7' style={{ minHeight: "calc(100vh - 112px)" }}>
                <div className='col-span-3 bg-white border-e border-gray-300'>
                    <div className='px-24 pt-24'>
                        <div>
                            <h1 className='text-5xl font-bold'>Welcome !</h1>
                            <p className='text-text'>Login to access all features!</p>
                        </div>
                        <div className='mt-8 flex flex-col space-y-4'>
                            <div className='relative bg-white w-full rounded-xl pt-3 overflow-hidden border border-gray-200'>
                                <label className='absolute top-1 left-4 text-sm text-softText'>E-mail</label>
                                <input
                                    className='text-xl border-none outline-none w-full px-4 py-2 font-bold font-nunito'
                                    type="text"
                                />
                            </div>
                            <div>
                                <button className='text-white text-lg bg-primary rounded-xl w-full py-4 px-4'>
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 text-softText mt-8'>
                            <span className='h-[0.5px] bg-softText flex-1'></span>
                            <span>OR</span>
                            <span className='h-[0.5px] bg-softText flex-1'></span>
                        </div>
                        <div className='mt-8 flex flex-col space-y-4'>
                            <button className='py-4 px-4 rounded-lg border border-gray-200 shadow-md flex justify-center items-center space-x-2'>
                                <span className='text-2xl'><FcGoogle /></span>
                                <span>Login with Google</span>
                            </button>
                            <button className='py-4 px-4 rounded-lg border border-gray-200 shadow-md flex justify-center items-center space-x-2'>
                                <span className='text-2xl'><FaGithub /></span>
                                <span>Login with Github</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='relative h-full'>
                        <Image src={'https://image.lexica.art/full_webp/086c74c6-417d-4cf0-a926-281dbc6ffe2f'} fill className='object-center object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
