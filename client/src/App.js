import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";
import DrawerSidebar from "./Components/LeftSidebar/DrawerSidebar";
import "./App.css";
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";
import { useDispatch } from "react-redux";
import { fetchAllChannel } from "./actions/channelUser";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import { getVideos } from "./actions/video";
import { getlikedVideo } from "./actions/likedVideo";
import { getwatchLater } from "./actions/watchLater";
import { getAllHistory } from "./actions/history";
import { getAllcomments } from "./actions/comments";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllChannel());
    dispatch(getVideos());
    dispatch(getlikedVideo());
    dispatch(getwatchLater());
    dispatch(getAllHistory());
    dispatch(getAllcomments())
    

  }, [dispatch]);

  const [LeftSidebarBtn, setLeftSidebarBtn] = useState({
    display: "none",
  });

  const wdtToggle = () => {
    console.log(LeftSidebarBtn);
    if (LeftSidebarBtn.display === "none")
      setLeftSidebarBtn({
        display: "flex",
      });
    else
      setLeftSidebarBtn({
        display: "none",
      });
  };

  const [editCreateChannelBtn, setEditCreateChannelBtn] = useState(false);
  const [videoUploadPage, setVideoUploadPage] = useState(false);
  return (
    <Router>
      {videoUploadPage && <VideoUpload setVideoUploadPage={setVideoUploadPage} />}
      {editCreateChannelBtn && (
        <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn} />
      )}{" "}
      <Navbar
        wdtToggle={wdtToggle}
        setEditCreateChannelBtn={setEditCreateChannelBtn}
      />
      <DrawerSidebar wdtToggle={wdtToggle} LeftSidebarBtn={LeftSidebarBtn} />
      <AllRoutes setVideoUploadPage={setVideoUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn} />
    </Router>
  );
};

export default App;
