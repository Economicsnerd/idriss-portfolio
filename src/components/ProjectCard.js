import React, { Component } from 'react'


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
                        <a href={this.props.projectURL}>
                        <button className="btn card_btn">See Project</button>
                        </a>                        
                    </div>                    
                </div>
        )
    }
}

export default ProjectCard
