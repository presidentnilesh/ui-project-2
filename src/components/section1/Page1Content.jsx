import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='px-18 py-9 flex gap-10 items-center gap-10px bg-amber-950 h-[90vh]'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page1Content