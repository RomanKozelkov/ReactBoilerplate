import * as React from "react";
import Row from "reactstrap/lib/Row";
import Container from "reactstrap/lib/Container";

interface MainPageProps {
}

export class MainPage extends React.Component<MainPageProps> {
	render() {
		return <Container>
			<Row>
				Hello, world!
			</Row>
		</Container>;
	}
}