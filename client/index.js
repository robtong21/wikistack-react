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

// const onPagesEnter = (nextRouterState) => {
//   store.dispatch(getAllPages())
// }

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);

// ReactDOM.render(
//   <Provider store={store}>
//   <Router>
//     <Route path="/" component={Layout} onEnter={onPagesEnter}>
//       <Route path="/wiki" component={WikiPages} />
//       <Route path="/wiki/add" component={AddPage} />
//       <IndexRedirect to="/wiki" />
//     </Route>
//   </Router>
//   </Provider>,
//   document.getElementById('app')
// );
