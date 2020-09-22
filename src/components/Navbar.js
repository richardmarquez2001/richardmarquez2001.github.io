import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component{

    render(){

     return (
         <div className = "bar">

             <ul className = "list">
                 <Link to = "/"><li className = "list-name">Richard Marquez</li></Link>
                 <Link to = "/projects"><li className = "list-item">Projects</li></Link>
                 <Link to = "/about"><li className = "list-item">About</li></Link>
                 <a href = "mailto:richard.marquez.2001@gmail.com"><li className = "list-item">Contact</li></a>
             </ul>

         </div>
     )

    } 
    
}
