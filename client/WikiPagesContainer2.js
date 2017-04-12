import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import WikiPages from './WikiPages';
import { dummyData } from './WikiPages'
import store from './store'
import * as WikiActionCreators from './pages'
// import { getAllPages, pages } from './pages'

class WikiPagesContainer extends React.Component {
  // componentDidMount() {
  //   let { dispatch } = this.props
  //   let action = WikiActionCreators.getAllPages()
  //   store.dispatch(action)
  // }

  render() {
    console.log("props in WikiPagesContainer:", this.props)
    console.log("initial state in WikiPagesContainer:", this.state)
    let { pages, dispatch } = this.props
    let boundActionCreators = bindActionCreators(WikiActionCreators, dispatch)
    console.log("pages in WikiPagesContainer", this.props.pages)
    return (
      <WikiPages pages={pages}
                 {...boundActionCreators} />
    )
  }
}

const mapStateToProps = (state) => {
      console.log("state in WikiPagesContainer:", state)
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

export default connect(mapStateToProps, mapDispatchToProps)(WikiPagesContainer)
