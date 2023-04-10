import React from 'react'
import Project from "./Project"

export default function projects() {
    return (
        <div className="projects-content">
            <h1>My Projects</h1>
            <Project 
                name="Mind Meter"
                description="My first full-stack app built with Flask, SQL, Python, and Javascript. Mind Meter is a web app where users can log meditation sessions, write journal entries, and listen to relaxing music all in one place. The app features the following APIs: Spotify, Google, YouTube Player, OpenWeather."
                demo="http://meetmindmeter.com/"
                code="https://github.com/ismarjiw/Mind-Meter"
            />
            <Project 
                name="Let me meme it for you"
                description="A web app that allows users to generate random meme images to add text to and create their own custom memes."
                stack=""
                demo="https://sprightly-blancmange-e1b620.netlify.app/"
                code="https://github.com/ismarjiw/meme-generator"
            />
        </div>
    )
}