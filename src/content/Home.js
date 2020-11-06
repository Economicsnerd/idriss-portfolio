import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import profilepic from '../img/Idriss_Photo.jpg'
import SocialIcons from '../components/SocialIcons'

export class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="Idriss' profile picture" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['Howdy!', 'My name is Idriss', 'And I am a Web Developper']} speed={100} eraseDelay={700}/>
            <SocialIcons />
            </div>

        )
    }
}

export default Home
