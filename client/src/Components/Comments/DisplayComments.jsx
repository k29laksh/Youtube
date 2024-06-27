import React, { useState } from "react";

const DisplayComments = ({ cmt_id, commentBody, userCommented }) => {
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState("");
  const [commentBdy, setCommentBdy] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEdit(false)
  };

  const handleEdit=(ctId,ctBdy)=>{

    setEdit(true)
    setCommentBdy(ctBdy)

  }

  return (
    <div className="comment_container_outer">
      {edit ? (
        <form onSubmit={handleOnSubmit} className="comments_sub_form comments_sub_form_2">
          <div className="comment_box">
            <div className="comment_profile_logo ">L</div>

            <div className="comment_input">
            <input
              value={commentBody}
              type="text"
              placeholder="Add a comment..."
              className="comment_input_box"
              onChange={(e) => setComment(e.target.value)}
            />
            </div>
          </div>{" "}
          <div className="comment_btns">
            <div className="comment_cancel_btn"  onClick={()=>setEdit(false) || setComment("")}>
              Cancel
            </div>
            <button
              className={
                comment.length > 0 ? `comment_btn` : `comment_disable_btn`
              }
              disabled={comment.length > 0 ? false : true}
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="comment">
          <div className="comment_profile_logo">L</div>

          <div className="comment_section">
          <p className="usercommented">@{userCommented}</p>
          <p className="comment_body">{commentBody}</p>
          </div>
        </div>
      )}

      <div className="comment_edit_btns">
        <button className="comment_delete_btn">Delete</button>
        <button className="comment_edit_btn" onClick={()=>handleEdit(cmt_id,commentBody)}>Edit</button>

      </div>

    </div>
  );
};

export default DisplayComments;
