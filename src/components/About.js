import React, { Component } from 'react';
import Image from '../img/about_me.png';
import Navbar from './Navbar'

export default class About extends Component {

	render() {

		function getAge(){
			let current = new Date();
			let age = current.getFullYear() - 2001;
			let month = current.getMonth() - 11;
			if (month < 0 || (month === 0 && current.getDate() < 5)){
				age = age - 1;
			}
			return age;
		}

		return (

			<div>
				
				<Navbar />
				<div className = "info">

					<div className = "info-title">
						About <span className = "info-title__last">Me</span>
					</div>


					<div className = "info-description">
						<p>
						Hello! I'm Richard Marquez, I'm {getAge()} years old and I'm going to my second year of Computer Science at Ryerson University, which is located in 
						the heart of Toronto, Canada.
						</p>
					</div>
            
				</div>

				<img className = "picture" src={Image} alt="Portrait of Richard Marquez" />
			</div>

		);
	}
}
