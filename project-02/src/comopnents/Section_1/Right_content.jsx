import React from 'react'
import Card from './right_card'

const RightContent = (props) => {
  console.log(props, "Right Content");

  return (
    <div id='card' className='h-180 flex flex-nowrap overflow-x-auto rounded-xl gap-1 w-3/4 bg-gray-100'>
      
      {props.users.map((elem, index) => {
        return (
          <Card key={index} user={elem} />
        )
      })}

    </div>
  )
}

export default RightContent