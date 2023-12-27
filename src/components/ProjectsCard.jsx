import React from 'react'

import "../css/ProjectsCardCSS.css"
export default function ProjectsCard() {
  return (
    <div id='projects-card-box'>
      <div><h2>MyProjects</h2> <img className='project-logo' src="https://daddyjs.vercel.app/static/logo.svg" alt="project logo" /></div>
      <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> <img className='open-link-img' src="/img/icon/open-link.svg" alt="open projects link" /></div>

    </div>
  )
}
