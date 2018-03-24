import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

class MainMenu extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="faded" light expand="md">
					<NavbarBrand href="/">React Project</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="m1-right" navbar>
							<NavItem>
								<Link className="nav-link" to="/albums">
									Albums
								</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="/feeds">
									Feeds
								</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="/todo">
									Todo
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default MainMenu;
