import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-16 py-16 pt-6 flex gap-10 items-center gap-10px  h-[90vh]'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content