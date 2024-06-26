import React, { useState } from "react";
import './Comments.css'

const Comments = () => {
    const [comment,setComment]= useState("")

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        console.log(comment)
        setComment("")
    }
  return (
    <>
      <form onSubmit={handleOnSubmit} className="comments_sub_form">
        <div className="comment_box">
        <div className="videoPage_logo">L</div>

          <input
          value={comment}
            type="text"
            placeholder="Add a comment..."
            className="comment_input_box"
            onChange={e=>setComment(e.target.value)}
          />
        </div>{" "}
        <div className="comment_btns">
            <div className="comment_cancel_btn"onClick={()=>setComment("")} >Cancel</div>
            <button  className={comment.length>0? `comment_btn`:`comment_disable_btn`} disabled={comment.length>0? false:true}>Comment</button>
        </div>
      </form>
    </>
  );
};

export default Comments;
