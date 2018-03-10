import * as React from "react";
import NavLink from "reactstrap/lib/NavLink";
import NavItem from "reactstrap/lib/NavItem";
import Nav from "reactstrap/lib/Nav";
import Navbar from "reactstrap/lib/Navbar";
import NavbarBrand from "reactstrap/lib/NavbarBrand";
import Collapse from "reactstrap/lib/Collapse";

interface HeaderProps {
}

export class Header extends React.Component<HeaderProps> {
	render() {
		return (
			<Navbar color="dark" dark expand='md'>
				<NavbarBrand href="/">React boilerplate</NavbarBrand>
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
		);
	}
}