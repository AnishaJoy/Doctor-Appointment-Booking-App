"use client"
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { use, useEffect } from 'react'

function Search({ params }) {

  const { cname } = use(params)
  const [doctors, setDoctors] = React.useState([])

  React.useEffect(() => {
    const getDoctors = () => {
      GlobalApi.getDoctorByCategory(cname).then(resp => {
        console.log(resp.data.data)
        setDoctors(resp.data.data)
      })
    }
    getDoctors()
  }, [cname])
  return (
    <div className='mt-5'>
      <DoctorList heading={cname}
        doctorList={doctors} />
    </div>
  )
}

export default Search
