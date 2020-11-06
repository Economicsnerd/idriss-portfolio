import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SocialIcons extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://github.com/Economicsnerd" target="_blank">
                    
                    </a>
                    <FontAwesomeIcon icon={['fab', 'github']}/>
                <a href="https://www.instagram.com/idrissdebeard/Li" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/idriss-amraoui-036176123/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </div>
        )
    }
}

export default SocialIcons
