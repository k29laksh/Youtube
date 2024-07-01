import React, { useEffect } from "react";
import "./VideoPage.css";
import vid1 from "../../Components/Video/sample3.mp4";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import Comments from "../../Components/Comments/Comments";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { addToHistory } from "../../actions/history";
import { viewVideo } from "../../actions/video";

const VideoPage = () => {
  const { vid } = useParams();
  const dispatch = useDispatch();

  const vids = useSelector((state) => state.videoReducer);

  const vv = vids?.data.filter((q) => q._id === vid)[0];

  const currentUser = useSelector((state) => state.currentUserReducer);
  const handleHistory = () => {
    dispatch(
      addToHistory({
        videoId: vid,
        Viewer: currentUser?.result._id,
      })
    );
  };

const handleViews=()=>{
  dispatch(viewVideo({
    id:vid
  }))
}

  useEffect(() => {
    if (currentUser) {
      handleHistory();
    }

    handleViews()
  },[]);

  // const channels = useSelector((state) => state?.channelReducers);

  // const currentChannel = channels.filter((user) => user._id === Cid)[0];

  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video
              src={`http://localhost:5500/${vv?.filePath}`}
              className={"video_ShowVideo_videoPage"}
              controls
              //   autoPlay
            ></video>

            <div className="video_details_videoPage">
              <div className="video_btns_title_videoPage_cont">
                <p className="video_title_videoPage">{vv?.videoTitle}</p>
                <div className="videoPage_channel_info">
                  <Link
                    to={`/channel/${vv?.videoChanel}`}
                    className="videoPage_channel_logo_and_name"
                  >
                    <div className="videoPage_logo">
                      {vv?.Uploder?.charAt(0).toUpperCase()}
                    </div>
                    <div className="channel_name_and_subscribers">
                      <p className="channel_name">{vv.Uploder}</p>
                      <p className="channel_subscribers">328K subscribers</p>
                    </div>
                  </Link>
                  <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
                </div>
              </div>

              <div className="views_and_desc">
                <div className="VideoPage_views_and_time">
                  <span> {vv.Views} views</span>
                  <span>{moment(vv?.createdAt).fromNow()}</span>
                </div>
                <div className="videoPage_video_desc">{vv.videoTitle}</div>
              </div>

              <div className="videoPage_comment">
                <div className="videoPage_comment_heading">346 Comments</div>
                <Comments videoId={vv._id}/>
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
