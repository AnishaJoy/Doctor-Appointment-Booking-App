"use client"
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyBookingList from './_components/MyBookingList'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useEffect } from 'react'
function MyBooking() {
    const { user } = useKindeBrowserClient();
    const [bookingList, setBookingList] = useState([]);
    useEffect(() => {
        user && getUserBookingList();
    }, [user])
    const getUserBookingList = () => {
        GlobalApi.getUserBookingList(user?.email).then(resp => {
            // console.log(resp.data);
            setBookingList(resp.data);
        })
    }

    // Used to filter User booking

    const filterUserBooking = (type) => {
        const result = bookingList.filter(item => type == 'upcoming' ? new Date(item.Date) >= new Date()
            : new Date(item.Date) <= new Date()
        )
        // console.log(result)
        return result;
    }
    return (
        <div className='px-4 sm:px-10 mt-10'>
            <h2 className='font-bold text-2xl'>My Booking</h2>
            <Tabs defaultValue="upcoming" className="w-full mt-5">
                <TabsList className='w-full justify-start'>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="expired">Expired</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                    <MyBookingList />
                    <MyBookingList bookingList={filterUserBooking('upcoming')}
                        updateRecord={() => getUserBookingList()}
                        expired={false} />
                </TabsContent>
                <TabsContent value="expired">
                    <MyBookingList />
                    <MyBookingList bookingList={filterUserBooking('expired')}
                        updateRecord={() => getUserBookingList()}
                        expired={true} />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default MyBooking
