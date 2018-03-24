import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

class AlbumDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: []
		};
	}

	componentDidMount() {
		const { match: { params } } = this.props;
		axios.get(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`).then(res => {
			const photos = res.data.map(obj => obj);
			this.setState({ photos });
		});
	}

	render() {
		return (
			<Container>
				<Row>{this.state.photos.map(photo => <img key={photo.id} src={photo.url} />)}</Row>
			</Container>
		);
	}
}

export default AlbumDetails;
