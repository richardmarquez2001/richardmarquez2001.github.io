import React, { Component } from 'react';
import Post from './Post'
import Navbar from './Navbar'
import Image1 from "../img/pixelit.png"
import Image2 from "../img/pfp.jpg" 
import Image3 from "../img/ric_img.png"
import Image4 from "../img/link-up.png";
export default class Projects extends Component {
	render() {
		return (
			<div>
               <Navbar />
               <div class = "projcontainer">
               <Post 
                  title="Link Up" 
                  description= "This was my term project for my web development class. This project is a simple match making application, where you can meet new people who have similar interests with you. Check it out!"
                  button="Visit here" 
                  color="#dee" 
                  image =   {Image4}
                  redirect = "https://link-up-101.000webhostapp.com/pages/home.php"
               />
               <Post 
                  title="Safe Space" 
                  description= "This project was meant to solve crime within the city, and report any crimes in the downtown area. This way people will know about high crime areas in Toronto. Placed first out of over 300 teams for best use of Google Cloud's API at BrickHacks 2020. Check it out!"
                  button="Visit here" 
                  color="#dee" 
                  image =   {Image3}
                  redirect = "http://makethisasafe.space/"
               />

               <Post 
                  title="Pixelit" 
                  description= "My first ever group project! Here's a simple drawing game where users have to guess the image. This was built with HTML, CSS, and some JQuery."
                  button="Visit here" 
                  color="#eee" 
                  image = {Image1}
                  redirect = "https://dylanle18.github.io/cuHacks2020/"
               />

               <Post 
                     title="Focus Pocus (ADHD Application)" 
                     description= "This project was meant for users who dealt with ADHD. This program forces you to work for a certain amount of time, then take a pause for a 5 minute break. Note: This project is still under development."
                     button="Visit here" 
                     color="#aee" 
                     image = {Image2}
                     redirect = "https://github.com/richardmarquez2001/deltahacksapp"
               />
            </div>
            </div>
		);
	}
}
