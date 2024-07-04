// 이미지 관리를 하기 위한 js
import logo from './ha_logo.jpg'
import sns from './ha_sns01.jpg' //basic
import sns_over from './ha_sns02.jpg' //over
import main01 from './ha_mainimg01.jpg'
import main02 from './ha_mainimg02.jpg'
import main03 from './ha_mainimg03.jpg'

import banner01 from './ha_banner01.jpg'
import banner02 from './ha_banner02.jpg'
import banner03 from './ha_banner03.jpg'

import best01 from './ha_item01.jpg'
import best02 from './ha_item02.jpg'
import best03 from './ha_item03.jpg'

const images = {
    h_images : { logo, sns, sns_over },
    mains : [ main01, main02, main03 ], // 반복을 위해 배열
    events : [ banner01, banner02, banner03 ],
    bests : [ best01, best02, best03 ]
}

export default images;