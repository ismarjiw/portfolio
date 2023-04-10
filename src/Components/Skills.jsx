import React from 'react'
import Skill from "./Skill"

export default function skills() {
    return (
        <div className="skills-content">
            <h1>My Skills</h1>
            <Skill 
                name="Python"
            />
            <Skill 
                name="Javascript"
            />
            <Skill 
                name="HTML"
            />
            <Skill 
                name="CSS"
            />
            <Skill 
                name="SQL"
            />
            <Skill 
                name="Java"
            />
        </div>
    )
}