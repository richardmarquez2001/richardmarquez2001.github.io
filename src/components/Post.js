import React, { Component } from 'react';


export default class Post extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.title,
			description: this.props.description,
			button: this.props.button,
			color: this.props.color,
			image: this.props.image,
			redirect: this.props.redirect
		};
	}

	render() {
		return (
				<div className="post container">
					<div className="post-text">
						<div className="post-text__title">{this.props.title}</div>

						<div className="post-text__description">
							{this.props.description}
						</div>

						<button className="post-text__button"><a href = {this.props.redirect}>{this.props.button}</a></button>
					</div>

					<img src={this.props.image} className="post-photo" alt="Richard Marquez" />
				</div>
		);
	}
}
