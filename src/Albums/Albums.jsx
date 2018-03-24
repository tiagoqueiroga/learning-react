import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Album from './Album';
import axios from 'axios';

class Albums extends Component {
	constructor(props) {
		super(props);

		this.state = {
			albums: []
		};
	}

	// Get all albums from API
	componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/albums?_start=1&_limit=10`).then(res => {
			const albums = res.data.map(obj => obj);
			this.setState({ albums });
		});
	}

	render() {
		return (
			<Container>
				<Row>
					<h1>Albums</h1>
					<p>
						Explore the history of the classic Lorem Ipsum passage and generate your own text using any
						number of characters, words, sentences or paragraphs. Commonly used as placeholder text in the
						graphic and print industries, Lorem Ipsum's origins extend far back to a scrambled Latin passage
						from Cicero in the middle ages.
					</p>
				</Row>

				{this.state.albums.map(album => (
					<Link
						style={{ textDecoration: 'none' }}
						key={album.id}
						className="nounderline"
						to={`album/${album.id}`}
					>
						<Row className="mb-4 album-no-link">
							<Col>
								<Album album={album} />
							</Col>
						</Row>
					</Link>
				))}
			</Container>
		);
	}
}

export default Albums;
