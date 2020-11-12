import React, { Component } from 'react'

export class SkillCard extends Component {
    render() {
        return (
                <div className="skill-card">
                    <img src={this.props.proIcon} alt="Programming language icon" className="pro-icon"/>
                    <h3 className="skill-title">{this.props.title}</h3>
                </div>
        )
    }
}

export default SkillCard
