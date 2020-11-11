import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

export class ProjectCard extends Component {
    render() {
        return (
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.projectImage} alt="Project image" />
                    </div>                    
                    <div className="card_content">
                        <h2 className="card_title">{this.props.title}</h2>
                        <p className="card_text">{this.props.description}</p>
                        <button className="btn card_btn">
                            <Link to={this.props.projectURL}>See Project</Link>
                        </button>
                    </div>                    
                </div>
        )
    }
}

export default ProjectCard
