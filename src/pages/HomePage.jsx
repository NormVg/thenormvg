import React from 'react'

import Intro from '../components/Intro'
import TAO from '../components/TAO'
import Projects from '../components/Projects'
import MyContacts from '../components/MyContacts'


import "../css/HomeCss.css"

export default function HomePage() {
  return (
    <>

    <div id='home-box'>
      <div id='home-box-child'>
        <Intro/>
        <br /><br /><br />
        <hr />
        <TAO/>
        <br />
        <hr />
        <Projects/>
        <br />
        <hr />
        <MyContacts/>
        <br />
        
        
      </div>
    </div>
    </>
  )
}
