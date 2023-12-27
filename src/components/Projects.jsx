import React from 'react'
import ProjectsCard from './ProjectsCard'

import "../css/ProjectsCSS.css"

export default function Projects() {
  return (
    <div>
        <h1>My Projects</h1>
        <div id='pj-list'>
            <ProjectsCard name="nono" disc="this is my nono projects" link="https://thenorm.netlify.app" img="https://daddyjs.vercel.app/static/logo.svg"/>
            <ProjectsCard name="nono" disc="this is my nono projects" link="https://thenorm.netlify.app" img="https://daddyjs.vercel.app/static/logo.svg"/>
            <ProjectsCard name="nono" disc="this is my nono projects" link="https://thenorm.netlify.app" img="https://daddyjs.vercel.app/static/logo.svg"/>
            <ProjectsCard name="nono" disc="this is my nono projects" link="https://thenorm.netlify.app" img=""/>

        </div>
    </div>
  )
}
