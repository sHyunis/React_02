import React from 'react';
import images from "../assets/images";
// index.js 생략하고 가져옴
import style from './MainBanner.module.css';

const MainBanner = () => {
  return (
    <div className={style.MainBanner}>
        {
            images.mains.map((item, index) => (
                <img src={item} key={index} />
            ))
        }
    </div>
  )
}

export default MainBanner