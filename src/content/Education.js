import React, { Component } from 'react'
import Card from '../components/Card'
import hecLogo from '../img/HEC.jpg'
import udemLogo from '../img/Udem.svg.png'

export class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Card title = "M.A. Political Science" where="Universite de Montreal" from="September 2020" to="Present" schoolImg={udemLogo}/>
                <Card title = "B.Sc Economics and Political Science" where="Universite de Montreal" from="January 2017" to="April 2020" schoolImg={udemLogo}/>
                <Card title = "B.Sc Economics and Finance" where="HEC and Universite de Montreal" from="September 2015" to="December 2016" schoolImg={hecLogo}/>
            </div>
        )
    }
}

export default Education
