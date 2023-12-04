import React from 'react'

export default function Explain() {
  return (
    <section className='explain-section'>
            <h2>EXPLAIN</h2>
            <div className='renewal-container'>
                <div className='explain-container'>
                  <p> 신메뉴, 인기메뉴, 추천메뉴를 보여주는 컨텐츠입니다. 슬라이드 형식으로 만들었으며, JSON파일을 사용해 메뉴들의 정보들(이름, 메뉴에 관한 설명, 메뉴 이미지 등등)을 데이터화 시켜준다음, 비동기적 처리를 거쳐 출력하게 만들어 주었습니다. 
                        또한 슬라이드의 위치를 알려주기 위해 네네캐릭터를 이용하여 슬라이드와 같은 속도로 네네캐릭터를 움직이게 만들어 주었습니다. </p>
                  <p> 근처매장의 위치 및 주소, 전화번호를 알려주는 section입니다.
                      카카오 맵 api를 활용해 검색한 정보(위치, 주소, 번호, 가게이름 등등)을 가지고 온 후, 필요한 정보들만 추출해서 만들었습니다. 다만 검색어에 따라 검색의 전체목록의 갯수가 매번 달라지므로 슬라이드 형식으로 만들어주었으며, 제가 현재 만든 부분은 구월동을 기본 검색값으로 설정을 해주었습니다. </p>
                  <p> 네네관련 facebook과 instagram에 올라오는 글들을 보여주는 네네 갤러리 section과 footer section 입니다. 네네 갤러리 section은 홍보를 주 목적으로 만든 section입니다.</p>
                </div>
                <div className='focus-container'>
                    
                </div>
            </div>
    </section>
  )
}
