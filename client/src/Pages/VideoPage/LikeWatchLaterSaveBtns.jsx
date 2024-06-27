import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import "./LikeWatchLaterSaveBtns.css";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

import { PiShareFatLight } from "react-icons/pi";

const LikeWatchLaterSaveBtns = () => {
  const [saveVideo, setSaveVideo] = useState(false);
  const [likeVideo, setLikeVideo] = useState(false);
  const [dislikeVideo, setDislikeVideo] = useState(false);

  const toogleSavedVideo = () => {
    if (saveVideo) {
      setSaveVideo(false);
    } else {
      setSaveVideo(true);
    }
  };
  const toogleLikeBtn = () => {
    if (likeVideo) {
      setLikeVideo(false);
    } else {
      setLikeVideo(true);
      setDislikeVideo(false);
    }
  };
  const toogleDislikeBtn = () => {
    if (dislikeVideo) {
      setDislikeVideo(false);
    } else {
      setDislikeVideo(true);
      setLikeVideo(false);

    }
  };

  return (
    <div className="btns_cont_videoPage">
      <div className="btn_threedot_videoPage">
        <BsThreeDots size={20} />
      </div>

      <div className="btn_videoPage">
        <PiShareFatLight size={22} />
        <p className="btn_name">Share</p>
      </div>

      <div className="btn_videoPage">
        <FaHeartCirclePlus size={22} />
        <p className="btn_name">Thanks</p>
      </div>

      <div className="btn_videoPage">
        <div className="like_videoPage"  onClick={()=>toogleSavedVideo()}>
          {saveVideo ? (
            <>
              <MdOutlinePlaylistAdd size={28} className="btns_vid" />
              <p className="btn_name">Save</p>
            </>
          ) : (
            <>
              <MdOutlinePlaylistAddCheck size={28} className="btns_vid" />
              <p className="btn_name">Saved</p>
            </>
          )}
        </div>
      </div>
      <div className="btn_like_videoPage">
        <div className="like_videoPage" onClick={()=>toogleLikeBtn()}>
          {likeVideo ? (
            <>
              <BiSolidLike size={20} className="btns_vid" />
            </>
          ) : (
            <>
              <BiLike size={20} className="btns_vid" />
            </>
          )}
          <p>2.3K</p>
        </div>
        <div className="like_line"></div>
        <div className="dislike_videoPage" onClick={()=>toogleDislikeBtn()}>
          {dislikeVideo ? (
            <>
              <BiSolidDislike size={20} className="btns_vid" />
            </>
          ) : (
            <>
              <BiDislike size={20} className="btns_vid" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LikeWatchLaterSaveBtns;
