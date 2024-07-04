import React from 'react'
import images from "../assets/images"
import EventChild from './EventChild'
// index.js 생략하고 가져옴

const Events = () => {
  return (
    <div className='event_group'>
        {
            images.events.map((item, index) => 
            (<EventChild 
                  key={index} 
                  path={item}
            />))
        }
    </div>
  )
}

export default Events