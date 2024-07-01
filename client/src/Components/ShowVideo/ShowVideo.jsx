import React from "react";
import "./ShowVideo.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from 'moment'

const ShowVideo = ({ vid }) => {
  const chanels = useSelector((state) => state?.currentUserProfileReducer);
  // console.log(vid);

  // const currentChanel = chanels?.filter((c) => c?._id === vid?.videoChanel)[0];
  // // console.log(vid.filePath);
  return (
    <>
      <Link to={`/videopage/${vid._id}`}>
        <video
          src={`http://localhost:5500/${vid?.filePath}`}
          className="video_ShowVideo"
        ></video>
      </Link>
      <div className="video_description">
        <div className="channel_logo_app">
          <div className="channel_logo">
            {vid?.Uploder?.charAt(0).toUpperCase()}
          </div>
          <div className="video_des_div">
            <div className="video_desc">{vid?.videoTitle}</div>
            <div className="video_channel_name">{vid?.Uploder}</div>
            <div className="views_and_time">
              <span> {vid?.Views} views</span> <span className="dot"></span>{" "}
              <span>Uploaded {moment(vid?.createdAt).fromNow()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowVideo;
