import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCard = () => {
  return (
    <>
        <div className='relative h-full w-80 bg-red-500 overflow-hidden rounded-4xl '>
            <img className='h-full w-full object-cover ' src="https://media.licdn.com/dms/image/v2/D5603AQGjhTzCiiflsQ/profile-displayphoto-scale_100_100/B56Z25BCFRGsAc-/0/1776925554944?e=1784764800&v=beta&t=qVJlrO90G-KU1tzVl1VvQd-P_9YMTqPK6iD61nGMSAk" alt="" />

            <div className='absolute top-0 left-0 h-full w-full bg-amber-300 p-8 flex flex-col justify-between'>

                <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>1</h2>
                <div className='w-full flex flex-col  gap-4'>
                    <p className='text-lg leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.</p>
                    <div className='flex items-center gap-3 '>
                        <div className='flex justify-between'>
                            <button className='bg-blue-600 text-white font-semibold px-7 py-3 rounded-full'>Satisfied</button>
                            <button className='text-2xl font-bold px-4 py-3 bg-blue-600 rounded-full text-white '>
                                <ArrowRight />
                        </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
export default RightCard