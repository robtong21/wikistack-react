import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import WikiPagesContainer from './WikiPagesContainer';
import WikiPages from './WikiPages';
import AddPage from './AddPage';
import Layout from './Layout';
import { getAllPages, loadPages } from './pages';
import store from './store'
import axios from 'axios'

const onAppEnter = () => {
  axios.get('/api/wiki')
    .then(res => {
      // console.log("res in onAppEnter", res)
      store.dispatch(loadPages(res.data));
    });
};

const Routes = ({ initialPages }) => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout} onEnter={ onAppEnter }>
      <Route path="/wiki" component={WikiPagesContainer} />
      <Route path="/wiki/add" component={AddPage} />

    </Route>
  </Router>
);

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
  initialPages: () => dispatch(getAllPages())
});
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
