import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { addComment} from "./actions";
import './App.css';

const Comment = ({ image, name, comment }) => {
  return (
    <div>
      <img src={image} className="sizeImg"/>
      <h3>{name}</h3>
      <p>{comment}</p>
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
      />
    );
  });

  const onSubmit = (e) => {
		e.preventDefault();
		addComment(this.nameInputRef.value,this.commentInputRef.value)
	}

  return (

    <div className="tab-pane col-md-6" id="add-comment">
      <form onSubmit = {onSubmit}>
        <div className="form-group">
          <input className="col-sm-12 col-md-12" placeholder="Name" ref={(e) => this.nameInputRef = e} ></input>
          <div className="col-sm-12 col-md-12">
            <textarea className="form-control" name="addComment" id="addComment" rows="5" ref={(e) => this.commentInputRef = e}></textarea>
          </div>
        </div>
        <div className="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button className="btn btn-success btn-circle text-uppercase" id="submitComment"><span class="glyphicon glyphicon-send"></span> Summit comment</button>
          </div>
        </div>
      </form>
      <div className="Comments">
        {UserComments}
      </div>
    </div>
  );
}

const mapToProps = ({comments, selectedCommentIndex}) => ({comments, selectedCommentIndex});
export default connect(mapToProps)(App);