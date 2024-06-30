import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

const WHLVideoList = ({ page, videoList,currentUser }) => {
  // console.log(videoList)
  return (
    <>
      {videoList?.data?.filter(q=>q?.Viewer===currentUser).reverse().map((m) => (
        <>
          <ShowVideoList videoId={m?.videoId} key={m?._id}/>
        </>
      ))}{" "}
    </>
  );
};

export default WHLVideoList;
