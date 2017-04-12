import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Layout from './Layout';
import WikiPagesContainer from './WikiPagesContainer';
import AddPage from './AddPage';
import { getAllPages } from './pages';

const Routes = ({ initialPages }) => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout} onEnter={initialPages}>
      <Route path="/wiki" component={WikiPages} onEnter={initialPages} />
      <Route path="/wiki/add" component={AddPage} />
      <IndexRedirect to="/wiki" />
    </Route>
  </Router>
);

const mapStateToProps = null
const mapStateToDispatch = dispatch => ({
  initialPages: () => {
    dispatch(getAllPages());
  }
})
export default connect(mapStateToProps, mapStateToDispatch)(Routes);
