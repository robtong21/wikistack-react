import React, { Component } from 'react';
import { Link } from 'react-router'
import { getAllPages } from './pages'
import { initialPages } from './Routes'
import store from './store'
import { connect } from 'react-redux';

export const dummyData = [
  { title: 'Fastball', id: 1},
  { title: '2016 World Series', id: 2},
]

class WikiPages extends Component {

  render () {
    const pages = this.props.pages
    return (
      <div>
        <h3>Pages</h3>
        <hr />
        <form>
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </form>
        <hr />
        <ul className="list-unstyled">
          <ul>
            {
             pages.map(page => {
               return (
                <li key={page.id}>
                  <Link to="">{page.title}</Link>
                </li>
               )
             })
            }
          </ul>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      pages: state
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    initialPages: () => {
      store.dispatch(getAllPages())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiPages)
