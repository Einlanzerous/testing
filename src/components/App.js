import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import * as actions from 'actions';

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button className='sign-out-button' onClick={() => this.props.changeAuth(false)}>
          Sign Out
        </button>
      )
    } else {
      return (
        <button className='sign-in-button' onClick={() => this.props.changeAuth(true)}>
          Sign In
        </button>
      )
    }
  };

  renderHeader() {
    return (
      <ul className='header'>
        <li>
          <Link className='home-page' to='/'>Home</Link>
        </li>
        <li>
          <Link className='post-comment-link' to='/post'>Post a Comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  };

  render() {
    return (
      <div>
        {this.renderHeader()};
        <Route path='/post' component={CommentBox} />
        <Route path='/' exact component={CommentList} />
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps, actions)(App);
