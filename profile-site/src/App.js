import './App.css';


function App() {
  return (
    <div className="App">
        <header>
          <a href="#idPos">MAIN</a>
          <a href="#introducePos">INTRODUCE</a>
          <a href="#">WORK</a>
          <a href="#">CONTACT</a>
        </header>
        <section className="main-section" id='idPos'>
          <div className="round-container"></div>
          <div className="title-container">
            <h1>WELCOME TO MY PORTFOLIO</h1>
            <p>안녕하세요! 끊임없이 도전하고, 나아가 프론트엔드 개발자가 되고 싶은 신입 웹 퍼블리셔 최제원입니다.</p>
          </div>
          <div className="copyright-container">
            <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 만들어진 사이트입니다.</p>
            <p>CHOIJEWONⓒ 2023 PORTFOLIO</p>
          </div>
        </section>
        <section className='introduce-section' id='introducePos'>
          <h2>INTRODUCE</h2>
          <div className="img-container">
            <img src="#" alt="#" />
          </div>
          <div className="introduce-text-container">
            <h3>안녕하세요! 신입 웹 퍼블리셔 최제원입니다.</h3>
            <p>웹 개발에 관심이 많아 열심히 공부중인 신입 웹퍼블리셔입니다.
                새로운 것을 만들고 구현할때마다 벅참과 성취감에 취해 즐겁게 공부하고 있습니다.  HTML, CSS, Javascript가 가능하며, 
                현재는 Javascript 라이브러리인 React를 공부하여 다양한
                프레임워크 환경에서 작업해 나아가는것을 목표로 기초를 다지고 있습니다.
                저의 개발자로써의 목표는 많은 경험과 지식, 그리고 소통으로
                끊임없이 발전해 나아가는 프론트엔드 개발자가 되는것입니다. 
            </p>
          </div>
        </section>
        <section className='work-section' id='workPos'>
          <img src="#" alt="#" />
          <div className="website-explain-container">
            <img src="#" alt="#" />
            <div className='website-explain-text'>
              <h4>네네치킨</h4>
              <p>네네치킨 메인 홈페이지 리뉴얼</p>
              <div className="summary-rect">
                <p>#디자인</p>
              </div>
              <div className="summary-rect">
                <p>#Javascript</p>
              </div>
              <div className="summary-rect">
                <p>#리뉴얼페이지</p>
              </div>
              <a href="#">상세보기</a>
            </div>
          </div>
          <img src="#" alt="#" />
        </section>
        <section className="contact-section" id='contactPos'>
          <p>저에 대해 더 궁금하신 점이 있으신가요?</p>
          <p>이메일 : donkey0103@naver.com</p>
          <p>메일을 보내주시면 확인 후 최대한 빠르게 회신 드리겠습니다.</p>
        </section>
    </div>
  );
}

export default App;
