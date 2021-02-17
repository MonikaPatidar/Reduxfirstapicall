import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './RootReducer'
import logger from 'redux-logger';
import thunk from 'redux-thunk'


const Store=createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

export default Store;