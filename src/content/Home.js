import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'

// Import Profile Picture

import profilepic from '../img/Idriss_Photo.jpg'

export class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="Idriss' profile picture"></img>
            <ReactTypingEffect className="typingeffect" text={['Howdy!', 'My name is Idriss', 'And I am a Web Developper']} speed={100} eraseDelay={700}/>
            </div>

        )
    }
}

export default Home
