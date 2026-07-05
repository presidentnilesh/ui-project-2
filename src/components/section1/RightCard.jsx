import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = () => {
  return (
    <>
        <div className='relative h-full w-80 bg-red-500 overflow-hidden rounded-4xl '>
            <img className='h-full w-full object-cover ' src="https://i.pinimg.com/webp/1200x/94/40/29/944029b6087a6c9f5e0fd7e9e6e56312.webp" alt="" />

            <RightCardContent />
        </div>
    </>
  )
}
export default RightCard