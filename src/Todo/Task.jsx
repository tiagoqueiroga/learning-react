import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Task extends Component {
	constructor(props) {
		super(props);
	}

	renderDoneButton(completed) {
		if (completed) {
			return (
				<button
					index={this.props.task.id}
					onClick={this.props.handleDone.bind(this)}
					type="button"
					className="btn btn-success float-md-right"
					disabled
				>
					Done
				</button>
			);
		} else {
			return (
				<button
					index={this.props.task.id}
					onClick={this.props.handleDone.bind(this)}
					type="button"
					className="btn btn-success float-md-right"
				>
					Done
				</button>
			);
		}
	}

	renderTitle(completed) {
		return completed === true ? (
			<span style={{ textDecoration: 'line-through' }}>{this.props.task.title}</span>
		) : (
			<span>{this.props.task.title}</span>
		);
	}

	render() {
		return (
			<div>
				{this.renderTitle(this.props.task.completed)}
				<button
					index={this.props.task.id}
					onClick={this.props.handleDelete}
					type="button"
					className="btn btn-danger float-md-right"
				>
					Delete
				</button>

				{this.renderDoneButton(this.props.task.completed)}
			</div>
		);
	}
}

export default Task;
