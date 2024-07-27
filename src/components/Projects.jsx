import React from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectCardNew from "./ProjectCardNew";
import "../css/ProjectsCSS.css";

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div id="pj-list">
        <ProjectCardNew
          title="Batman ChatRoom"
          content="Batman 2022 inspired terminal like web Chatroom"
          link="https://batmanchatroom.vercel.app/"
          imag="batman.gif"
        />

        {/* <ProjectCardNew
          title="DevG"
          content="The Best Developer CLI tool ever created"
          link="https://github.com/TheAlphaOnes/devg"
          imag="kraken.gif"
        /> */}

        <ProjectCardNew
          title="Kraken"
          content="'NEW' code editor, made with new flavour, design pattern and theory "
          link="https://github.com/NormVg/Kraken"
          imag="kraken.gif"
        />

        <ProjectCardNew
          title="JAM"
          content="Just AppImage Manager for linux"
          link="https://github.com/TheAlphaOnes/jam"
          imag="def.png"
        />

        <ProjectCardNew
          title="Grim.Vex"
          content="Arc is Shit, I created my own browser"
          link="https://github.com/NormVg/Grim"
          imag="grim.gif"
        />

        <ProjectCardNew
          title="Eventually"
          content="Eventually is a reimagining of journaling , dynamically provide Nostalgia and Calmness "
          link="https://github.com/NormVg/ChatBotGpt"
          imag="eventually.gif"
        />

        <ProjectCardNew
          title="ChatBotGpt"
          content="A gpt-2 based custom chatbot which can be finetuned"
          link="https://github.com/NormVg/ChatBotGpt"
          imag="def.png"
        />

        <ProjectCardNew
          title="Dusic"
          content="A youtube based music player which I made because I hated ads"
          link="https://dusic.netlify.app/"
          imag="def.png"
        />

        {/* <ProjectCardNew
          title="Dusic"
          content="A youtube based music player which I made because I hated ads"
          link="https://dusic.netlify.app/"
          imag="kraken.gif"
        /> */}
      </div>
    </div>
  );
}
