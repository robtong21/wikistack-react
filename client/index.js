import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux'
import store from './store'
import AddPage from './AddPage';
import AddPageContainer from './AddPageContainer';
import WikiPages from './WikiPages';
import WikiPagesContainer from './WikiPagesContainer';
import Layout from './Layout';
import { getAllPages } from './pages'
import Routes from './Routes'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
