import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCard = () => {
  return (
    <>
        <div className='relative h-full w-80 bg-red-500 overflow-hidden rounded-4xl '>
            <img className='h-full w-full object-cover ' src="https://media.licdn.com/dms/image/v2/D5603AQGjhTzCiiflsQ/profile-displayphoto-scale_100_100/B56Z25BCFRGsAc-/0/1776925554944?e=1784764800&v=beta&t=qVJlrO90G-KU1tzVl1VvQd-P_9YMTqPK6iD61nGMSAk" alt="" />
            <div className='absolute inset-0 bg-amber-300 p-8 flex flex-col justify-between'>
                <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>1</h2>
                <div className=''>
                    <p className='text-lg leading-normal' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.</p>
                </div>
                <button className='bg-blue-600 text-white font-semibold px-7 py-3 rounded-full'>Satisfied</button> 
                <button className="">
                    <ArrowRight/>
                </button>
            </div>
        </div>
    </>
  )
}
export default RightCard