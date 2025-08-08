import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock } from 'lucide-react';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

function BookAppointment({ doctor }) {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const { user } = useKindeBrowserClient();

    useEffect(() => {
        getTime();
    }, []);

    const isPastDay = (day) => {
        return day < new Date();
    }

    const getTime = () => {
        const timeList = [];
        // Add time slots from 10:00 AM to 12:30 PM
        for (let i = 10; i <= 12; i++) {
            timeList.push({ time: `${i}:00 AM` });
            timeList.push({ time: `${i}:30 AM` });
        }

        // Add time slots from 1:00 PM to 6:30 PM
        for (let i = 1; i <= 6; i++) {
            timeList.push({ time: `${i}:00 PM` });
            timeList.push({ time: `${i}:30 PM` });
        }

        setTimeSlot(timeList);
    };

    const saveBooking = () => {
        const data = {
            data: {
                UserName: user.given_name + " " + user.family_name,
                Email: user.email,
                Time: selectedTimeSlot,
                Date: date,
                doctor: doctor.id
            }
        }
        GlobalApi.bookAppointment(data).then(resp => {
            console.log(resp.data.data);
            if (resp) {
                // GlobalApi.sendEmail(data).then(resp => {
                //     console.log(resp);
                // })
                toast("Booking Confirmation sent to your Mailbox")
            }
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='rounded-full w-full text-center mt-3 cursor-pointer bg-[var(--button-primary-color)] hover:bg-cyan-800 text-white text-sm font-medium'>
                    Book Appointment
                </Button>
            </DialogTrigger>

            <DialogContent className='max-w-4xl'> {/* Makes the dialog wider */}
                <DialogHeader>
                    <DialogTitle className='text-cyan-700 text-xl font-semibold'>
                        Book Appointment
                    </DialogTitle>
                    <DialogDescription className='text-gray-600'>
                        Please choose a date and time for your appointment.
                    </DialogDescription>
                </DialogHeader>

                <div className='flex flex-col md:flex-row gap-10 p-4'>
                    {/* Calendar */}
                    <div className='flex flex-col gap-4'>
                        <h2 className='flex items-center gap-2 text-cyan-700 font-medium text-lg'>
                            <CalendarDays className='text-cyan-600 h-5 w-5' />
                            Select Date
                        </h2>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disable={isPastDay}
                            className="rounded-lg border"
                        />
                    </div>

                    {/* Time Slots */}
                    <div className='flex flex-col gap-4 flex-1'>
                        <h2 className='flex items-center gap-2 text-cyan-700 font-medium text-lg'>
                            <Clock className='text-cyan-600 h-5 w-5' />
                            Select Time Slot
                        </h2>
                        <div className='grid grid-cols-3 sm:grid-cols-4 gap-3 border rounded-3xl p-5 max-h-[400px] overflow-y-auto'>
                            {timeSlot?.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedTimeSlot(item.time)}
                                    className={`p-3 text-center text-sm font-medium cursor-pointer min-w-[80px] transition-all border
              rounded-3xl shadow-sm 
              ${selectedTimeSlot === item.time
                                            ? 'bg-cyan-700 text-white'
                                            : 'bg-cyan-100 text-cyan-800 hover:bg-cyan-600 hover:text-white'}
            `}
                                >
                                    {item.time}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <div className="flex justify-end gap-4 mt-6">
                            <Button
                                type="button"
                                variant="ghost"
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md shadow-md transition-all duration-200"
                            >
                                Close
                            </Button>
                            <Button
                                type="button"
                                disabled={!(date && selectedTimeSlot)}
                                onClick={() => saveBooking()}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Submit
                            </Button>
                        </div>

                    </DialogClose>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    );
}

export default BookAppointment;
