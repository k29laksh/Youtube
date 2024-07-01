import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { likeVideo } from "../../actions/video";
import { addTolikedVideo, deletelikedVideo } from "../../actions/likedVideo";
import { addTowatchLater, deletewatchLater } from "../../actions/watchLater";

const LikeWatchLaterSaveBtns = ({ vv, vid }) => {
  const currentUser = useSelector((state) => state.currentUserReducer);

  const dispatch = useDispatch();
  const [saveVideo, setSaveVideo] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const likedVideoList = useSelector((state) => state.likedVideoReducer);
  const watchLaterList=useSelector(state=>state.watchLaterReducer)

  useEffect(() => {
    likedVideoList?.data
      .filter(
        (q) => q?.videoId === vid && q?.Viewer === currentUser?.result._id
      )
      .map((m) => setLike(true));
      watchLaterList?.data
      .filter(
        (q) => q?.videoId === vid && q?.Viewer === currentUser?.result._id
      )
      .map((m) => setSaveVideo(true));
  }, [currentUser]);

  const toogleSavedVideo = () => {
    if (currentUser !== null) {
      if (saveVideo) {
        setSaveVideo(false);
        dispatch(
          deletewatchLater({ videoId: vid, Viewer: currentUser?.result?._id })
        );
      } else {
        setSaveVideo(true);
        // console.log(vid, " ", currentUser?.result?._id);
        dispatch(
          addTowatchLater({ videoId: vid, Viewer: currentUser?.result?._id })
        );
      }
    } else {
      alert("Plz Login to like the Video");
    }
  };
  const toogleLikeBtn = (e, lk) => {
    if (currentUser !== null) {
      if (like) {
        setLike(false);
        dispatch(likeVideo({ id: vid, Like: lk - 1 }));
        dispatch(
          deletelikedVideo({ videoId: vid, Viewer: currentUser?.result._id })
        );
      } else {
        setLike(true);
        dispatch(likeVideo({ id: vid, Like: lk + 1 }));
        dispatch(
          addTolikedVideo({ videoId: vid, Viewer: currentUser?.result?._id })
        );
        setDislike(false);
      }
    } else {
      alert("Plz Login to like the Video");
    }
  };
  const toogleDislike = (e, lk) => {
    if (currentUser !== null) {
      if (dislike) {
        setDislike(false);
      } else {
        setDislike(true);
      }

      if (like) {
        dispatch(likeVideo({ id: vid, Like: lk - 1 }));
      }
      dispatch(
        deletelikedVideo({ videoId: vid, Viewer: currentUser?.result._id })
      );
      setLike(false);
    } else {
      alert("Plz Login to DisLike The Video");
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
        <div
          className="like_videoPage"
          onClick={(e) => toogleSavedVideo(e, vv.Like)}
        >
          {saveVideo ? (
            <>
              <MdOutlinePlaylistAddCheck size={28} className="btns_vid" />
              <p className="btn_name">Save</p>
            </>
          ) : (
            <>
              <MdOutlinePlaylistAdd size={28} className="btns_vid" />
              <p className="btn_name">Saved</p>
            </>
          )}
        </div>
      </div>
      <div className="btn_like_videoPage">
        <div
          className="like_videoPage"
          onClick={(e) => toogleLikeBtn(e, vv.Like)}
        >
          {like ? (
            <>
              <BiSolidLike size={20} className="btns_vid" />
            </>
          ) : (
            <>
              <BiLike size={20} className="btns_vid" />
            </>
          )}
          <p>{vv.Like}</p>
        </div>
        <div className="like_line"></div>
        <div className="dislike_videoPage" onClick={() => toogleDislike()}>
          {dislike ? (
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
