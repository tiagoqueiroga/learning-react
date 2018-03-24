import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import FeedTableRow from './FeedTableRow';
import './Feeds.css';

class Feeds extends Component {
	constructor(props) {
		super(props);

		this.state = {
			feeds: [
				{ id: 0, name: 'Coding Horror', url: 'http://feeds.feedburner.com/codinghorror?format=xml' },
				{ id: 1, name: '2Ality', url: 'http://feeds.feedburner.com/2ality?format=xml' }
			]
		};
	}

	render() {
		return (
			<Container>
				<Row>
					<h1>Feeds</h1>
				</Row>

				<Table striped>
					<thead>
						<tr>
							<th width="20%">Name</th>
							<th>URL</th>
						</tr>
					</thead>
					<tbody>
						{this.state.feeds.map(feed => <FeedTableRow key={feed.id} feed={feed} {...this.props} />)}
					</tbody>
				</Table>
			</Container>
		);
	}
}

export default Feeds;
