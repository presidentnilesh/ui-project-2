import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'
import { Users } from 'lucide-react'

const Section1 = (props) => {
  console.log()
  return (
    <div className='h-screen w-full bg-red-100'>
        <Navbar />
        <Page1Content users={props.users}/>
    </div>
  )
}
export default Section1