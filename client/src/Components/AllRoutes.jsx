import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import WatchHistory from "../Pages/WatchHistory/WatchHistory.jsx";
import WatchLater from "../Pages/WatchLater/WatchLater";
import LikedVideo from "../Pages/LikedVideo/LikedVideo";
import Library from "../Pages/Library/Library";
import YourVideos from "../Pages/YourVideos/YourVideos";
import VideoPage from "../Pages/VideoPage/VideoPage.jsx";
import Channel from "../Pages/Channel/Channel.jsx";
import Search from "../Pages/Search/Search.jsx";

const AllRoutes = ({setEditCreateChannelBtn,setVideoUploadPage}) => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
      <Route path="/history" element={<WatchHistory />} />
      <Route path="/watchLater" element={<WatchLater />} />
      <Route path="/likedvideo" element={<LikedVideo />} />
      <Route path="/library" element={<Library />} />
      <Route path="/yourvideo" element={<YourVideos />} />
      <Route path="/videopage/:vid" element={<VideoPage />} />
      <Route path="/search/:searchQuery" element={<Search />} />
      <Route path="/channel/:Cid" element={<Channel setVideoUploadPage={setVideoUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn}/>} />
    </Routes>
  )
}

export default AllRoutes
