import React, { Component } from 'react';
import Image from '../img/ric_og.png';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default class Header extends Component {

	render() {
		return (
            <header>
                
			    <div className = "info">

                    <div className = "info-title">
                        RICHARD <span className = "info-title__last">MARQUEZ</span>
                    </div>
                    

                    <div className = "info-description">
                    Second year computer science student at Ryerson University. 
                    </div>

                    <div className="info-nav">
                        <ul className="info-nav__list">
                            <Link to = "/projects"><li className="info-nav__list__item">Projects</li></Link>
                            <li className="info-nav__list__item"><a href = "mailto:richard.marquez.2001@gmail.com">Email Me</a></li>
                            <Link to = "/about"><li className="info-nav__list__item">About</li></Link>
                            <li className="info-nav__list__item"><a href = "https://drive.google.com/file/d/1VaAv3o0Yeveeq0CbH8NDlPaSRu1iQG_O/view?usp=sharing">Resume</a></li>
                        </ul>
                    </div>

                    <div className = "info-icons">

                        <a href ="https://github.com/richardmarquez2001">
                            <AiFillGithub 
                            className = "info-icons__item"
                            size = '3rem'
                            />
                        </a>

                        
                        <a href ="https://www.linkedin.com/in/richard-marquez-0a3a34181/">
                            <AiFillLinkedin 
                            className = "info-icons__item"
                            size = '3rem'
                            />
                        </a>

                    </div>

                </div>
				    
                <img className = "picture" src={Image} alt="Portrait of Richard Marquez" />
			</header>
		);
	}
}
