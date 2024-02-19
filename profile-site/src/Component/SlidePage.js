import React from 'react'
import neneWeb from '../img/neneWeb.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Link } from 'react-router-dom'

export default function SlidePage() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (

    <Slider {...settings}>
      <div className="slide-list"  style = "display: flex;">
          <img src={neneWeb} alt="네네홈페이지" />
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
          <Link to='/NeneRenewalSite' className='website-click-button'>상세보기</Link>                       
          </div>
      </div>
      <div className="slide-list">
          <img src={neneWeb} alt="네네홈페이지" />
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
          <Link to='/NeneRenewalSite' className='website-click-button'>상세보기</Link>                       
          </div>
      </div>
    </Slider>
  )
}
