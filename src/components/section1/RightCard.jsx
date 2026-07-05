import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <>
        <div className='relative shrink-0 h-full w-80 bg-red-500 overflow-hidden rounded-4xl '>
            <img className='h-full w-full object-cover ' src={props.img} alt="" />

            <RightCardContent id={props.id} color={props.color} tag={props.tag}/>
        </div>
    </>
  )
}
export default RightCard