import React, { Component } from 'react'
import SocialIcons from '../components/SocialIcons'
import Gmail from '../img/gmail.webp'

export class Contact extends Component {
    render() {
        return (
                <div className="condiv">
                    <h1 className="subtopic">Contact Me</h1>
                    <div className="widecard">
                        <div className="education-text">
                            <h3>Email   :   idrisscodes@gmail.com</h3>
                            <h3>Instagram   :   @economicsnerd</h3>
                        </div>
                        <img src={Gmail} alt="Gmail icon" className="school-logo"/>                        
                    </div>
                    <SocialIcons />
                </div>   
        )
    }
}

export default Contact
