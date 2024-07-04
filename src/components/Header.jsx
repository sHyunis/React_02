import Navbar from './Navbar';
import images from '../assets/images'
import style from './Header.module.css'

// function Header(props){
function Header({brand, num}){
    // console.log(props); // brand : "고구마"
    console.log(brand);
    // const {brand, num, boolean, undefined} = props;
    return (
        // <> 빈태그의 이름 : fragment : 디자인은 필요없고 단순히 그룹화하기 위함
        <>
            <header className={style.flex}>
                <h1><img src={images.h_images.logo} alt={brand} /></h1>
                <div className="search_group">
                    <ul className={style.flex}>
                        <li><a href="#">로그인</a></li>
                        <li><a href="#">회원가입</a></li>
                        <li><a href="#">마이페이지</a></li>
                        <li><a href="#">장바구니</a></li>
                        <li><a href="#">주문배송조회</a></li>
                    </ul>

                    <div className="search"></div>

                    <ul className={style.flex} id={style.sns}>
                        <li><a href="#">face</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">star</a></li>
                    </ul>

                </div>
                {/* <FaPen />
                <GiRoundStar /> */}
            </header>
            <Navbar />
        </>
    )
}

export default Header;