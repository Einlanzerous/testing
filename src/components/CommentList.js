import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <li className='comments' key={comment}>{comment}</li>;
    })
  }

  render() {
    return (
      <div>
        <ul>
          <h4>
            Comment List
          </h4>
          <div>
            <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
          </div>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return { comments: state.comments };
};

export default connect(mapStateToProps, actions)(CommentList);
