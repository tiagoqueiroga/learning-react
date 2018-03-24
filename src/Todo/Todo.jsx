import React, { Component } from 'react';
import Task from './Task';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { setNewTask } from '../actionCreators';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
			lastId: 0
		};

		this.handleDone = this.handleDone.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	// Get all tasks from API
	componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/todos?_start=1&_limit=10`).then(res => {
			const tasks = res.data.map(obj => obj);
			const lastId = tasks[tasks.length - 1];
			this.setState({ tasks });
			this.setState({ lastId: lastId });
		});
	}

	handleChange(e) {
		const { value } = e.target;
		this.setState({ newTask: value });
	}

	handleClick(e) {
		e.preventDefault();
		if (this.props.newTask.trim() === '') {
			return;
		}
		const newId = this.state.lastId + 1;
		this.setState({ lastId: newId });

		const newTasks = [...this.state.tasks, { id: newId, title: this.props.newTask, completed: false }];
		this.setState({ tasks: newTasks });
	}

	handleDone(e) {
		const taskId = e.target.getAttribute('index');
		let newTasksList = this.state.tasks;

		newTasksList.forEach(function(e, i) {
			if (e.id == taskId) {
				e.completed = !e.completed;
			}
		});

		this.setState({ tasks: newTasksList });
	}

	handleDelete(e) {
		const taskId = e.target.getAttribute('index');
		let tasks = this.state.tasks;
		tasks.forEach(function(e, i) {
			if (e.id == taskId) {
				tasks.splice(i, 1);
			}
		});

		this.setState({ tasks: tasks });
	}

	render() {
		return (
			<Container>
				<Row>
					<h1>Todo(With Redux)</h1>
				</Row>

				<Row>
					<Col>
						<ul className="list-group">
							{this.state.tasks.map(task => (
								<li key={task.id} className="list-group-item">
									<Task
										handleDone={this.handleDone}
										handleDelete={this.handleDelete}
										task={task}
										{...this.props}
									/>
								</li>
							))}
						</ul>
					</Col>
				</Row>

				<br />

				<Row>
					<Col>
						<div className="input-group">
							<span className="input-group-btn">
								<button
									onClick={this.handleClick.bind(this)}
									className="btn btn-secondary"
									type="button"
								>
									Add Task
								</button>
							</span>
							<input
								value={this.props.newTask}
								onChange={this.props.handleChangeNewTask.bind(this)}
								type="text"
								className="form-control"
								placeholder="New Task"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	newTask: state.newTask
});

const mapDispatchToProps = (dispatch: Function) => ({
	handleChangeNewTask(event) {
		dispatch(setNewTask(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
