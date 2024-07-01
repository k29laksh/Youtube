import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

const WHLVideoList = ({ page, videoList, currentUser }) => {
  // console.log(videoList);
  return (
    <>
      {currentUser ? (
        <>
          {videoList?.data
            ?.filter((q) => q?.Viewer === currentUser)
            .reverse()
            .map((m) => {
              // console.log(m);
              return (
                <>
                  <ShowVideoList
                    key={m._id}
                    videoId={m?.videoId}
                    date={m?.viewedOn}
                  />
                </>
              );
            })}
        </>
      ) : (
        <>
          <h2 style={{ color: "white" }}>
            Plz Login to watch your {page} list
          </h2>
        </>
      )}
    </>
  );
};

export default WHLVideoList;
