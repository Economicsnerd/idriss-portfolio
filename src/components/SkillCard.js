import React, { Component } from 'react'

export class SkillCard extends Component {
    render() {
        return (
                <div className="skill-card">
                    <img src={this.props.proIcon} alt="Programming language icon" className="pro-icon"/>
                    <h4 className="skill-title">{this.props.title}</h4>
                    <h4 className="secondtext">{this.props.description}</h4>
                </div>
        )
    }
}

export default SkillCard
