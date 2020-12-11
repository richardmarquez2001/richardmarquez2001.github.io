import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component{

    render(){

     return (
         <div className = "bar">

             <ul className = "list">
             
                 <Link to = "/"><li className = "list-name">Richard Marquez</li></Link>

                 <div className="list-right">
                    <a href = "mailto:richard.marquez.2001@gmail.com"><li className = "list-right__item">Resume</li></a><br />
                    <Link to = "/about"><li className = "list-right__item">About</li></Link><br />
                    <Link to = "/projects"><li className = "list-right__item">Projects</li></Link>
                 </div>
             </ul>

         </div>
     )

    } 
    
}
