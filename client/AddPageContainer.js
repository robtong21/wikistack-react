import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPage from './AddPage'
import {  } from './pages'

const mapStateToProps = state => {
  return {
    pages: state.pages,
  };
};

// const mapDispatchToProps = {postPage}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit (page) {
      return dispatch(postPage(page));
    }
  };
};

class AddPageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      // email: '',
      title: '',
      content: '',
      status: '',
      tags: ''
    }
    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange(evt) {
  //   this.setState({ [evt.target.name]: evt.target.value })
  // }

  handleSubmit(evt) {
    evt.preventDefault();
    const page = {
      name: evt.target.name.value,
      // email: evt.target.email.value,
      title: evt.target.title.value,
      content: evt.target.content.value,
      status: evt.target.status.value,
      tags: evt.target.tags.value,

    };
    // this.props.postPage(page);
    store.dispatch(postPage(page))
    evt.target.name.value = '';
    // evt.target.email.value = '';
    evt.target.title.value = '';
    evt.target.content.value = '';
    evt.target.status.value = '';
    evt.target.tags.value = '';
  }

  render() {
    const pages = this.props.pages
    return (
      <AddPage
        // {...this.props}
        // pages={pages}
        // handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPageContainer);
