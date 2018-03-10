import * as React from "react";
import {Provider} from 'react-redux';
import {store, history} from "../redux/store";
import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import {Header} from "../components/header/header";
import {MainPage} from "../pages/MainPage";

require('../../global_style/core_styles.scss');

class App extends React.Component {
	render() {
		return (<div>
			<Header/>
			<Route exact={false} path='/' component={MainPage}/>
		</div>);
	}
}

export default class MainApp extends React.Component<any, any> {
	render() {
		return <Provider store={store}>
			<ConnectedRouter history={history}>
				<App/>
			</ConnectedRouter>
		</Provider>;
	}
}
