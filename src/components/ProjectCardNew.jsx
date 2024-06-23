import React from 'react'

function ProjectCardNew({title,content,imag,link}) {
  return (
    <div id='prog-card-box' >
      <a href={link}>
        

            <div id='con-box'>
            <div id='prog-heading'>{title}</div> 
             <div id='prog-con' > {content} </div>
            </div>
         
        <img src={require(`../assets/`+imag)} alt="" />
        </a>
        
    </div>
  )
}

export default ProjectCardNew