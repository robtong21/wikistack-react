import React from 'react'
import { connect } from 'react-redux';
import WikiPages from './WikiPages';
import { dummyData } from './WikiPages'
import store from './store'
import { getAllPages, pages } from './pages'

class WikiPagesContainer extends React.Component {

  render() {
    let { pages, dispatch } = this.props
    return (
      <WikiPages pages={pages} />
    )
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
      dispatch(getAllPages())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiPagesContainer)
