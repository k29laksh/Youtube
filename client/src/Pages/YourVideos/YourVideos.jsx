import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import vid1 from "../../Components/Video/sample.mp4";
import vid2 from "../../Components/Video/sample2.mp4";
import vid3 from "../../Components/Video/sample3.mp4";
import vid4 from "../../Components/Video/sample4.mp4";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";

const YourVideos = () => {
  const vids = [
    {
      _id: 1,
      video_src: vid1,
      Channel: "62bafejk4hsf",
      title: "video 1",
      Uploader: "Chai and Code",
      description: "Complete backend and JavaScript developer course part 2",
    },

    {
      _id: 2,
      video_src: vid2,
      Channel: "62bs4hsf",
      title: "video 2",
      Uploader: "Fox Cricket",
      description: "Australia pick their ODI World XI | Top Order",
    },
    {
      _id: 3,
      video_src: vid3,
      Channel: "62badk4hsf",
      title: "video 3",
      Uploader: "Chai and Code",
      description: "Complete backend developer course part 2",
    },
    {
      _id: 4,
      video_src: vid4,
      Channel: "62bafk4hsf",
      title: "video 4",
      Uploader: "Javascript Mastry",
      description: "description of video 4",
    },
    {
      _id: 5,
      video_src: vid4,
      Channel: "62bafk4hsf",
      title: "video 5",
      Uploader: "FoL",
      description: "description of video 5",
    },
    {
      _id: 6,
      video_src: vid1,
      Channel: "62bafejk4hsf",
      title: "video 1",
      Uploader: "Chai and Code",
      description: "Complete backend and JavaScript developer course part 2",
    },

    {
      _id: 7,
      video_src: vid2,
      Channel: "62bs4hsf",
      title: "video 2",
      Uploader: "Fox Cricket",
      description: "Australia pick their ODI World XI | Top Order",
    },
    {
      _id: 8,
      video_src: vid3,
      Channel: "62badk4hsf",
      title: "video 3",
      Uploader: "Chai and Code",
      description: "Complete backend developer course part 2",
    },
    {
      _id: 9,
      video_src: vid4,
      Channel: "62bafk4hsf",
      title: "video 4",
      Uploader: "Javascript Mastry",
      description: "description of video 4",
    },
  ];
  return (
    <div className="container_pages">
      <LeftSidebar />
      <div className="container_pages2">
        <div className="watchHistory_info">
          <div className="WatchHistory_heading">Your videos</div>
         
        </div>

        <div className="Whl_list">
        <ShowVideoGrid vids={vids} />
        </div>
      </div>
    </div>
  );
};

export default YourVideos;
