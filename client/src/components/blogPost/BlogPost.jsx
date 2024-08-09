import React from 'react'
import ActionMenu from './ActionMenu'
import BreadCrumbs from './BreadCrumbs'
import Image from 'next/image'
import Link from 'next/link'

const BlogPost = () => {
    return (
        <div>
            <div className='flex flex-col space-y-8'>
                <div>
                    <BreadCrumbs category={"category"} title={"title of the blog"} />
                </div>
                <div>
                    <h1 className='lg:text-6xl md:text-4xl text-3xl font-bold leading-snug'>
                        Lorem ipsum dolor sit amet consec tetur adipi sicing elit.
                    </h1>
                </div>
                <div className='flex items-center justify-start space-x-4'>
                    <div className="relative md:w-16 w-10 md:h-16 h-10 rounded-full overflow-hidden">
                        <Image src={'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600'} fill className='object-center object-cover' />
                    </div>
                    <span className='text-text'>Authro Name</span>
                    <span className='text-text'>{"—"}</span>
                    <span className='text-sm text-text'>10 minutes ago</span>
                </div>
                <div>
                    <div className='relative w-full aspect-video bg-softBg lg:rounded-2xl rounded-xl overflow-hidden'>
                        <Image src={'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600'} fill className='object-center object-cover' />
                    </div>
                    <div className='flex md:flex-row flex-col mt-8 justify-between md:items-center  gap-4'>
                        <div>
                            sharing links
                        </div>
                        <div className='self-center'>
                            <ActionMenu />
                        </div>
                    </div>
                    <div className='border-s-2 border-primary bg-softBg p-8 mt-8'>
                        <h2 className='text-2xl font-bold'>Table of Contents</h2>
                        <ul className='font-nunito'>
                            <li>
                                <Link href={'/'} className='text-primary'>1 How to . . .</Link>
                                <ul className='ps-4 border-s border-primary'>
                                    <Link href={'/'} className='text-primary'>1.1 How to . . .</Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-8 text-xl leading-relaxed font-nunito'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis? Necessitatibus fugiat aliquid provident veniam laboriosam odit ad officia? Harum quisquam dolorum natus atque animi? Illum placeat, repellendus reprehenderit libero dicta dolores fugit dolorum labore voluptatum sed a, assumenda autem! Facilis alias vitae deserunt ipsam, consequuntur at excepturi reprehenderit dignissimos vero quae voluptatibus quod rem nam magnam eius ipsa voluptate labore qui, sequi porro, dicta consequatur animi minima illum. Fuga ipsum molestiae, eaque non temporibus optio aliquam quae corporis magni, ut voluptatem numquam voluptatibus ad nostrum dolor amet distinctio iure praesentium doloribus itaque ipsam alias repellendus dicta. Magnam, officiis vitae!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
