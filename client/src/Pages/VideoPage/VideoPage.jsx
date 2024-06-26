import React from "react";
import "./VideoPage.css";
import vid1 from "../../Components/Video/sample3.mp4";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import Comments from "../../Components/Comments/Comments";

const VideoPage = () => {
  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video
              src={vid1}
              className={"video_ShowVideo_videoPage"}
              controls
              //   autoPlay
            ></video>

            <div className="video_details_videoPage">
              <div className="video_btns_title_videoPage_cont">
                <p className="video_title_videoPage">
                  Complete backend and JavaScript developer course part 2
                </p>
                <div className="videoPage_channel_info">
                  <div className="videoPage_channel_logo_and_name">
                    <div className="videoPage_logo">L</div>
                    <div className="channel_name_and_subscribers">
                      <p className="channel_name">Chai aur Code</p>
                      <p className="channel_subscribers">328K subscribers</p>
                    </div>
                  </div>
                  <LikeWatchLaterSaveBtns/>
                </div>
              </div>

             <div className="views_and_desc">
             <div className="VideoPage_views_and_time">
                <span> 2.4M views</span>
                <span> 8 months ago</span>
              </div>
              <div className="videoPage_video_desc">
              Complete backend and JavaScript developer course part 2
              </div>
             </div>

              <div className="videoPage_comment">
                <div className="videoPage_comment_heading">
                  346  Comments
                </div>
                <Comments/>
              </div>
            </div>
          </div>

          <div className="videoPage_morevideos">
            <div className="morevideos_title">More Videos</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
