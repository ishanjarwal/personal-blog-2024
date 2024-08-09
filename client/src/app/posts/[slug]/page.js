import BlogPost from '@/components/blogPost/BlogPost'
import SideMenu from '@/components/blogPost/SideMenu'
import axios from 'axios';
import React from 'react'

const getData = async ({ params }) => {
    const { slug } = params;
    const url = `/api/posts/${slug}`;
    const response = await axios.get(url);
    if (response.status == 500) {
        return { redirectUrl: "/error" }
    }
    if (response.status == 400) {
        return { redirectUrl: "/" }
    }
    return response.data;
}

const Page = () => {
    return (
        <div className='pt-8 lg:px-16 md:px-8 px-2'>
            <div className='grid grid-cols-6 gap-16'>
                <div className='xl:col-span-4 col-span-6'>
                    <BlogPost />
                </div>
                <div className='xl:col-span-2 col-span-6'>
                    <SideMenu />
                </div>
            </div>
        </div>
    )
}

export default Page
