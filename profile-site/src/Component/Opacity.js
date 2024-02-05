import React, { useEffect } from 'react'
import Renewal1 from '../img/neneImg/renewal-1.png'
import Renewal2 from '../img/neneImg/renewal-2.png'
import Renewal3 from '../img/neneImg/renewal-3.png'

export default function (props) {

  useEffect(()=>{

    // console.log(props.sectionRefs)
  },[])
    
      return (
        <div className="sticky-img" ref={props.containerRef}>
          <img src={Renewal1} alt="#" ref={props.sectionRefs[0]}/>
          <img src={Renewal2} alt="#" ref={props.sectionRefs[1]}/>
          <img src={Renewal3} alt="#" ref={props.sectionRefs[2]}/>
         </div>
      );
}
