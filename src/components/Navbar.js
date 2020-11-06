import React, { Component } from 'react'
import NavItem from './NavItem';

export class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {'NavItemActive': ''}
    }

    // Add CSS class .active to NavItem
    activeitem = (element) => {
        if(this.state.NavItemId.length > 0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive': element}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }
    render() {
        return (
            <nav>
                <ul>
                    <NavItem item="Home" tolink="/" activec={this.activeitem}></NavItem>
                    <NavItem item="About" tolink="/about" activec={this.activeitem}></NavItem>
                    <NavItem item="Education" tolink="/education" activec={this.activeitem}></NavItem>
                    <NavItem item="Skills" tolink="/skills" activec={this.activeitem}></NavItem>
                    <NavItem item="Contact" tolink="/contact" activec={this.activeitem}></NavItem>                    
                </ul>
            </nav>
        )
    }
}

export default Navbar
