import React, { useEffect } from 'react'

export default function (props) {

  useEffect(()=>{

    
  },[])
    
      return (
        <div className="sticky-img">
          <img src="/img/renewal-1.png" alt="#" ref={props.sectionRefs[0]}/>
          <img src="/img/renewal-2.png" alt="#" ref={props.sectionRefs[1]}/>
          <img src="/img/renewal-3.png" alt="#" ref={props.sectionRefs[2]}/>
         </div>
      );
}
