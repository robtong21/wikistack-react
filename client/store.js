import {createStore, applyMiddleware} from 'redux';
import { pages } from './pages'

import thunkMiddleware from 'redux-thunk';

export default createStore(pages, applyMiddleware(thunkMiddleware))
