import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import { AiOutlineDelete } from "react-icons/ai";
import WHLVideoList from "./WHLVideoList";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../../actions/history";
import WHLHistoryList from "./WHLHistoryList";

const WHL = ({ page, videoList }) => {
  const currentUser = useSelector((state) => state.currentUserReducer);
const dispatch= useDispatch()

const handleClearHistory=()=>{
  if(currentUser){
    dispatch(clearHistory({
      userId:currentUser?.result._id
    }))
  }
}
  return (
    <div className="container_pages">
      <LeftSidebar />
      <div className="container_pages2">
        <div className="watchHistory_info">
          <div className="WatchHistory_heading">{page}</div>
          {page === "Watch history" && (
            <div className="Clear_history_btn" onClick={()=>handleClearHistory()}>
              <AiOutlineDelete size={22} />
              Clear all watch history
            </div>
          )}
        </div>

        <div className="Whl_list">
         
         {
          page === "Watch history" ? 
          <WHLHistoryList currentUser={currentUser?.result?._id} page={page} videoList={videoList} />
          :
          <WHLVideoList currentUser={currentUser?.result?._id} page={page} videoList={videoList} />

         }
          
        </div>
      </div>
    </div>
  );
};

export default WHL;
