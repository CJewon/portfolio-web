import React from 'react'

export default function () {
  return (
    <section className='profile-section'>
        <div className="profile-container">
            <div className='profile-image'>
                <img src="#" alt="내 이미지" />
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
            <a href="#">
                <p>사이트{'\n'}보러가기</p>
            </a>
        </div>
    </section>
  )
}
