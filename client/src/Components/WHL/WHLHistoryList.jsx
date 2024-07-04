import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

const WHLHistoryList = ({ page, videoList, currentUser }) => {
  return (
    <>
      {currentUser ? (
        <>
          {videoList?.data?.watchHistory?.reverse().map((historyItem) => {
            const video = historyItem.video;
            return (
              <ShowVideoList
                key={video._id}
                videoId={video._id}
                date={historyItem.viewedOn}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 style={{ color: "white" }}>
            Plz Login to watch your video history
          </h2>
        </>
      )}
    </>
  );
};

export default WHLHistoryList;
