import React from 'react'
import Project from "./Project"
import meme from '../assets/meme.png'
import mindmeter from '../assets/mindmeter.png'

export default function projects() {
    return (
        <div className="projects-content" id='projects'>
            <h2>Some Things I've Built</h2>
            <Project 
                name="Mind Meter"
                description="My first full-stack app. Mind Meter is a web app where users can log meditation sessions, write journal entries, and listen to relaxing music all in one place."
                stack="Javascript React Tailwind Python Flask Spotify API Google API OAuth 2.0 AWS"
                demo="http://meetmindmeter.com/"
                code="https://github.com/ismarjiw/Mind-Meter"
                image={mindmeter}
            />
            <Project 
                name="Let me meme it for you"
                description="A web app that allows users to generate random meme images to add text to and create their own custom memes."
                stack="Javascript React HTML CSS"
                demo="https://letmememeitforyou.netlify.app/"
                code="https://github.com/ismarjiw/meme-generator"
                image={meme}
            />
        </div>
    )
}