import React, { useEffect, useRef } from 'react'

export default function (props) {
    const stickyImgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
         
    
          // 각 섹션에 접근하여 opacity 적용
          props.sectionRefs.forEach((ref) => {
            if (ref.current) {
              ref.current.style.opacity = 0.5;
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

        
      }, [props.sectionRefs]);
    
      return (
        <div className="sticky-img" ref={stickyImgRef}>
          <img src="/img/renewal-1.png" alt="#" />
          <img src="/img/renewal-2.png" alt="#" />
          <img src="/img/renewal-3.png" alt="#" />
         </div>
      );
}
