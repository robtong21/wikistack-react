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

const mapStateToProps = (state) => {
      console.log("state in WikiPages:", state)
      // console.log("ownProps:", ownProps)
    return {
      pages: state.pages
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    initialPages: () => {
      store.dispatch(getAllPages())
    }
  }
}


class WikiPages extends Component {
  constructor(props) {
    super(props);
    this.state =  Object.assign({}, store.getState());
  }

  // componentDidMount() {
  //   // this.unsubscribe = store.subscribe(() => {
  //   //   this.setState(store.getState());
  //   // });
  //   store.dispatch(getAllPages());
  // }

  // componentWillReceiveProps (nextProps) {
  //   store.dispatch(getAllPages());;
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  render () {
    // store.dispatch(getAllPages())
    console.log("this.state", this.state)
    // const arr = Object.entries(this.state)
    console.log("this.props in WikiPages", this.props)

    // why is initialPages not defined???
    const pages = this.props.initialPages
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
            //  dummyData.map(page => {
            //  Object.keys(this.state).map(page => {
             this.state.map(page => {
               return (
                <li key={page.id}>
                  <Link to="">{page.title}</Link>
                {/* <li key={page[1].id}>
                      <Link to="">{page[1].title}</Link> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(WikiPages)

