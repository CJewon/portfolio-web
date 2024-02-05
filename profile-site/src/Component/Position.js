import React, { useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/themes/prism.css'; // Prism 테마 추가
import 'prismjs/components/prism-javascript.js'; // 사할 언어 추가



import '../css/prism.css';
export default function Position(props) {
  
 
    useEffect(() => {
      Prism.highlightAll(); // Prism을 사용하여 코드 하이라이팅 적용
    }, []); // useEffect를 사용하여 컴포넌트가 마운트될 때만 실행
  
    return (
      <pre className='language-pre'>
        <code className="language-javascript">
          {props.내용}
        </code>
      </pre>
    );
  };





