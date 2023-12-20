import './Reset.css';
import './App.css';
import { codes } from './codeExample';
import { useState, useEffect, useRef } from 'react';
import Position from './Position';
import Prism from 'prismjs';

import 'prismjs/themes/prism.css'; // Prism 테마 추가
import 'prismjs/components/prism-javascript'; // 사용할 언어 추가
import styled from 'styled-components';



const PrismCode = styled.code`
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 12px;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;

  /* Prism이 생성하는 클래스에 대한 스타일 */
  .token.comment {
    color: #5c6370;
  }

  .token.function {
    color: #61afef;
  }
`;

const StyledPre = styled.pre`
  background: #282c34;
  margin: 0;
  padding: 16px;
  overflow: auto;
  font-size: 16px;
  border-radius: 5px;
  width: 642px;
`;

// 이하 코드는 그대로 유지



function App() {

  

  useEffect(() => {
    Prism.highlightAll(); // Prism을 사용하여 코드 하이라이팅 적용
  }, [Position]); // useEffect를 사용하여 컴포넌트가 마운트될 때만 실행


  

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
                        <h3>1&#41; menu-section</h3>
                        <StyledPre><PrismCode >{`${codes.firstSection}`}</PrismCode></StyledPre>
                        <p> 전체적인 슬라이드를 움직여주는 함수와 슬라이드의 위치를 알려주는 네네카를 움직이는 함수입니다. 네네카가 움직일때마다 좌우로 움직이는 효과를 나타내주기 위해서 이미지를 변경하여 사용해주었습니다. 또한 인터랙션이 끝난 후, 원래 상태로 돌아와야하기 때문에 setTimeout을 이용하여 원래 이미지로 되돌려주는 코드를 작성해주었습니다. </p>
                        <StyledPre><PrismCode >{`${codes.secondSection}`}</PrismCode></StyledPre>
                        <p> 슬라이드 버튼을 만들어주는 코드입니다. html 말고 js로 코드를 작성하여 버튼을 생성하였는데 위 방식을 사용한 이유는 new-menu, popular-menu, recommended-menu 3개의 section이 있고 3개의 section에 버튼을 한번에 만들어 주기 위해 위와 같은 방식을 사용해주었습니다. </p>
                        
                        <h3>2&#41; 근처매장</h3>
                        <StyledPre><PrismCode >{`${codes.thirdSection}`}</PrismCode></StyledPre>
                        <p>new-menu, popular-menu, recommended-menu에 들어가는 메뉴들의 정보들을 json파일에 넣어서 사용하기 위해 fetch 함수로 비동기적처리를 함께 해주었습니다.</p>
                        <StyledPre><PrismCode >{`${codes.fourthSection}`}</PrismCode></StyledPre>
                        <p>makeContent라는 함수입니다. 위 함수는 fetch함수로 가지고 온 데이터들을 활용하여 메뉴들의 정보를 나타내주는 함수입니다. 위와 같은 방식으로 작성한 이유는 new-menu, popular-menu, recommended-menu 3개의 section에 들어가는 메뉴의 정보들을 한번에 컨트롤 할 수 있으며, 수정 및 보완을 하는데 있어서 이점이 있다고 생각합니다.</p>
                        <StyledPre><PrismCode >{`${codes.fifthSection}`}</PrismCode></StyledPre>
                        <p>Kakao map Api를 사용하기 위해 일부 코드를 가지고 왔습니다. 카카오맵 기능중 검색했을때 나타나는 리스트들을 정렬하는 부분을 사용하기 위해서 가지고 왔으며, 사용목적인 네네치킨을 기본 검색값으로 설정을 변경해주었습니다. </p>
                        <StyledPre><PrismCode >{`${codes.sixthSection}`}</PrismCode></StyledPre>
                        <p>placeSearchCB라는 함수입니다. 위 함수는 카카오맵 api에서 사용중인 함수인데 이 부분을 제가 사용하고 싶은대로 응용하여 수정해주었습니다. displayPlaces(data)가 데이터를 가지고 온다라는 사실을 확인하였고, 데이터중 일부인 place_name, phone, address_name을 사용하였습니다. 
 검색 리스트형식을 슬라이드 형식으로 표현해주었으며, 검색리스트가 4개이상 나타나게 된다면 옆으로 누르기 버튼을 생성하여 리스트들을 보여주게 만들었습니다.</p>
                        
                        <h3>3&#41; 네네갤러리</h3>
                        <p>네네 갤러리 section 입니다. sns 홍보 및 사람들의 인지도를 보여주고자 하는 목적으로 만든 section입니다. </p>
            
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
