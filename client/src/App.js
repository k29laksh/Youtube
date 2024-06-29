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
const App = () => {


const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchAllChannel());
},[dispatch])

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

  return (
    <Router>
      <VideoUpload/>
      {editCreateChannelBtn && (
        <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn} />
      )}{" "}
      <Navbar
        wdtToggle={wdtToggle}
        setEditCreateChannelBtn={setEditCreateChannelBtn}
      />
      <DrawerSidebar wdtToggle={wdtToggle} LeftSidebarBtn={LeftSidebarBtn} />
      <AllRoutes setEditCreateChannelBtn={setEditCreateChannelBtn}/>
    </Router>
  );
};

export default App;
