"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [doctorList,setDoctorlist]=useState([]);

// why?
useEffect(()=>{
  getDoctorList();
},[])
  const getDoctorList=()=>{
    GlobalApi.getDoctorList().then(resp=>{
      console.log(resp.data.data);
      setDoctorlist(resp.data.data);
    })
  }

  return (

    <div>
      {/*<h2>HI</h2>
      <Button className="bg-[var(--button-primary-color)]">Button</Button>*/}
      {/*Hero section*/}
      <Hero />
      {/*Searchbar + Categories*/}
      <CategorySearch />
      {/*Popular Doctor List*/}
      <DoctorList doctorList={doctorList}/>




    </div>
  );
}
