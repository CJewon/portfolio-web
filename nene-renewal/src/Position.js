import React, { useEffect } from 'react';
// import Prism from 'prismjs';

// import 'prismjs/themes/prism.css'; // Prism 테마 추가
// import 'prismjs/components/prism-javascript'; // 사용할 언어 추가

export default function Position() {
  
 
    // useEffect(() => {
    //   Prism.highlightAll(); // Prism을 사용하여 코드 하이라이팅 적용
    // }, []); // useEffect를 사용하여 컴포넌트가 마운트될 때만 실행
  
    return (
      <pre>
        <code className="language-javascript">
          {`
            function 슬라이드위치업데이트(){
              menuContainerUl.style.transform = \`translateX(-\${100 * index}vw)\`
            }
          
            function 차움직이기(도착지점){
              console.log(neneCar)
              neneCar.style.left= \`\${도착지점}%\`;
          
                if(네네카이전좌표 < 도착지점) {
                  neneCar.setAttribute('src',"./nene/img/rightnenecar.png")
                }else {
                  neneCar.setAttribute('src',"./nene/img/leftnenecar.png")
                }
          
                setTimeout(() => {
                  neneCar.setAttribute('src',"./nene/img/네네캐릭터.png")
                }, 1000);
                네네카이전좌표=도착지점;
            }
          
            let slideState = true;
          
            function slideControl() {
              if(slideState) {
                slideState === false;
                slideState === true;
              }
            }
          `}
        </code>
      </pre>
    );
  };





