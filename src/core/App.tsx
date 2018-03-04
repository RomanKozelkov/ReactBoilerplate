import * as React from "react";
import {Provider} from 'react-redux';
import {store, history} from "../redux/store";
import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Navbar from "reactstrap/lib/Navbar";
import NavbarBrand from "reactstrap/lib/NavbarBrand";
import NavbarToggler from "reactstrap/lib/NavbarToggler";
import Collapse from "reactstrap/lib/Collapse";
import Nav from "reactstrap/lib/Nav";
import NavItem from "reactstrap/lib/NavItem";
import NavLink from "reactstrap/lib/NavLink";
import {UncontrolledDropdown} from "reactstrap";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownItem from "reactstrap/lib/DropdownItem";
require('../../scss/_custom.scss');

interface MainPageProps {
}

export class MainPage extends React.Component<MainPageProps> {

	toggle() {

	}

	render() {
		return (
			<div>
				<Navbar color="inverse" dark expand='md'>
					<NavbarBrand href="/">React boilerplate</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={false} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="#">Demo 1</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">Demo 2</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<div className='container'>
					<Container>
						<Row>
							Hello, world!
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (<div>
			<div>
				<Route exact={false} path='/' component={MainPage}/>
			</div>
		</div>);
	}
}

export default class MainApp extends React.Component<any, any> {
	render() {
		return (<Provider store={store}>
			<ConnectedRouter history={history}>
				<App/>
			</ConnectedRouter>
		</Provider>);
	}
}
