import './Reset.css';
import './App.css';


function App() {

  

  

  return (
    <body className="App">
      <header>
      <div className='header-menu-container'>
        <ul>
            <li><a href="#wel">WELCOME</a></li>
            <li><a href="#ovs">OVERVIEW</a></li>
            <li><a href="#des">DESIGN</a></li>
            <li><a href="#exp">EXPLAIN</a></li>
            <li><a href="#end">END</a></li>
        </ul>
      </div>
      </header>
      <section className='profile-section' id='wel'>
        <div className="profile-container">
            <div className='profile-image'>
                <img src="/img/ProfileImg.png" alt="내 이미지" />
            </div>
            <div className='my-profile'>
                <h1>WELCOME TO MY{'\n'}PORTFOLIO</h1>
                <p>안녕하세요! 끊임없이 도전하고, 나아가 프론트엔드 개발자가{'\n'}되고 싶은 신입 웹 퍼블리셔 최제원입니다!</p>
            </div>
        </div>
        <div className='copyright'>
            <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 만들어진 사이트입니다.</p>
            <p>CHOIJEWONⓒ 2023 PORTFOLIO</p>
        </div>
        <div className='click-button'>
            <a href="https://cjewon.github.io/2023-project/main.html" target='_blank' rel='noopener noreferrer'>
                <p>사이트{'\n'}보러가기</p>
            </a>
        </div>
    </section>
      <div className="sticky-section">
        <div className="contents-container">
          <section className='overview-section' id='ovs'>
            <div className='renewal-container'>
            <h2>1. OVERVIEW</h2>
              <div className="flex-container">
                <div className='question-container overview-size'>
                          <ul>
                            <li>
                              <h3>Q : 왜 네네치킨을 리뉴얼하게 되었나요?</h3>
                              <p>A : 웹으로 봤을땐 규칙없이 나열해놓은듯한 느낌을 받았고, Best 치킨광고를 2번 해주고 있는데 Best치킨광고와 더불어 다른광고나 컨텐츠가 들어가면 차라리 더 낫다는 생각을 했습니다.</p>
                            </li>
                            <li>
                              <h3>Q : 간단하게 작업물에 대한 요약 설명을 한다면?</h3>
                              <p>A : Best 치킨광고 2번을 대신해서 new-menu, popular-menu, recommended-menu 라는 3개의 메뉴홍보 컨텐츠를 만들어주었고, 그 밑으로 동네가계위치를 알려주는 section, 네네관련 SNS 홍보글 및 관련 SNS글을 나타내주는 section, 마무리로 footer 부분으로 작업을 해줌으로써 무분별하게 정렬되어 있는 컨텐츠들을 일정한 규칙으로 정렬을 해주었습니다.</p>
                            </li>
                          </ul>
                </div>
              </div>
            </div>
          </section>
          <section className='design-section' id='des'>
            <div className='renewal-container'>
            <h2>2. Design</h2>
              <div className="flex-container">
                <div className='design-explain-container'>
                  <ul>
                    <li>
                      <p>font-color</p>
                      <div className="color-rect rect1"></div>
                      <div className="color-rect rect2"></div>
                      <div className="color-rect rect3"></div>
                      <div className="color-rect rect4"></div>
                    </li>
                    <div className="color-name">
                        <p>#4F4C4C</p>
                        <p>#B6B3B2</p>
                        <p>#DBD8D8</p>
                        <p>#B19028</p>
                    </div>
                    <li>
                      <p>메인컬러</p>
                      <div className="color-rect rect5"></div>
                    </li>
                    <div className="color-name">
                        <p>#F7BB00</p>
                    </div>
                    <li>
                      <p>footer-color</p>
                      <div className="color-rect rect6"></div>
                    </li>
                    <div className="color-name">
                        <p>#2b2b2b</p>
                    </div>
                  </ul>
                </div>
              </div>
              <div className='question-container'>
                        <h3>Q : 어떤 원칙을 가지고 디자인을 했나요?</h3>
                        <p>A : 불규칙적으로 나열되어 있는 컨텐츠를 정리해준다는 느낌으로 전체적으로 디자인을 해주었습니다. 컬러는 네네치킨에서 사용하는 메인컬러를 최대한 사용하고자 노력했습니다.</p>
              </div>
            </div>
          </section>
          <section className='explain-section' id='exp'>
                <div className='renewal-container'>
                <h2>3. EXPLAIN</h2>
                  <div className="flex-container">

                      <div className='explain-container'>
                        <p> 신메뉴, 인기메뉴, 추천메뉴를 보여주는 컨텐츠입니다. 슬라이드 형식으로 만들었으며, JSON파일을 사용해 메뉴들의 정보들(이름, 메뉴에 관한 설명, 메뉴 이미지 등등)을 데이터화 시켜준다음, 비동기적 처리를 거쳐 출력하게 만들어 주었습니다. 
                              또한 슬라이드의 위치를 알려주기 위해 네네캐릭터를 이용하여 슬라이드와 같은 속도로 네네캐릭터를 움직이게 만들어 주었습니다. </p>
                        <p> 근처매장의 위치 및 주소, 전화번호를 알려주는 section입니다.
                            카카오 맵 api를 활용해 검색한 정보(위치, 주소, 번호, 가게이름 등등)을 가지고 온 후, 필요한 정보들만 추출해서 만들었습니다. 다만 검색어에 따라 검색의 전체목록의 갯수가 매번 달라지므로 슬라이드 형식으로 만들어주었으며, 제가 현재 만든 부분은 구월동을 기본 검색값으로 설정을 해주었습니다. </p>
                        <p> 네네관련 facebook과 instagram에 올라오는 글들을 보여주는 네네 갤러리 section과 footer section 입니다. 네네 갤러리 section은 홍보를 주 목적으로 만든 section입니다.</p>
                      </div>
                  </div>
                </div>
          </section>
          <section className='end-section' id='end'>
            <div className='renewal-container'>
            <h2>4. END</h2>
              <div className="flex-container">
                <div className='question-container'>
                          <ul>
                            <li>
                              <h3>Q : 작업을 진행하면서 힘들었던 부분이 있었나요?</h3>
                              <p>A : Application Programming Interface를 이용하는데 있어서 제가 원하는 부분(데이터)만 사용하기 위해 코드를 분석하고 이해하는부분에 있어서 시간투자를 오래한것 같습니다. 그 후 비동기처리까지 해주기 위해 기존 함수들을 수정을 하는데 있어서 어려움이 있었습니다. 그러다보니 제가 작성한 코드를 다시 한번 분석하고 이해함으로써 코드의 흐름의 중요성을 다시 한번 느끼게 되었습니다.</p>
                            </li>
                            <li>
                              <h3>Q : 작업을 마치며 느꼈던 점이 있었나요?</h3>
                              <p>A : 크게 두가지정도 있었습니다. 첫번째로 HTML 구조작성입니다. HTML 구조가 어떻게 만들어지냐에 따라 CSS와 JS작성이 최대한 객관화 시켜줄수있다라는 것을 느꼈습니다. 두번째로  컴포넌트화의 필요성입니다. 슬라이드를 만들면서 HTML에다가 메뉴를 하나하나 작성하는것이 아니라 JSON파일에 내가 원하는 메뉴들의 정보를 추가를 한 다음, 데이터화 한 정보들을 불러와줌으로써 슬라이드를 생성하도록 만들어주었습니다. 이렇게 만들어줌으로써 유지보수를 해야하는경우, 슬라이드를 추가, 삭제가 편리해졌고, 데이터만 수정해준다면 편리하게 수정이 가능하다는 점에서 필요성을 느꼈습니다.</p>
                            </li>
                          </ul>
                </div>
              </div>
            </div>
          </section>  
         </div>
         <div className="sticky-img">
          <img src="/img/renewal-1.png" alt="#" />
          <img src="/img/renewal-2.png" alt="#" />
          <img src="/img/renewal-3.png" alt="#" />
         </div>
      </div>
      <section className='takeaway-section'>
        <div className="flex-container">
          <h3>마무리하며...</h3>
          <p>리뉴얼 작업을 하면서 코드작업하는 시간보다 공부하는 시간이 좀 더 길었던 것 같습니다. 그 만큼 작업하면서 전보다 발전했다라는것을 느낄수있어서 좋았습니다. 앞으로도 열심히 발전하는 개발자가 되겠습니다. </p>
        </div>
      </section>
    </body>
  );
}

export default App;
