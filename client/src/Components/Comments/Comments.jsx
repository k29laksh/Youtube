import React, { useState } from "react";
import "./Comments.css";
import DisplayComments from "./DisplayComments";

const Comments = () => {
  const [comment, setComment] = useState("");
  const commentsList = [
    {id:1, commentBody: "hello", userCommented: "abc" },
    {id:2, commentBody: "Hi", userCommented: "xyz" },
    {id:3, commentBody: "bol bhai", userCommented: "pqr" },
  ];
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    setComment("");
  };
  return (
    <>
      <form onSubmit={handleOnSubmit} className="comments_sub_form">
        <div className="comment_box">
          <div className="comment_profile_logo">L</div>

          <div className="comment_input">
          <input
            value={comment}
            type="text"
            placeholder="Add a comment..."
            className="comment_input_box"
            onChange={(e) => setComment(e.target.value)}
          />
          </div>
        </div>{" "}
        <div className="comment_btns">
          <div className="comment_cancel_btn" onClick={() => setComment("")}>
            Cancel
          </div>
          <button
            className={
              comment.length > 0 ? `comment_btn` : `comment_disable_btn`
            }
            disabled={comment.length > 0 ? false : true}
          >
            Comment
          </button>
        </div>
      </form>
      <div className="display_comment_container">
        {commentsList.map((m) => (
          <DisplayComments
            cmt_id={m.id}
            commentBody={m.commentBody}
            userCommented={m.userCommented}
          />
        ))}
      </div>
    </>
  );
};

export default Comments;
