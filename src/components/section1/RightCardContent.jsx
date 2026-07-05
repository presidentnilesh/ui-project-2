import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>

            <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
                <div className='w-full flex flex-col  gap-4'>
                    <p className='text-shadow-2xs text-xl leading-relaxed mb-14 text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.</p>
                    <div className='flex items-center gap-3 '>
                        <div className='flex justify-between'>
                            <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-7 py-3 rounded-full'>{props.tag}</button>
                            <button className='text-2xl font-bold px-4 py-3 -translate-x-1  rounded-full text-white '>
                                <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

</div>
  )
}

export default RightCardContent