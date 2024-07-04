import React from 'react'
import { FaPen } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.main_menu}>
        <ul>
            <li><a href="#">고구마</a></li>
            <li><a href="#">고구마 가공식품</a></li>
            <li><a href="#">고구마 종순</a></li>
            <li><a href="#">농자재</a></li>
            <li><a href="#"><FaPen color="red" />구매후기</a></li>
            <li><a href="#"><GiRoundStar />이벤트</a></li>
        </ul>
    </nav>

  )
}

export default Navbar