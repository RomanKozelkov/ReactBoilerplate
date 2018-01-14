
import {applyMiddleware, createStore} from "redux";
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//Routing
export const history = createHistory();

//DEV Tools
const composeEnhancers = composeWithDevTools({ }); //todo: redux-dev-tools options for dev & prod

export interface AppState {
}

export const store = createStore<AppState>(
	composeEnhancers (
		applyMiddleware(
			routerMiddleware(history),
			thunk
		)
	)
);

if(module.hot) {
	module.hot.accept('./rootReducer',() => {
		const nextRootReducer = require('./rootReducer').default;
		store.replaceReducer(nextRootReducer);
	});
}
