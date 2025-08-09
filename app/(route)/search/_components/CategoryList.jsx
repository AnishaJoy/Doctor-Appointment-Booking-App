"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function CategoryList() {
    const [categoryList, setCategoryList] = useState([]);
    const params = usePathname();
    const category = decodeURIComponent(params.split('/')[2] || '');

    useEffect(() => {
        getCategoryList();
    }, []);

    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            setCategoryList(resp.data.data);
        });
    };

    return (
        <div className="mt-5 flex flex-col h-auto sm:h-screen">
            <Command className="w-full max-w-full">
                <CommandInput
                    placeholder="Search category..."
                    className="text-sm sm:text-base px-3 py-2"
                />
                <CommandList className="overflow-visible">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup
                        heading="Suggestions"
                        className="grid gap-1 sm:gap-2 sm:grid-cols-1"
                    >
                        {categoryList && categoryList.map((item, index) => (
                            <CommandItem
                                key={item.id || index}
                                className="w-full"
                            >
                                <Link
                                    href={`/search/${encodeURIComponent(item.Name)}`}
                                    className={`p-2 sm:p-3 flex gap-2 sm:gap-3 text-sm sm:text-base text-cyan-800 items-center rounded-md cursor-pointer w-full
                                        ${category === item.Name ? 'bg-cyan-100' : ''}`}
                                >
                                    <Image
                                        src={item.Icon?.url || ''}
                                        alt="icon"
                                        width={25}
                                        height={25}
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                    />
                                    <label className="truncate">{item.Name}</label>
                                </Link>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </div>
    )
}

export default CategoryList;
