import React from "react";
import WHL from "../../Components/WHL/WHL";
import "./WatchHistory.css"
import "../WatchLater/WatchLater.css";
import vid1 from "../../Components/Video/sample.mp4";
import vid2 from "../../Components/Video/sample2.mp4";
import vid3 from "../../Components/Video/sample3.mp4";
import vid4 from "../../Components/Video/sample4.mp4";
import { useSelector } from "react-redux";




function WatchHistory() {
  const watchHistoryList =useSelector(state=>state.historyReducer)
 console.log("watchhistory page", watchHistoryList)
  // const history = [
  //   {
  //     _id: 1,
  //     video_src: vid1,
  //     Channel: "62bafejk4hsf",
  //     title: "video 1",
  //     Uploader: "Chai and Code",
  //     description: "Complete backend and JavaScript developer course part 2",
  //   },

  //   {
  //     _id: 2,
  //     video_src: vid2,
  //     Channel: "62bs4hsf",
  //     title: "video 2",
  //     Uploader: "Fox Cricket",
  //     description: "Australia pick their ODI World XI | Top Order",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid3,
  //     Channel: "62badk4hsf",
  //     title: "video 3",
  //     Uploader: "Chai and Code",
  //     description: "Complete backend developer course part 2",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid4,
  //     Channel: "62bafk4hsf",
  //     title: "video 4",
  //     Uploader: "Javascript Mastry",
  //     description: "description of video 4",
  //   },
  //   {
  //     _id: 5,
  //     video_src: vid4,
  //     Channel: "62bafk4hsf",
  //     title: "video 5",
  //     Uploader: "FoL",
  //     description: "description of video 5",
  //   },
  //   {
  //     _id: 6,
  //     video_src: vid1,
  //     Channel: "62bafejk4hsf",
  //     title: "video 1",
  //     Uploader: "Chai and Code",
  //     description: "Complete backend and JavaScript developer course part 2",
  //   },

  //   {
  //     _id: 7,
  //     video_src: vid2,
  //     Channel: "62bs4hsf",
  //     title: "video 2",
  //     Uploader: "Fox Cricket",
  //     description: "Australia pick their ODI World XI | Top Order",
  //   },
  //   {
  //     _id: 8,
  //     video_src: vid3,
  //     Channel: "62badk4hsf",
  //     title: "video 3",
  //     Uploader: "Chai and Code",
  //     description: "Complete backend developer course part 2",
  //   },
  //   {
  //     _id: 9,
  //     video_src: vid4,
  //     Channel: "62bafk4hsf",
  //     title: "video 4",
  //     Uploader: "Javascript Mastry",
  //     description: "description of video 4",
  //   },
  // ];
  return (
            <WHL page={"Watch history"} videoList={watchHistoryList} />
    
  );
}

export default WatchHistory;
