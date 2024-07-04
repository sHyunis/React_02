import React from 'react';
import images from "../assets/images";
import BestImg from './BestImg';
// index.js 생략하고 가져옴

const Bests = () => {
  return (
    <div>
        {
            images.bests.map((item, index) => (
            <BestImg 
                key={index}
                src={item}
            />))
        }
    </div>
  )
}

export default Bests