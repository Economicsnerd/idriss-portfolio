import React, { Component } from 'react'
import SocialIcons from '../components/SocialIcons'

export class Contact extends Component {
    render() {
        return (

                <div className="condiv">
                    <h1 className="subtopic">Contact Me</h1>
                    <h3>Email   :   email@email.com</h3>
                    <h3>Instagram   :   @economicsnerd</h3>
                    <SocialIcons />
                </div>
            
        )
    }
}

export default Contact
