import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component{

    render(){

     return (
         <div className = "bar">

             <ul className = "list">
             
                 <Link to = "/"><li className = "list-name">Richard Marquez</li></Link>

                 <div className="list-right">
                    <a href = "https://drive.google.com/file/d/1LNPLZ66WfB_bT0QPk_TvW9sNtsTuO7Tb/view?usp=sharing"><li className = "list-right__item">Resume</li></a>
                    <Link to = "/about"><li className = "list-right__item">About</li></Link>
                    <Link to = "/projects"><li className = "list-right__item">Projects</li></Link>
                 </div>
             </ul>

         </div>
     )

    } 
    
}
