import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './Feeds.css';

class FeedTableRow extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	handleClick(e) {
		const url = this.props.feed.url;
		this.props.history.push(`/feed/${encodeURIComponent(url)}`);
	}

	render() {
		return (
			<tr className="table-row-clickable" onClick={this.handleClick.bind(this)}>
				<td>{this.props.feed.name}</td>
				<td>{this.props.feed.url}</td>
			</tr>
		);
	}
}

export default FeedTableRow;
