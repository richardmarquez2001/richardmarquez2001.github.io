import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects'
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {

	render() {

		return (

			<div>
				<BrowserRouter>
				
					<div>
						<Route path = "/" component = {Header} />
						<Route path = "/projects" exact component = {Projects} />
						<Route path = "/about" exact component = {About} />
					</div>

				</BrowserRouter>
			</div>

		);
	}
}
