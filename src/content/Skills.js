import React, { Component } from 'react'
import SkillCard from '../components/SkillCard'
import JavaScriptLogo from '../img/JavaScript.png'
import HtmlLogo from '../img/HTML.png'
import CssLogo from '../img/CSS.svg.png'
import BootstrapLogo from '../img/Bootstrap.svg.png'
import NodejsLogo from '../img/nodejs.png'
import ReactLogo from '../img/react.png'
import RubyLogo from '../img/ruby.png'
import RailsLogo from '../img/rails.png'
import SassLogo from '../img/sass.svg'
import WordpressLogo from '../img/wordpress.svg.png'

export class Skills extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Languages I speak</h1>
                <div className="skill-grid">
                <SkillCard title="HTML" proIcon={HtmlLogo} description={this.props.description}/>
                <SkillCard title="CSS" proIcon={CssLogo} description={this.props.description}/>
                <SkillCard title="Bootstrap" proIcon={BootstrapLogo} description={this.props.description}/>
                <SkillCard title="JavaScript" proIcon={JavaScriptLogo} description={this.props.description}/>
                <SkillCard title="NodeJs" proIcon={NodejsLogo} description={this.props.description}/>
                <SkillCard title="ReactJS" proIcon={ReactLogo} description={this.props.description}/>
                <SkillCard title="Ruby" proIcon={RubyLogo} description={this.props.description}/>
                <SkillCard title="Ruby on Rails" proIcon={RailsLogo} description={this.props.description}/>
                <SkillCard title="SaSS" proIcon={SassLogo} description={this.props.description}/>
                <SkillCard title="Wordpress" proIcon={WordpressLogo} description={this.props.description}/>
                </div>
            </div>
        )
    }
}

export default Skills
