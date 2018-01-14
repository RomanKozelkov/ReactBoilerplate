import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import * as es6Promise from 'es6-promise';
import 'isomorphic-fetch';
import 'babel-polyfill';
import MainApp from "./core/App";

es6Promise.polyfill();

const rootEl = document.getElementById("app");

const render = Component => (ReactDOM.render(
	<AppContainer>
		<Component />
	</AppContainer>,
	rootEl
));

render(MainApp);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept("./core/App", () => {
		const NextRootComponent = (require as any)("./core/App").default;
		render(NextRootComponent);
	});
}
