import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Albums.css';

class Album extends Component {
	render() {
		const { title, id, description, url } = this.props.album;
		return (
			<Card>
				<CardImg
					top
					width="100%"
					src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Album&w=900&h=200"
					alt="Card image cap"
				/>
				<CardBody>
					<CardTitle>{title}</CardTitle>
					<CardSubtitle>Some Subtitle</CardSubtitle>
					<CardText>{description}</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default Album;
