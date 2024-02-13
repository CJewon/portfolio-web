import React, { useEffect, useRef, useState } from 'react'

import '../css/reset.css';
import '../css/Main.css'




import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import myImg from '../img/myImg.jpg';
import nextButton from '../img/nextButton.png'
import previousButton from '../img/previousButton.png'
import SlidePage from './SlidePage';

export default function Main() {

  const section = document.querySelectorAll('section')
  
  const [pageIndex, setPageIndex] = useState(0); // 현재 페이지
  const [moveState, setMoveState] = useState(false); // 스크롤할때의 상태
  const maxPage = section.length - 1; // section의 갯수
  
  const slideContainerRef = useRef(null);
  const sectionRef = useRef(null)
  const percentBarRef = useRef(null)
  const htmlBarRef = useRef(null)
  const cssBarRef = useRef(null)
  const javascriptBarRef = useRef(null)
  const reactBarRef = useRef(null)
  
  const [sectionWidth, setSectionWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0)
  
  
  useEffect(() => {
    

    // OnePage
    window.addEventListener('wheel', (e) => {
      if (!moveState) {
        setMoveState(true)
        setTimeout(() => {
          setMoveState(false);
        }, 1000);
      }

      //웹사이트의 크기안에 있을때
      if(window.scrollY < (section.length) * window.innerHeight) {
        e.preventDefault();
        // 아래로 스크롤 했을때
        if(e.deltaX > 0) { 
          setPageIndex(pageIndex + 1);
          window.scrollTo({top : pageIndex*window.innerHeight, left : 0, behavior: "smooth"} )
        }
      }
    });
    
    
    //슬라이드 생성 및 실행
    
    // console.log(slideContainerRef)
    const slideContainerStyle = window.getComputedStyle(slideContainerRef.current)
    const slideContainerWidth = slideContainerStyle.width
    setSlideWidth(slideContainerWidth);

    const slideUl = document.querySelector('.slide-ul')







    //observer을 이용하여 화면에 나타날때마다 percent-bar 작동시키기

    const options = {
      root : null,
      rootMargin : '0px',
      threshoid : 0.1
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          htmlBarRef.current.childNodes[0].style.strokeDashoffset = 'calc(var(--bar-linepx) - var(--bar-linepx) * 0.91)';
          cssBarRef.current.childNodes[0].style.strokeDashoffset = 'calc(var(--bar-linepx) - var(--bar-linepx) * 0.87)';
          javascriptBarRef.current.childNodes[0].style.strokeDashoffset = 'calc(var(--bar-linepx) - var(--bar-linepx) * 0.84)';
          reactBarRef.current.childNodes[0].style.strokeDashoffset = 'calc(var(--bar-linepx) - var(--bar-linepx) * 0.50)';
        }
        else {
          htmlBarRef.current.childNodes[0].style.strokeDashoffset = '';
          cssBarRef.current.childNodes[0].style.strokeDashoffset = '';
          javascriptBarRef.current.childNodes[0].style.strokeDashoffset = '';
          reactBarRef.current.childNodes[0].style.strokeDashoffset = '';
        }
      });
    }, options);

    if (percentBarRef.current) {
      observer.observe(percentBarRef.current);
    }

    return () => {
      observer.disconnect();
    };
    
    
    // slideUl.style.gap = 
    
    // const handleScroll = (event) => {
    //   if(!moveState) {
    //     setMoveState(true)
    //     console.log(moveState)
    //     setTimeout(() => {
    //       setMoveState(false);
    //     }, 500);

    //     if(window.scrollY < (section.length)*window.innerHeight){   
    //       event.preventDefault();
    //       if (event.deltaY > 0) {
    //         if (event.deltaY > 0) {
    //           setPageIndex(prevIndex => {
    //             const newIndex = prevIndex + 1;
    //             return newIndex > maxPage ? maxPage : newIndex;
    //           });
              
    //       } 
    //       else if (event.deltaY < 0) {
    //           // 위로 스크롤하는 경우
    //           setPageIndex(prevIndex => {
    //             const newIndex = prevIndex > 0 ? prevIndex - 1 : 0;
    //             return newIndex;
    //           });
    //       }            
    //     } 
    //     }
    //     console.log(pageIndex)
    //  }
    // }

    // window.addEventListener('wheel', handleScroll, {passive : false});
    // return () => {
    //   window.removeEventListener('wheel', handleScroll);
    // };


  }, []);

  
  

  return (
    <div className='main-app' id='main'>
      <header>
          <ul>
            <li><a href="#idPos" className='header-position'>MAIN</a></li>
            <li><a href="#introducePos">INTRODUCE</a></li>
            <li><a href="#workPos">WORK</a></li>
            <li><a href="#contactPos">CONTACT</a></li>
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
            <p>본 페이지는 상업적 목적이 아닌<br className='disabled active'></br> 개인 포트폴리오용으로 만들어진 사이트입니다.</p>
          </div>
        </section>
        <section className='introduce-section' id='introducePos'>
          <div className="introduce-title">
          <h2>INTRODUCE</h2>
            <div className="introduce-container">
              <div className="img-container">
                <img src={myImg} alt="내이미지" />
              </div>
              <div className="introduce-text-container">
                <h3>안녕하세요!<br></br>신입 웹 퍼블리셔 <span>최제원</span>입니다.</h3>
                <div className="introduce-text">
                  <p>웹 개발에 관심이 많아 열심히 공부중인 신입 웹퍼블리셔입니다.</p>
                  <p>새로운 것을 만들고 구현할때마다 벅참과 성취감에 취해 즐겁게 공부하고 있습니다.  HTML, CSS, Javascript가 가능하며, 
                      현재는 Javascript 라이브러리인 React를 공부하여 다양한
                      프레임워크 환경에서 작업해 나아가는것을 목표로 기초를 다지고 있습니다.
                  </p>
                  <p>저의 개발자로써의 목표는 많은 경험과 지식, 그리고 <span>소통</span>으로
                      끊임없이 발전해 나아가는 <span>프론트엔드 개발자</span>가 되는것입니다. 
                  </p>
                </div>
                <div className="stack-graph-container">
                  <h3><span>STACK</span></h3>
                    <div className="stack-graph-circle-container">
                      <ul className="circle-ul" ref={percentBarRef}>
                        <li className="circle-li">
                          <div className="circle-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <circle opacity="0.2" cx="50" cy="50" r="46" stroke="#D9D9D9" stroke-width="8"/>
                            </svg>
                            <svg className='percent-bar html' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" ref={htmlBarRef}>
                            <circle cx="50" cy="50" r="46" stroke="#0ACAD7" stroke-width="8"/>
                            </svg>
                            <img src={html} alt="html" className='icon-img' />
                          </div>
                          <p className='percent'>91%</p>
                        </li>
                        <li className="circle-li">
                          <div className="circle-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <circle opacity="0.2" cx="50" cy="50" r="46" stroke="#D9D9D9" stroke-width="8"/>
                            </svg>
                            <svg className='percent-bar css' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" ref={cssBarRef}>
                            <circle cx="50" cy="50" r="46" stroke="#0ACAD7" stroke-width="8"/>
                            </svg>
                            <img src={css} alt="css" className='icon-img' />
                          </div>
                          <p className='percent'>87%</p>
                        </li>
                        <li className="circle-li">
                          <div className="circle-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <circle opacity="0.2" cx="50" cy="50" r="46" stroke="#D9D9D9" stroke-width="8"/>
                            </svg>
                            <svg className='percent-bar js' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" ref={javascriptBarRef}>
                            <circle cx="50" cy="50" r="46" stroke="#0ACAD7" stroke-width="8"/>
                            </svg>
                            <img src={js} alt="js" className='icon-img' />
                          </div>
                          <p className='percent'>84%</p>  
                        </li>
                        <li className="circle-li">
                          <div className="circle-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <circle opacity="0.2" cx="50" cy="50" r="46" stroke="#D9D9D9" stroke-width="8"/>
                            </svg>
                            <svg className='percent-bar react' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" ref={reactBarRef}>
                            <circle cx="50" cy="50" r="46" stroke="#0ACAD7" stroke-width="8"/>
                            </svg>
                            <img src={react} alt="react" className='icon-img' />
                          </div>
                          <p className='percent'>50%</p>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='work-section' id='workPos'>
          <div className="work-title">
          <h2>WORK</h2>
            <div className="work-container" ref={slideContainerRef}>
              {/* <a href="#" className='pre-button'>
                <img className='slide-button' src={previousButton} alt="왼쪽화살표" />
              </a> */}
                {/* <ul className='slide-ul'> */}
                  <SlidePage></SlidePage>
                  {/* <SlidePage></SlidePage> */}
                {/* </ul> */}
              {/* <a href="#" className='next-button'>
                <img className='slide-button' src={nextButton} alt="오른쪽화살표" />
              </a> */}
            </div>
            {/* <div className="slide-position">
              <div className="slide-circle active"></div>
              <div className="slide-circle"></div>
            </div> */}
          </div>
        </section>
        <section className="contact-section" id='contactPos'>
          <div className="contact-container">
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
          </div>
        </section>
        <footer className='footer-container'>
          <p>CHOIJEWONⓒ 2023 PORTFOLIO</p>
        </footer>
    </div>
  )
}
