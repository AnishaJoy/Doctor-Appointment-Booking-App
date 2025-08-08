import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import moment from 'moment/moment';
import Image from 'next/image';
import React from 'react';

function MyBookingList({ bookingList, expired }) {
    return (
        <div className="max-w-4xl mx-auto p-4 space-y-4">
            {bookingList && bookingList.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-6 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow border border-gray-100"
                >
                    {/* Doctor Image */}
                    <Image
                        src={
                            item.doctor.Image?.url
                                ? item.doctor.Image.url.startsWith('http')
                                    ? item.doctor.Image.url
                                    : `http://localhost:1337${item.doctor.Image.url}`
                                : '/default-doctor.png'
                        }
                        alt="doctor-image"
                        width={70}
                        height={70}
                        className="rounded-full object-cover h-[70px] w-[70px] border border-gray-200"
                    />
                    {/* Booking Details */}
                    <div className="flex flex-col gap-2 w-full">
                        {/* Doctor Name */}
                        <h2 className="text-xl font-semibold text-gray-800 flex justify-between items-center">
                            {item.doctor.Name}
                            {!expired&&<Button variant='outline' className='text-cyan-700 border-cyan-700'>Cancel Appointment</Button>}
                        </h2>
                        {/* Address with MapPin */}
                        <div className="flex items-center gap-2 text-gray-500">
                            <MapPin size={18} className="text-red-500" />
                            <p className="text-sm">{item.doctor.Address}</p>
                        </div>
                        {/* Appointment Date */}
                        <div className="flex items-center gap-2 text-gray-600 text-sm bg-blue-50 px-3 py-1 rounded-lg w-fit">
                            <Calendar size={16} className="text-blue-500" />
                            <span className="font-medium">
                                {moment(item.Date).format('DD-MMM-YYYY')}
                            </span>
                        </div>
                        {/* Appointment Time */}
                        <div className="flex items-center gap-2 text-gray-600 text-sm bg-green-50 px-3 py-1 rounded-lg w-fit">
                            <Clock size={16} className="text-green-500" />
                            <span className="font-medium">{item.Time}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyBookingList;
