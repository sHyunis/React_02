import banner01 from '../assets/images/ha_banner01.jpg'
import banner02 from '../assets/images/ha_banner02.jpg'
import banner03 from '../assets/images/ha_banner03.jpg'

// 컴포넌트 = 태그처럼 만들어진 부품 
// 생성자함수, class 
const Section = ()=>{

    const banners = [banner01, banner02, banner03];
    return (
        <section>
            {/* <img src={banner01} alt="호박고구마" />
            <img src={banner02} alt="반건조고구마" />
            <img src={banner03} alt="군고구마" /> */}

            {
                banners.map((item, index) => (<img src={item} alt={index} />))
            }
        </section>
    )
}

export default  Section