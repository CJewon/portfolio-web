import React, { useEffect, useRef, useState } from 'react'

import '../css/reset.css';
import '../css/Main.css'

import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import myImg from '../img/myImg.jpg';
import SlidePage from './SlidePage';


export default function Main() {


  // section 참고
  const mainSectionRef = useRef(null)
  const introduceSectionRef = useRef(null)
  const workSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  
  const slideContainerRef = useRef(null);
  const percentBarRef = useRef(null)
  const htmlBarRef = useRef(null)
  const cssBarRef = useRef(null)
  const javascriptBarRef = useRef(null)
  const reactBarRef = useRef(null)
  
  const onePageRef = useRef(null)

  const headerRef = useRef(null)

 
  const [moveState, setMoveState] = useState(false);
  const [useDelta, setUseDelta] = useState(0);
  const [index, setIndex] = useState(0) ;  
  
  const sectionsRef = [mainSectionRef, introduceSectionRef, workSectionRef, contactSectionRef]


  // OnePageScroll 작동시키기
  const handleScroll = (event) => {
      event.preventDefault();
      if (!moveState) {
        setMoveState(true);   
        setUseDelta(event.deltaY);
      };
  }
  
  useEffect(() => {
 
    // 500ms 후에 moveState를 false로 설정하여 다시 이벤트 핸들러가 실행될 수 있도록 함
    if (moveState) {
      if (useDelta > 0) {
        setIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          return nextIndex < sectionsRef.length ? nextIndex : sectionsRef.length - 1;
        });
      } else if (useDelta < 0) {
        setIndex(prevIndex => {
          const nextIndex = prevIndex - 1;
          return nextIndex >= 0 ? nextIndex : 0;
        });
      }     

        setTimeout(() => {

          setMoveState(false);
    
        }, 500);
         
    }

      window.addEventListener('mousewheel', handleScroll, {passive : false});

    return () => {
      window.removeEventListener('mousewheel', handleScroll);
    };
  },[moveState]);


  // index의 상태가 변환될때마다 랜더링이 되면, header-position 지정 및 scrollTo 작동시키기
  useEffect(() => {
    
    for(let i = 0; i < 4; i++) {
      headerRef.current.childNodes[i].children[0].classList.remove('header-position')
    }
    headerRef.current.childNodes[index].children[0].classList.add('header-position')

    window.scrollTo({top : index * window.innerHeight, left : 0, behavior: "smooth"})

  }, [index])

  // 브라우저의 width가 800px보다 작아지면 onePageScroll를 작동시켜주지 않기 위해 moveState, useDelta의 상태가 변경될때마다 랜더링후 작동 !
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.getBoundingClientRect().width;
      if (bodyWidth <= 800) {
        window.removeEventListener('mousewheel', handleScroll);
      } else {
        window.addEventListener('mousewheel', handleScroll, { passive: false });
      }
    };
  
    handleResize(); // 초기 실행
    window.addEventListener('resize', handleResize); // 리사이즈 이벤트 리스너 추가
  
    return () => {
      window.removeEventListener('resize', handleResize); // cleanup 함수
      window.removeEventListener('mousewheel', handleScroll); // cleanup 함수
    };
  }, [moveState, useDelta]); // moveState와 useDelta 상태가 변경될 때마다 재실행

  // click 했을때 header의 색상을 바꿔주기 위해 만듬 !
  useEffect(()=> {
    const headerATag = document.getElementsByClassName('header-click-tag')
    
    for(let j = 0; j < 4; j++) {
      headerATag[j].addEventListener('click', () => {
        for(let k = 0; k < 4; k++) {
          headerRef.current.childNodes[k].children[0].classList.remove('header-position')
        }
        headerRef.current.childNodes[j].children[0].classList.add('header-position')
      })
    }
   
   
  }, [])

 
  // id를 기준으로 특정 id가 observer 되었을때, header-position을 알려주기 위해 classList.add or classList.remove 해주는 코드
  useEffect(() => {
    const options = {
      root : null,
      rootMargin : '0px',
      threshold : 0.5
    }

    const observer = new IntersectionObserver(entries => {  
      entries.forEach(entry => {
        if (entry.isIntersecting) {
         const id = entry.target.id;
          const headerLink = document.querySelector(`[href="#${id}"]`);
          headerLink.classList.add('header-position');
        }
        else {
          const id = entry.target.id;
          const headerLink = document.querySelector(`[href="#${id}"]`);
          headerLink.classList.remove('header-position');
        }
      });
    }, options);

    for(let a = 0; a < sectionsRef.length; a++) {
      if(sectionsRef[a].current) {
        observer.observe(sectionsRef[a].current)
      }
    }

    return () => {
      observer.disconnect();
    }

  }, [])

  useEffect(() => {
    
    //observer을 이용하여 화면에 나타날때마다 percent-bar 작동시키기

    const options = {
      root : null,
      rootMargin : '0px',
      threshold : 0.1
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


  }, []);

    
  

  return (
    
    
    <div className='main-app' id='main' ref={onePageRef}>
        <header>
            <ul ref={headerRef}>
              <li><a href="#idPos" className='header-position header-click-tag' onClick={()=>{setIndex(0)}}>MAIN</a></li>
              <li><a href="#introducePos" className='header-click-tag' onClick={() => {setIndex(1)}}>INTRODUCE</a></li>
              <li><a href="#workPos" className='header-click-tag' onClick={() => {setIndex(2)}}>WORK</a></li>
              <li><a href="#contactPos" className='header-click-tag' onClick={() => {setIndex(3)}}>CONTACT</a></li>
            </ul>
          </header>
        
        <section className="main-section" id='idPos' ref={mainSectionRef}>
          <div className="main-container">
            <div className="title-container">
              <h1>
                <span>WELCOME TO MY</span>
                <span>PORTFOLIO</span>
              </h1>
              <p>안녕하세요! 끊임없이 도전하고,<br className='mobile-br'></br>나아가 프론트엔드 개발자가 되고 싶은<br className='mobile-br'></br> 신입 웹 퍼블리셔 최제원입니다.</p>
            </div>
          </div>
          <div className="copyright-container">
            <p>본 페이지는 상업적 목적이 아닌<br className='mobile-br'></br> 개인 포트폴리오용으로 만들어진 사이트입니다.</p>
          </div>
        </section>
       
        <section className='introduce-section' id='introducePos' ref={introduceSectionRef}>
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
                  <p>새로운 것을 만들고 구현할때마다 벅참과 성취감에 취해 즐겁게 공부하고 있습니다. 디자인툴은 figma를 주로 사용합니다! 또한 HTML, CSS, Javascript가 가능하며, 
                      현재는 프레임워크인 React를 공부하여 다양한 프레임워크 환경에서 작업해 나아가는것을 목표로 기초를 다지고 있습니다.
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
        
        <section className='work-section' id='workPos' ref={workSectionRef}>
          <div className="work-title">
          <h2>WORK</h2>
            <div className="work-container" ref={slideContainerRef}>
            
                  <SlidePage></SlidePage>
              
            </div>
            
          </div>
        </section>
       
        <section className="contact-section" id='contactPos' ref={contactSectionRef}>
          <div className="contact-container">
            <h2>CONTACT</h2>
            <p>저에 대해 더 궁금한 점이 있으신가요?</p>
            <div className="adress-container">
              <ul className='address-ul'>
                <li className='email-kakaotalk'>
                  <p>이메일 : <span>donkey0103@naver.com</span></p>
                  <p>카카오톡 : <span>https://open.kakao.com/me/Churi98</span></p>
                </li>
                <li className='end-p-tag'>
                  <p>여러분과 함께 미래를 위한 독특하고 혁신적인 프로젝트를 함께하며 성장하고 싶습니다. 새로운 도전과 경험을 통해 함께 발전해 나가는 여정에서 여러분과 소중한 협업을 만들어나가고 싶습니다.<br></br> 언제든지 이메일이나 카카오톡을 통해 연락주세요. 연락을 남겨주시면 1 ~ 2일내로 답신드리겠습니다. 감사합니다!</p>
                </li>
              </ul>
            </div>
          </div>
          <footer className='footer-container'>
            <p>CHOIJEWONⓒ 2023 PORTFOLIO</p>
          </footer>
        </section>
        
    </div>
  )
}
