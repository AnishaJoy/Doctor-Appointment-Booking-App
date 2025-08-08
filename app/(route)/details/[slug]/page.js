"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { use, useEffect, useState } from 'react'
import DoctorDetail from '../_components/DoctorDetail';
import DoctorSuggestionList from '../_components/DoctorSuggestionList';

function Details({ params }) {
  const { slug } = use(params);
  const [doctor, setDoctor] = useState();
  const [Suggestion, setSuggestion] = useState();

  useEffect(() => {
    if (slug) {
      GlobalApi.getDoctorById(slug).then(resp => {
        console.log("Doctor response:", resp.data.data);
        setDoctor(resp.data.data[0]);
      });
    }
    GlobalApi.getSuggestionByList().then(resp => {
      console.log(resp.data.data);
      setSuggestion(resp.data.data);
    });
  }, [slug]);
  return (
    <div className="p-5 md:px-20">
      <h2 className='font-bold text-[22px] mb-4 text-cyan-800'>Doctor Details</h2>
      {/* Main Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Doctor Details Section */}
        <div className='md:col-span-2'>
          {doctor && <DoctorDetail doctor={doctor} />}
        </div>
        {/* Suggestions Section */}
        <div className='float-right md:col-span-1 '>
          <div className="bg-white shadow-md border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-lg text-cyan-700 mb-3">Suggestions</h3>
            <DoctorSuggestionList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
