import React from "react";
import { AiFillLike } from "react-icons/ai";

import { GoHome } from "react-icons/go";

import { AiFillPlaySquare } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import "./DrawerSidebar.css";

import {
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

import { NavLink } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
const DrawerSidebar = ({ wdtToggle, LeftSidebarBtn }) => {
  return (
    <div className="container_DrawerLeftSidebar" style={LeftSidebarBtn}>
      <div className="container2_DrawerLeftSidebar">
        <div className="Drawer_leftsidebar">
          <NavLink to="/" className="drawer_icon_sidebar_div">
            <p>
              <GoHome
                size={22}
                className={"drawer_icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />

              <div className="drawer_text_sidebar_icon">Home</div>
            </p>
          </NavLink>
          <NavLink to={"/explore"} className="drawer_icon_sidebar_div">
            <p>
              <MdOutlineExplore
                size={22}
                className="drawer_icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="drawer_text_sidebar_icon">Explore</div>
            </p>
          </NavLink>
          <div className="drawer_icon_sidebar_div">
            <p>
              <SiYoutubeshorts
                size={22}
                className="drawer_icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="drawer_text_sidebar_icon">Shorts</div>
            </p>
          </div>
          <div className="drawer_icon_sidebar_div">
            <p>
              <MdOutlineSubscriptions
                size={22}
                className="drawer_icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="drawer_text_sidebar_icon">Subscriptions</div>
            </p>
          </div>
        </div>

        <div className="libraryBtn_drawerleftsidebar">
          <NavLink to="/library" className="drawer_icon_sidebar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className="drawer_icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="drawer_text_sidebar_icon">Library</div>
            </p>
          </NavLink>

          <NavLink to={"/history"} className="drawer_icon_sidebar_div">
            <p>
              <FaHistory
                size={22}
                className="drawer_icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="drawer_text_sidebar_icon">History</div>
            </p>
          </NavLink>
          <NavLink to={"/yourvideo"} className="drawer_icon_sidebar_div">
            <p>
              <AiFillPlaySquare
                size={22}
                className="drawer_icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="drawer_text_sidebar_icon">Your Videos</div>
            </p>
          </NavLink>
          <NavLink to={"/watchLater"} className="drawer_icon_sidebar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className="drawer_icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="drawer_text_sidebar_icon">Watch Later</div>
            </p>
          </NavLink>
          <NavLink to={"/likedvideo"} className="drawer_icon_sidebar_div">
            <p>
              <AiFillLike
                size={22}
                className="drawer_icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="drawer_text_sidebar_icon">Liked Videos</div>
            </p>
          </NavLink>
        </div>

        <div className="subcriptions_lsdbar">
          <p>Subscriptions</p>
          <div className="subcribe_channels">
            <div className="chanel_lsdbar">
              <div className="channel_profile_drawer">L</div>
              <div>Channel</div>
            </div>
            <div className="chanel_lsdbar">
              <div className="channel_profile_drawer">L</div>
              <div>Channel</div>
            </div>
            <div className="chanel_lsdbar">
              <div className="channel_profile_drawer">L</div>
              <div>Channel</div>
            </div>
            <div className="chanel_lsdbar">
              <div className="channel_profile_drawer">L</div>
              <div>Channel</div>
            </div>
            <div className="chanel_lsdbar">
              <div className="channel_profile_drawer">L</div>
              <div>Channel</div>
            </div>
            <div className="chanel_lsdbar">
              <div className="channel_profile_drawer">L</div>
              <div>Channel</div>
            </div>
            <div className="chanel_lsdbar">
              <div className="channel_profile_drawer">L</div>
              <div>Channel</div>
            </div>
            <div className="chanel_lsdbar">
              <div className="channel_profile_drawer">L</div>
              <div>Channel</div>
            </div>
          </div>
        </div>
      </div>
      <div className="broadLiftSidebar_cont3" onClick={() => wdtToggle()}></div>
    </div>
  );
};

export default DrawerSidebar;
