import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-8">
          
          {/* ✅ Image First on Small Screens */}
          <div className="order-1 md:order-2">
            <Image
              src="/doctor.jpg"
              width={800}
              height={800}
              className="rounded-3xl w-full object-cover"
              alt="Doctor"
            />
          </div>

          {/* ✅ Text and Button Together */}
          <div className="order-2 md:order-1">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Your <span className="text-cyan-700">Health</span>, Our <span className="text-cyan-700">Priority</span>
              </h2>

              <p className="mt-4 text-gray-700 text-lg">
                Book appointments with trusted doctors near you. Get quality care from the comfort
                of your home or visit in person—your well-being starts here.
              </p>

              {/* 🔽 Button moved here */}
              <Button className="mt-6 bg-[var(--button-primary-color)] text-white text-base px-6 py-2">
                Book Appointment
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
