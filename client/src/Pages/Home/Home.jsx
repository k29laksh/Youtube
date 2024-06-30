import React from "react";
import "./home.css";
import vid1 from "../../Components/Video/sample.mp4";
import vid2 from "../../Components/Video/sample2.mp4";
import vid3 from "../../Components/Video/sample3.mp4";
import vid4 from "../../Components/Video/sample4.mp4";
import { useSelector } from "react-redux";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
function Home() {
  // const vids = [
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

  // const vid='https://media.w3.org/2010/05/sintel/trailer_hd.mp4';
  // const vid=;

    const vids = useSelector((state) => state.videoReducer)
      ?.data?.filter((q) => q)
      ?.reverse();


  const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "Nature",
    "News",
    "Health",
    "JavaScript",
    "Sports",
    "Music",
    "Movies",
    "Comedy",
    "Live",
    "Gaming",
    "Animation",
    "All",
    "Python",
    "Java",
    "C++",
    "Nature",
    "News",
    "Health",
    "JavaScript",
    "Sports",
    "Music",
    "Movies",
    "Comedy",
    "Live",
    "Gaming",
    "Animation",
  ];
  return (
    <div className="container_pages">
      <LeftSidebar />
      <div className="container_pages2">
        <div className="navigation_Home">
          {NavList.map((m) => (
            <p className="btn_home_nav">{m}</p>
          ))}
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Home;
