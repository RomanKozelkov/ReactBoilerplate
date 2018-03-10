import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import 'isomorphic-fetch';
import MainApp from "./core/App";

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
