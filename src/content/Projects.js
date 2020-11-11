import React, { Component } from 'react'
import ProjectCard from '../components/ProjectCard'
import GithubFinder from '../img/GithubFinderfull.png'
import openProjects from '../img/Open_Projects.png'
import poochStagram from '../img/PoochStagram.png'
import Snake from '../img/snake.jpg'

export class Projects extends Component {
    static defaultProps = {
        projects : [
        {id: 1, 
        title: 'Github Finder', 
        description: 'A web app built on ReactJs that uses the Github API to find and display github users', 
        projectImage:GithubFinder,
        projectURL: 'https://githubffinder.netlify.app/'},
        {id: 2, title: 'Open_Projects',
         description: 'A simple project manager, built using Ruby on Rails with some JavaScript.',
         projectImage: openProjects,
        projectURL: 'http://open-projects.herokuapp.com/'},
        {id: 3,
         title: 'PoochStagram',
         description: 'PoochStagram is a social media app, built using Ruby on Rails. ',
         projectImage: poochStagram,
         projectURL: 'https://poochstagram.herokuapp.com/'},
        {id: 4, title: 'Snake Game',
         description: 'This is the classic Nokia snake game. Built entirely using ReactJs.',
         projectImage:Snake,
         projectURL: 'https://github.com/Economicsnerd/reactjs-snake'},
        ]       
    }
    displayIcons = (array) => {
        <img src={array.src} alt=""/>
    }
    render() {
        return (
            <div className="condiv">                
                <div className="main">
                    <h1>My Projects</h1>
                    <ul className="cards">
                        {this.props.projects.map((p) => (                           
                            <li className="cards_item">
                                <ProjectCard id={p.id} title={p.title} description={p.description} projectImage={p.projectImage} projectURL={p.projectURL}/>                      
                            </li>                  
                        ))}  
                    </ul> 
                </div>                
            </div>
        )
    }
}

export default Projects
