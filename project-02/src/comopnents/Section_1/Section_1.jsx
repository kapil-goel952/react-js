import React from 'react'
import Navbar from './Navbar'
import LeftContent from './Left_content'
import RightContent from './Right_content'


const Section1 = (props) => {
  console.log(props,"section 1");
  
  return (

    <div className='h-screen w-full  px-20 py-20 '>
      <Navbar/>
      <div className='flex gap-10 py-10'>
        <LeftContent />
        <RightContent users={props.users}/>
      </div>
    </div>
  )
}

export default Section1