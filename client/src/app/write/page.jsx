"use client"
import { Listbox, ListboxOption, ListboxOptions, ListboxButton } from '@headlessui/react'
import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { FaCheck, FaUpDown } from 'react-icons/fa6'
import { LuChevronsUpDown } from "react-icons/lu";
import Dropzone from 'dropzone'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbar_options = [
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3] }],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction


    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    // [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
]

const categories = [
    { name: "How To", slug: "how-to" },
    { name: "Tips & Tricks", slug: "tips-and-tricks" },
    { name: "Artificial Intelligence", slug: "artificial-intelligence" },
    { name: "Machine Learning", slug: "machine-learning" },
    { name: "Web Development", slug: "web-development" },
    { name: "Cloud Computing", slug: "cloud-computing" },
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Data Science", slug: "data-science" },
    { name: "Blockchain", slug: "blockchain" },
    { name: "DevOps", slug: "devops" },
    { name: "Mobile Development", slug: "mobile-development" },
    { name: "Internet of Things", slug: "internet-of-things" },
    { name: "Programming Languages", slug: "programming-languages" },
    { name: "Software Engineering", slug: "software-engineering" },
    { name: "Tech News", slug: "tech-news" }
];

const page = () => {

    const [data, setData] = useState({
        title: "",
        categorySlug: categories[0].slug,
        content: "",
        tags: "",
    })

    useEffect(() => {

    }, []);

    return (
        <div className='px-16 pt-8 grid lg:grid-cols-2 grid-cols-1 gap-8'>
            <div className='flex flex-col space-y-8'>
                <div>
                    <textarea
                        onChange={(e) => setData(prev => ({ ...prev, title: e.target.value }))}
                        className='w-full resize-none text-4xl font-bold text-text outline-none placeholder:text-softText'
                        placeholder='Title of the Blog . . .'
                    />
                </div>


                {/* category */}
                <div>
                    <label>Select a Category</label>
                    <Listbox value={data.categorySlug} onChange={(v) => setData(prev => ({ ...prev, categorySlug: v }))}>
                        <ListboxButton
                            className="border flex justify-between items-center w-64 border-black py-2 px-4 rounded-xl"
                        >
                            <span>
                                {data.categorySlug}
                            </span>
                            <LuChevronsUpDown
                                className=""
                                aria-hidden="true"
                            />
                        </ListboxButton>
                        <ListboxOptions
                            anchor="bottom"
                            transition
                            className={clsx(
                                'mt-2 rounded-xl border border-black bg-white p-1 focus:outline-none',
                                'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                            )}
                        >
                            {categories.map((category) => (
                                <ListboxOption
                                    key={category.name}
                                    value={category.slug}
                                    className="group flex items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10 cursor-pointer"
                                >
                                    <FaCheck className="invisible group-data-[selected]:visible" />
                                    <div className="text-sm/6 text-text">{category.name}</div>
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Listbox>
                </div>


                {/* thumbnail */}
                <div>
                    <label>Upload the Thumbnail (only jpeg upto 2MB)</label>
                    <div className='rounded-xl shadow-lg py-16 px-8 border border-dashed border-text flex justify-center items-center cursor-pointer'>
                        <p>
                            Drag and drop the Thumbnail here.
                        </p>
                    </div>
                </div>

                <div>
                    <ReactQuill
                        modules={{ toolbar: toolbar_options }}
                        theme="snow"
                        value={data.content}
                        onChange={(v) => setData(prev => ({ ...prev, content: v }))}
                    />
                </div>
                <div>
                    <label>Comma Seperated Tags</label>
                    <input
                        type="text"
                        value={data.tags}
                        className='py-2 px-4 rounded-lg border border-text text-xl block w-full'
                        onChange={(e) => setData(prev => ({ ...prev, tags: e.target.value }))}
                    />
                </div>
                <div className='flex justify-end space-x-4'>
                    <button className='px-4 py-2 rounded-lg text-text border border-text'>
                        Save Draft
                    </button>
                    <button className='px-4 py-2 rounded-lg text-white bg-primary border border-primary'>
                        Publish
                    </button>
                </div>

            </div>

            <div className='self-stretch'>
                <label>Preview</label>
                <div className='border border-text h-full p-4'>
                    <h1 className='text-4xl font-bold'>{data.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
            </div>
        </div>
    )
}

export default page
