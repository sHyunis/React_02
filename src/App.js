import Footer from "./components/Footer";
import Header from "./components/Header"; 
import Section from "./routes/Section";
import './App.css'

function  App(){
    return (
      <div id='container' className='container'>
         <Header brand={"고구마"} 
                  num={30} 
                  boolean={true} 
                  undefined={undefined} 
         />
         <Section />
         <Footer />
      </div>
    )
}

export default App;

// image 사용법 3가지
// 1. 일일히 import 하는 방법 : 많이 import 하여도 build 시키면 필요없는 파일은 스스로 제거, 사용한 것만 별도로 정리할 필요 X 
// 2. <img src={require('../assets/images/ha_banner01.jpg').default} alt="호박고구마" /> default를 써야 객체로 가져올 수 있다.
// 3. public에 정적인 파일들을 넣는다. public : script, style, images ... 정적인 파일

// netlify에 배포 : 내 사이트 아무나 사용하기 가능
// 최적화 하지 않고 배포하면 용량이 크다.
// 최적화 : 파일을 작게 만든다
// npm run build
// /build

// 리액트 아이콘
// npm i --save react-icons
// https://react-icons.github.io/react-icons/

// props : 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하는 방법 (변수)
// 상위 하위는 고정된것이 아니라 변동 가능하다.
// props는 자식한테 데이터를 넘겨주는 것
// props drilling : 데이터를 전달하는 과정

// 이 불편함을 개선하기 위해 만들어진 것
// context