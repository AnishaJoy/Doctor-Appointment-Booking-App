"use client";
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { GraduationCap } from 'lucide-react';

function DoctorSuggestionList() {
  const [suggestionList, setSuggestionList] = useState([]);
  const pathname = usePathname();

  // Extract slug from URL
  const slug = decodeURIComponent(pathname.split('/')[2] || '');

  useEffect(() => {
    getSuggestionList();
    console.log("Current slug:", slug);
  }, []);

  const getSuggestionList = () => {
    GlobalApi.getDoctorList().then(resp => {
      console.log(resp.data.data);
      setSuggestionList(resp.data.data);
    });
  };

  return (
  <div className='flex flex-col'>
    <Command >
      <CommandList>
        <CommandGroup className='space-y-2'>
          {suggestionList.map((item, index) => {
            const isSelected = item.slug === slug;
            return (
              <CommandItem
                key={item.id || index}
                className={`${index !== suggestionList.length - 1 ? 'border-b border-cyan-100' : ''} pb-2`}
              >
                <Link
                  href={`/details/${item?.slug}`}
                  className={`p-2 flex items-center gap-3 w-full rounded-md transition-all duration-200 
                    ${isSelected
                      ? 'bg-cyan-100 font-semibold border-l-4 border-cyan-700 text-cyan-900'
                      : 'hover:bg-cyan-50 text-cyan-800'
                    }`}
                >
                  <Image
                    src={item.Image?.url || ''}
                    alt="icon"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col justify-center">
                    <label className="text-sm">{item.Name}</label>
                  </div>

                  {/* RIGHT SIDE: Category and Experience */}
                  <div className="ml-auto flex flex-col items-end gap-1">
                    <span className="inline-block bg-cyan-600 text-white text-xs px-3 py-1 rounded-full">
                      {item.category?.Name}
                    </span>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <GraduationCap className="text-cyan-600 w-4 h-4" />
                      <span>{item.Year_of_Experience}</span>
                    </div>
                  </div>
                </Link>
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  </div>
);

}

export default DoctorSuggestionList;
