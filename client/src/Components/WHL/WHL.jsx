import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import { AiOutlineDelete } from "react-icons/ai";
import WHLVideoList from "./WHLVideoList";

const WHL = ({ page, videoList }) => {
  return (
    <div className="container_pages">
      <LeftSidebar />
      <div className="container_pages2">
        <div className="watchHistory_info">
          <div className="WatchHistory_heading">{page}</div>
          {page === "Watch history" && (
            <div className="Clear_history_btn">
              <AiOutlineDelete size={22} />
              Clear all watch history
            </div>
          )}
        </div>

        <div className="Whl_list">
          <WHLVideoList page={page} videoList={videoList} />
        </div>
      </div>
    </div>
  );
};

export default WHL;
