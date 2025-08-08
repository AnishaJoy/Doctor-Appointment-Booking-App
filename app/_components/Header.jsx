"use client"
import React, { createContext, useEffect } from 'react';
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LoginLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

function Header() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/contact'
        },
    ]

    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <Image src='/logo.svg' alt='logo' width={120} height={40} />
                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((item, index) => (
                        <Link key={index} href={item.path} >
                            <li key={item.id} className='cursor-pointer hover:scale-105 hover:text-cyan-700 transition-all ease-in-out
                        '>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>

            </div>
            {user ?

                <Popover>
                    <PopoverTrigger>
                        <Image src={user?.picture} alt='profile-image'
                            width={50}
                            height={50}
                            className='rounded-full' />
                    </PopoverTrigger>
                    <PopoverContent className='w=44'>
                        <ul className='flex flex-col gap-2'>
                            <Link href={'/my-booking'} className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>My Booking</Link>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'><LogoutLink>Logout</LogoutLink></li>
                        </ul>
                    </PopoverContent>
                </Popover>
                :
                <LoginLink><Button className="bg-[var(--button-primary-color)]">Get Started</Button></LoginLink>}





        </div>
    )
}

export default Header
