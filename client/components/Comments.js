import React, { Component } from 'react';

export default class Comments extends Component {

  constructor() {
    super(...arguments);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  renderComments(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.handleDeleteComment(i)}>&times;</button>
        </p>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value ;
    const comment = this.refs.comment.value ;

    this.props.addComments(postId, author, comment);
    this.refs.commentForm.reset();
  }

  handleDeleteComment(i) {
    return () => {
      console.log('removing!!');
      const { removeComments, params: { postId }} = this.props;
      removeComments(postId, i);
    }
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComments)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit }>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
};
