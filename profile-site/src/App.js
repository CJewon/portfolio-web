import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
          <ul>
            <li><a href="#idPos" className='header-position'>MAIN</a></li>
            <li><a href="#introducePos">INTRODUCE</a></li>
            <li><a href="#">WORK</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </header>
        <section className="main-section" id='idPos'>
          <div className="main-container">
            <div className="title-container">
              <h1>
                <span>WELCOME TO MY</span>
                <span>PORTFOLIO</span>
              </h1>
              <p>안녕하세요! 끊임없이 도전하고, 나아가 프론트엔드 개발자가 되고 싶은 신입 웹 퍼블리셔 최제원입니다.</p>
            </div>
          </div>
          <div className="copyright-container">
            <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 만들어진 사이트입니다.</p>
            <p>CHOIJEWONⓒ 2023 PORTFOLIO</p>
          </div>
        </section>
        <section className='introduce-section' id='introducePos'>
          <h2>INTRODUCE</h2>
          <div className="introduce-container">
            <div className="img-container">
              <img src="/img/myImg.jpg" alt="내이미지" />
            </div>
            <div className="introduce-text-container">
              <h3>안녕하세요!<br></br>신입 웹 퍼블리셔 <span>최제원</span>입니다.</h3>
              <div className="introduce-text">
                <p>웹 개발에 관심이 많아 열심히 공부중인 신입 웹퍼블리셔입니다.</p>
                <p>새로운 것을 만들고 구현할때마다 벅참과 성취감에 취해 즐겁게 공부하고 있습니다.  HTML,<br></br> CSS, Javascript가 가능하며, 
                    현재는 Javascript 라이브러리인 React를 공부하여 다양한<br></br>
                    프레임워크 환경에서 작업해 나아가는것을 목표로 기초를 다지고 있습니다.
                </p>
                <p>저의 개발자로써의 목표는 많은 경험과 지식, 그리고 <span>소통</span>으로
                    끊임없이 발전해 나아가는<br></br> <span>프론트엔드 개발자</span>가 되는것입니다. 
                </p>
              </div>
            <div className="stack-graph-container">
              <h3><span>STACK</span></h3>
              <div className="stack-graph-circle-container">
                <ul className="circle-ul">
                  <li className="circle-li">
                    <div className="circle-img">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <circle opacity="0.2" cx="50" cy="50" r="46" stroke="#D9D9D9" stroke-width="8"/>
                      </svg>
                      <svg className='percent-bar' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="46" stroke="#0ACAD7" stroke-width="8"/>
                      </svg>
                      <img src="/img/html.png" alt="html" className='icon-img' />
                    </div>
                    <p className='percent'>50%</p>
                  </li>
                  <li className="circle-li">
                    <div className="circle-img">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <circle opacity="0.2" cx="50" cy="50" r="46" stroke="#D9D9D9" stroke-width="8"/>
                      </svg>
                      <svg className='percent-bar' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="46" stroke="#0ACAD7" stroke-width="8"/>
                      </svg>
                      <img src="/img/css.png" alt="css" className='icon-img' />
                    </div>
                    <p className='percent'>50%</p>
                  </li>
                  <li className="circle-li">
                    <div className="circle-img">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <circle opacity="0.2" cx="50" cy="50" r="46" stroke="#D9D9D9" stroke-width="8"/>
                      </svg>
                      <svg className='percent-bar' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="46" stroke="#0ACAD7" stroke-width="8"/>
                      </svg>
                      <img src="/img/js.png" alt="js" className='icon-img' />
                    </div>
                    <p className='percent'>50%</p>  
                  </li>
                  <li className="circle-li">
                    <div className="circle-img">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <circle opacity="0.2" cx="50" cy="50" r="46" stroke="#D9D9D9" stroke-width="8"/>
                      </svg>
                      <svg className='percent-bar' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="46" stroke="#0ACAD7" stroke-width="8"/>
                      </svg>
                      <img src="/img/react.png" alt="react" className='icon-img' />
                    </div>
                    <p className='percent'>50%</p>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </section>
        <section className='work-section' id='workPos'>
          <h2>WORK</h2>
          <div className="work-container">
            <a href="#">
              <img src="/img/previousButton.png" alt="왼쪽화살표" />
            </a>
            <div className="website-explain-container">
              <img src="/img/neneWeb.png" alt="네네홈페이지" />
              <div className='website-explain-text'>
                <h4>네네치킨</h4>
                <p>네네치킨 메인 홈페이지 리뉴얼</p>
                <div className="summary-rect-container">
                  <div className="summary-rect-text">
                    <div className="summary-rect">
                      <p>#디자인</p>
                    </div>
                    <div className="summary-rect">
                      <p>#Javascript</p>
                    </div>
                    <div className="summary-rect">
                      <p>#리뉴얼페이지</p>
                    </div>
                  </div>
                </div>
                
                <div className="website-click-button">
                  <a href="#">상세보기</a>
                </div>
              </div>
            </div>
            <a href="#">
              <img src="/img/nextButton.png" alt="오른쪽화살표" />
            </a>
          </div>
          <div className="slide-position">
             <div className="slide-circle active"></div>
             <div className="slide-circle"></div>
          </div>
        </section>
        <section className="contact-section" id='contactPos'>
          <h2>CONTACT</h2>
          <p>저에 대해 더 궁금한 점이 있으신가요?</p>
          <div className="adress-container">
            <ul className='address-ul'>
              <li className='email-kakaotalk'>
                <p>이메일 : <span>donkey0103@naver.com</span></p>
                <p>카카오톡 : <span>kakaotalk</span></p>
              </li>
              <li className='end-p-tag'>
                <p>여러분과 함께 미래를 위한 독특하고 혁신적인 프로젝트를 함께하며 성장하고 싶습니다. 새로운 도전과 경험을 통해 함께 발전해 나가는 여정에서 여러분과 소중한 협업을 만들어나가고 싶습니다.<br></br> 언제든지 이메일이나 카카오톡을 통해 연락주세요. 연락을 남겨주시면 1 ~ 2일내로 답신드리겠습니다. 감사합니다!</p>
              </li>
            </ul>
          </div>
        </section>
    </div>
  );
}

export default App;
