import React from "react";
import WHL from "../../Components/WHL/WHL";


import { useSelector } from "react-redux";




function WatchLater() {
  const watchLaterList=useSelector(state=>state.watchLaterReducer)
// console.log(watchLaterList)
  
  return (
            <WHL page={"Watch later"} videoList={watchLaterList} />
    
  );
}

export default WatchLater;
