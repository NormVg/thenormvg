import React from 'react'
import ProjectsCard from './ProjectsCard'

import "../css/ProjectsCSS.css"

export default function Projects() {
  return (
    <div>
        <h1>My Projects</h1>
        <div id='pj-list'>
            <ProjectsCard name="Batman ChatRoom" disc="Batman 2022 inspired terminal like web Chatroom" link="https://batmanchatroom.onrender.com/" />
            <ProjectsCard name="Dusic" disc="A youtube based music player which I made because I hated ads" link="https://dusic.netlify.app/" />
            <ProjectsCard name="ChatBotGpt" disc="A gpt-2 based custom chatbot which can be finetuned" link="https://github.com/NormVg/ChatBotGpt" />
            <ProjectsCard name="DevG" disc="The Best Developer CLI tool ever created" link="https://github.com/TheAlphaOnes/DevG" />
            <ProjectsCard name="Eventually" disc="Eventually is a reimagining of journaling , dynamically provide Nostalgia and Calmness , detached from internet, for you to be you and help you grow" link="https://github.com/TheAlphaOnes/EventuallyApp" />
            <ProjectsCard name="Grim.Vex" disc="Arc is Shit, I created my own browser" link="https://github.com/NormVg/Grim" />
        </div>
    </div>
  )
}
