import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users =[
    {
      img : 'https://i.pinimg.com/736x/0b/64/84/0b6484744eb95d207a8434e6beb1740d.jpg' ,
      intro : '' ,
      color:'lightseagreen',
      tag : 'Cutieee'
    } ,
    {
      img : 'https://i.pinimg.com/1200x/1c/79/39/1c79392d74dd091fff607ecb82125f83.jpg' ,
      intro : '' ,
      color:'pink',
      tag : 'Payariii'
    } ,
    {
      img : 'https://i.pinimg.com/1200x/e0/bc/0a/e0bc0acc07ff64c84e2521f85776236d.jpg' ,
      intro : '' ,  
      color:'skyblue',
      tag : 'SUndartaaa'
    }, 
    {
      img : 'https://i.pinimg.com/736x/ea/eb/ac/eaebac03313f334416d825e8f0444838.jpg' ,
      intro : '' ,
      color:'black',
      tag : 'SUndartaaa'
      },
         {
      img : 'https://i.pinimg.com/736x/0b/64/84/0b6484744eb95d207a8434e6beb1740d.jpg' ,
      intro : '' ,
      color:'lightseagreen',
      tag : 'Cutieee'
    } ,
    {
      img : 'https://i.pinimg.com/1200x/1c/79/39/1c79392d74dd091fff607ecb82125f83.jpg' ,
      intro : '' ,
      color:'pink',
      tag : 'Payariii'
    } ,
    {
      img : 'https://i.pinimg.com/1200x/e0/bc/0a/e0bc0acc07ff64c84e2521f85776236d.jpg' ,
      intro : '' ,  
      color:'skyblue',
      tag : 'SUndartaaa'
    }, 
    {
      img : 'https://i.pinimg.com/736x/ea/eb/ac/eaebac03313f334416d825e8f0444838.jpg' ,
      intro : '' ,
      color:'black',
      tag : 'SUndartaaa'
      }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App