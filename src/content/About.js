import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <h4>Thanks for stopping by!</h4>
                <h1>My name is Idriss</h1>
                <h3>Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u></h3>
                <br></br>
                <p>I have been programming since the late 2000's when I started my computer science program. I later went on to study economics and political science and I'm now a graduate student in Montreal. I love building web applications that help business conduct their day to day operations smoothly. I am a freelance deveolpper and Co-Founder of <a className= "text-link" href="https://gitwebsavvy.com/">GitWebSavvy.com.</a></p>

            </div>
        )
    }
}

export default About
