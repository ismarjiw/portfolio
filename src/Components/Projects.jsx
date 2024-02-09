import React from 'react'
import Project from "./Project"
import meme from '../assets/meme.png'
import mindmeter from '../assets/mindmeter.png'
import listify from '../assets/listify.png'
import summarizer from '../assets/summarizer.png'

export default function projects() {
    return (
        <div className="projects-content" id='projects'>
            <h2>Some Things I've Built</h2>
            <Project 
                name="Text Summarizer"
                description="A web app that allows users to generate summaries from large text using OpenAI's GPT-3.5 Turbo model."
                stack="JavaScript React CSS Python FastAPI"
                code="https://github.com/ismarjiw/text-summarizer"
                image={summarizer}
                altText="A screenshot of the frontpage of Text Summarizer"
            />
            <Project 
                name="Listify"
                description="A web app that allows users to have a smart shopping list that learns their buying habits and helps them remember what they are likely to need to buy on their next trip to the store."
                stack="JavaScript React TailwindCSS Firebase"
                // demo="https://tcl-64-smart-shopping-list.web.app/"
                code="https://github.com/the-collab-lab/tcl-64-smart-shopping-list"
                image={listify}
                altText="A screenshot of the frontpage of Listify"
            />
            <Project 
                name="Let me meme it for you"
                description="A web app that allows users to generate random meme images to add text to and create their own custom memes."
                stack="JavaScript React HTML CSS"
                // demo="https://letmememeitforyou.netlify.app/"
                code="https://github.com/ismarjiw/meme-generator"
                image={meme}
                altText="A screenshot of the frontpage of Let me meme it for you"
            />
            <Project 
                name="Mind Meter"
                description="A web app where users can log meditation sessions, write journal entries, and listen to relaxing music all in one place."
                stack="JavaScript React TailwindCSS Python Flask Spotify API Google API AWS"
                // demo="http://meetmindmeter.com/" // formerly hosted here 
                code="https://github.com/ismarjiw/Mind-Meter"
                image={mindmeter}
                altText="A screenshot of the frontpage of Mind Meter"
            />
        </div>
    )
}