import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vectorl from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';

 const Intro =()=>{
    return(
        <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Ramya pinapothu</span>
          <span>FullStack Developer With High Level Of Experience in web designing and development, Producing The Quality Work.</span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
            <a href='https://github.com/Ramyapinapothu9912/Currency-application-/tree/main'>
            <img src={Github} alt=""/>
            </a>
            <a href='https://www.linkedin.com/in/ramya-pinapothu-4952ab22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <img src={LinkedIn} alt=""/>
            </a>
            
            <img src={Instagram} alt=""/>
           
        </div>
      </div>
      <div className='i-right'>
        <img src={Vectorl} alt='' />
        <img src={Vector2} alt='' />
        <img src={boy} alt='' />
        <img src={glassesimoji} alt=''/>
        <div style={{top:'-4%',left:'68%'}}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top:'18rem' ,left:'0rem'}}>
            <FloatingDiv image={thumbup} txt1='BestDesign' txt2='Award'/>
        </div>
        {/*burdivs*/}
        <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
        <div className='blur' style={{background:'#c1f5ff',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
</div>
    </div>
    )
 }
 export default Intro
