import React from 'react'
import images from '../assets/images'

// props
const EventChild = ({path}) => {
  // props의 원본 데이터는 변경할 수 없고
  // 현재 컴포넌트에서만 변경해서 여기서만 사용할 수는 있다.
  // state로 변경하여 사용함
  
  return (
    <img src={path} />
  )
}

export default EventChild