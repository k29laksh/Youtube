import React from "react";
import WHL from "../../Components/WHL/WHL";

// import vid1 from "../../Components/Video/sample.mp4";
// import vid2 from "../../Components/Video/sample2.mp4";
// import vid3 from "../../Components/Video/sample3.mp4";
// import vid4 from "../../Components/Video/sample4.mp4";
import { useSelector } from "react-redux";




function LikedVideo() {

  const likedVideoList=useSelector(state=>state.likedVideoReducer)
  // console.log('likedvideodata', likedVideoList)
 
  return (
            <WHL page={"Liked videos"} videoList={likedVideoList} />
    
  );
}

export default LikedVideo;
