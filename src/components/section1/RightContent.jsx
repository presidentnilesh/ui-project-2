import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  
  return (<>
    <div id='right' className='flex gap-10 overflow-x-auto rounded-4xl flex-nowrap  p-6 w-2/3 h-full'>
    
   {props.users.map(function(elem , idx){
    return  <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
   })}
    </div>
  </>
  )
}

export default RightContent