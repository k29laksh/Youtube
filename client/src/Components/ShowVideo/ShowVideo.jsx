import React from "react";
import "./ShowVideo.css";
import { Link } from "react-router-dom";

const ShowVideo = ({ vid }) => {
  return (
    <>
      <Link to={`videopage/${vid._id}`}>
        <video src={`${vid?.video_src}`} className="video_ShowVideo"></video>
      </Link>
      <div className="video_description">
        <div className="channel_logo_app">
          <div className="channel_logo">
            {vid.Uploader?.charAt(0).toUpperCase()}
          </div>
          <div className="video_des_div">
            <div className="video_desc">{vid.description}</div>
            <div className="video_channel_name">{vid.Uploader}</div>
            <div className="views_and_time">
              <span> 2.4M views</span> <span className="dot"></span>{" "}
              <span> 8 months ago</span>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default ShowVideo;
