import * as React from "react";
import {Provider} from 'react-redux';
import {store, history} from "../redux/store";
import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
require('../../scss/_custom.scss');

interface MainPageProps {
}

export class MainPage extends React.Component<MainPageProps> {
	render() {
		return (
			<div>
				Hello, world!
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
