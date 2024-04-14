import React from 'react'

import "../css/ProjectsCardCSS.css"
export default function ProjectsCard({name,disc,link,img}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" id='pj-card-a'>
    <div id='projects-card-box'>
        <h2>{name}</h2> 
        <p>{disc}</p> 
    </div>
    </a>
  )
}
