import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment';

function DoctorDetail({ doctor }) {

    const SocialMediaList = [
        { id: 1, icon: '/tweet.png', url: '' },
        { id: 2, icon: '/lin.png', url: '' },
        { id: 3, icon: '/download.png', url: '' }
    ];

    return (
        <div className="space-y-6">
            {/* Doctor Card */}
            <div className="bg-gradient-to-br from-cyan-100 to-white shadow-md grid grid-cols-1 md:grid-cols-3 border border-cyan-200 p-6 rounded-xl gap-6">
                
                {/* Doctor Image */}
                <div className="flex justify-center items-center">
                    {doctor?.Image?.url ? (
                        <Image
                            src={doctor.Image?.url}
                            width={200}
                            height={200}
                            alt="doctor-image"
                            className="rounded-xl w-full h-[280px] object-cover border border-gray-300"
                        />
                    ) : (
                        <div className="w-[200px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                            No Image
                        </div>
                    )}
                </div>

                {/* Doctor Info */}
                <div className="col-span-2 flex flex-col justify-between gap-4 px-2 md:px-6">
                    <div className="space-y-2">
                        <h2 className="font-bold text-3xl text-cyan-800">{doctor.Name}</h2>
                        <h3 className="flex items-center gap-2 text-gray-600 text-md">
                            <GraduationCap className="text-cyan-600" />
                            <span>{doctor.Year_of_Experience} of Experience</span>
                        </h3>
                        <h3 className="flex items-center gap-2 text-gray-600 text-md">
                            <MapPin className="text-cyan-600" />
                            <span>{doctor.Address}</span>
                        </h3>
                        <span className="inline-block bg-cyan-600 text-white text-sm px-3 py-1 rounded-full">
                            {doctor.category?.Name}
                        </span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-3">
                        {SocialMediaList.map((item, index) => (
                            <Image
                                key={index}
                                src={item.icon}
                                alt="social-icon"
                                width={35}
                                height={35}
                                className="rounded-full cursor-pointer hover:scale-110 transition-transform"
                            />
                        ))}
                    </div>
                    <BookAppointment doctor={doctor}/>
                </div>
            </div>

            {/* About Doctor */}
            <div className="bg-gradient-to-r from-gray-200 to-white p-5 border border-gray-200 rounded-xl shadow-sm">
                <h2 className="font-bold text-xl text-cyan-800">About Me</h2>
                <p className="text-gray-600 leading-relaxed mt-3 tracking-wide text-justify">
                    {doctor.About}
                </p>
            </div>
        </div>
    );
}

export default DoctorDetail;
