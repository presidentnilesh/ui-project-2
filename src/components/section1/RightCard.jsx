import React from 'react'

const RightCard = () => {
  return (
    <>
        <div className='relative h-full w-80 bg-red-500 overflow-hidden rounded-3xl '>
            <img className='h-full w-full object-cover ' src="https://media.licdn.com/dms/image/v2/D5603AQGjhTzCiiflsQ/profile-displayphoto-scale_100_100/B56Z25BCFRGsAc-/0/1776925554944?e=1784764800&v=beta&t=qVJlrO90G-KU1tzVl1VvQd-P_9YMTqPK6iD61nGMSAk" alt="" />
            <div className='absolute top-0 left-0 h-full w-full bg-amber-300'>
                <h2 className='px-8 py-8'>1</h2>
                <div>
                    <p className='px-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.</p>
                </div>
                <button>Satisfied</button> 
                <button></button>
            </div>
            
        </div>
    </>
  )
}

export default RightCard