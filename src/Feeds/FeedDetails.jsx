import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

class FeedDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			feedData: []
		};
	}

	componentDidMount() {
		const { match: { params } } = this.props;
		const url = decodeURIComponent(params.url);
		axios.get('https://news.google.com/news/rss/?ned=pt-br_br&gl=BR&hl=pt-br').then(res => {
			const feedData = res.data.map(obj => obj);
			this.setState({ feedData });
		});
	}

	render() {
		return (
			<Container>
				<Row>FeedDetails</Row>
			</Container>
		);
	}
}

export default FeedDetails;
