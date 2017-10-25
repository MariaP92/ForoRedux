import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { addComment, removeComment, selectComment } from "./actions";
import './App.css';

const Comment = ({ image, name, comment, selectComment, removeComment }) => {
  return (
    <div>
      <div className="col-md-10">
        <img src={image} className="sizeImg" />
        <h3>{name}</h3>
        <hr />
        <p>{comment}</p>
      </div>
      <div className="col-md-2">
        <a className="deleteComment"
          onClick={removeComment}>
          Remove
				</a>
      </div>
    </div>
  );

}

const App = ({ comments }) => {

  const UserComments = comments.map((commentUser, index) => {
    return (
      <Comment
        key={index}
        image={commentUser.image}
        name={commentUser.name}
        comment={commentUser.comment}
        removeComment={() => removeComment(index)}
      />
    );
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(this.nameInputRef.value, this.commentInputRef.value)
  }

  return (

    <div className=" ContainerComments col-md-6" id="add-comment">
      <form onSubmit={onSubmit}>
        <div className="inputComments">
          <div>
            <input className="col-sm-12 col-md-12" placeholder="Name" ref={(e) => this.nameInputRef = e} ></input>
            <textarea className="form-control" name="addComment" id="addComment" rows="5" ref={(e) => this.commentInputRef = e}></textarea>
          </div>
          <div className="inputs">
            <button className="btn btn-success btn-circle text-uppercase" id="submitComment"><span class="glyphicon glyphicon-send"></span> Submit comment</button>
          </div></div>
      </form>
      <div className="Comments">
        {UserComments}
      </div>
    </div>
  );
}

const mapToProps = ({ comments, selectedCommentIndex }) => ({ comments, selectedCommentIndex });
export default connect(mapToProps)(App);