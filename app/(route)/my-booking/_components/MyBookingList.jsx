import { Button } from '@/components/ui/button';
import { Calendar, Clock, Fingerprint, MapPin, Phone, PhoneCall } from 'lucide-react';
import moment from 'moment/moment';
import Image from 'next/image';
import React from 'react';
import CancelAppointment from './CancelAppointment';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

function MyBookingList({ bookingList, expired, updateRecord }) {
    const onDeleteBooking = (item) => {
        // console.log(item)
        GlobalApi.deleteBooking(item.documentId).then(resp => {
                console.log(resp)
                if (resp) {
                    toast('Booked Appointment Deleted Successfully!');
                    updateRecord();
                }
       
            })
    }
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
                    <div className="flex flex-col gap-3 w-full">
                        {/* Doctor Name & Cancel Button */}
                        <h2 className="text-xl font-semibold text-cyan-800 flex justify-between items-center">
                            {item.doctor.Name}
                            {!expired && <CancelAppointment onContinueClick={() => onDeleteBooking(item)} />}
                        </h2>
                        {/* Phone No */}
                        <div className="flex items-center gap-2 text-gray-500">
                            <PhoneCall size={18} className="text-pink-500" />
                            <p className="text-sm">{item.doctor.Phone}</p>
                        </div>

                        {/* Address */}
                        <div className="flex items-center gap-2 text-gray-500">
                            <MapPin size={18} className="text-red-500" />
                            <p className="text-sm">{item.doctor.Address}</p>
                        </div>

                        {/* Date & Time in One Line */}
                        <div className="flex justify-start items-center gap-6 bg-gray-50  rounded-lg w-fit">
                            {/* Date */}
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-blue-500" />
                                <span className="font-medium">
                                    Appointment Date: {moment(item.Date).format("DD-MMM-YYYY")}
                                </span>
                            </div>

                            {/* Time */}
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-green-500" />
                                <span className="font-medium">At: {item.Time}</span>
                            </div>
                        </div>

                        {/* Appointment ID - unchanged */}
                        <div className="flex flex-col bg-yellow-50 border border-yellow-300 px-3 py-2 rounded-lg w-fit">
                            <div className="flex items-center gap-2 font-semibold text-cyan-800">
                                <Fingerprint size={18} className="text-yellow-600" />
                                <span>Appointment ID:</span>
                                <span className="font-bold">{item.Appointment_Id}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                Please remember this ID when coming for your doctor visit.
                            </p>
                        </div>
                    </div>


                </div>
            ))}
        </div>
    );
}

export default MyBookingList;
