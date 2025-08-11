import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GlobalApi from '../_utils/GlobalApi'
function DoctorList({ doctorList, heading }) {
    return (
        <div className='mb-10 px-8'>
            <h2 className='font-bold text-xl '>{heading} Doctors</h2>
            <div className='mt-4 grid grid-cols-2 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {doctorList.length > 0 ? doctorList.map((item, index) => (
                    <div key={item.id || index} className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-cyan-700 hover:shadow-sm transition-all ease-in-out'>
                        <Image src={GlobalApi.getStrapiMedia(item.Image?.url)}
                            alt='doctor'
                            width={500}
                            height={200}
                            className='h-[200px] w-full object-cover rounded-lg'
                        />
                        <div className='mt-3 items-baseline flex flex-col gap-1'>
                            <h2 className='test-sm bg-cyan-100 p-1 rounded-full md:px-2 text-cyan-700'>{item.category?.Name}</h2>
                            <h2 className='font-bold'>{item.Name}</h2>
                            <h2 className='text-cyan-700 text-sm'>{item.Year_of_Experience}</h2>
                            <h2 className='text-gray-500 text-sm'>{item.Address}</h2>
                            <Link href={'/details/' + item?.slug} className='w-full'>
                                <h2 className='p-2 px-3 border-[1px] border-cyan-700 text-cyan-700 rounded-full w-full text-center text-[11px]mt-2 cursor-pointer hover:bg-[var(--button-primary-color)] hover:text-white'>Book Now</h2>
                            </Link>
                        </div>
                    </div>
                    // className='test-[10px]-used to give custom size
                ))
                    :
                    // Skeleton effect
                    [1, 2, 3, 4, 5, 6, 7].map((item, index) => (

                        <div key={item.id || index} className='h-[220px] bg-slate-200 w-full rounded-lg animate-pulse'>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DoctorList
