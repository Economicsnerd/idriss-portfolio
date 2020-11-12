import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div className="widecard">        
                    <div className="compdetfle education-text">
                    <h3>{this.props.title}</h3>
                    <h4 className="secondtext">{this.props.where}</h4>
                    <h4 className="secondtext">{this.props.from} - {this.props.to}</h4>
                    </div>
                    <div className="compdetfle">
                    <img src={this.props.schoolImg} alt="School logo" className="school-logo"/>
                    </div>            
            </div>
        )
    }
}

export default Card;