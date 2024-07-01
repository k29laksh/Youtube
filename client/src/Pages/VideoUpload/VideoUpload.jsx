import React, { useState } from "react";
import "./VideoUpload.css";
import { useDispatch, useSelector } from "react-redux";
import { uploadVideo } from "../../actions/video";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


const VideoUpload = ({setVideoUploadPage}) => {

    const dispatch = useDispatch();
    const [singleProgress, setSingleProgress] = useState(0); //

    const User = useSelector((state) => state.currentUserReducer);
    const [title, setTitle] = useState("");
    const [videoFile, setVideoFile] = useState("");

    const handleSetVideoFile = (e) => {
        setVideoFile(e.target.files[0]);
        setSingleProgress(0);
      };

      const fileOptions={
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setSingleProgress(percentage);
            if (percentage === 100) {
              setTimeout(function () {}, 3000);
              setVideoUploadPage(false);
            }
          }, 
      }

    const uploadVideoFile = () => {
        // console.log()
        // title=singleFile.name;
        if (!title) {
          alert("Plese Enter a Title of Your Video");
        } else if (!videoFile) {
          alert("Plese Attach Your Video");
        } else if (videoFile.size > 10000000) {
          alert("Plese Attach less than 1kb File");
        } else {
        //   setDisable(false);
          const fileData = new FormData();
          fileData.append("file", videoFile);
          fileData.append("title", title);
          fileData.append("chanel", User?.result?._id);
          fileData.append("Uploder", User?.result?.name);
          // console.log(videoFile)
          dispatch(
            uploadVideo({
              fileData,
              fileOptions,
            })
          );
        }
      };
  return (
    <div className="container_VideoUpload">
      <input
        type="submit"
        name="text"
        value={"X"}
        className="ibtn_x"
        onClick={() => setVideoUploadPage(false)}
      />
      <div className="container2_VideoUpload">
        <div className="ibox_div_videoUpload">
          <input
            type="text"
            name="title"
            className="ibox_videoUpload"
            maxLength={30}
            placeholder="Enter title of your video"
            onChange={(e) => setTitle(e.target.value)}

          />
          <label htmlFor="file" className="ibox_videoUpload btn_videoUpload">
            <input
              type="file"
              name="file"
              className="ibox_videoUpload"
              style={{ fontSize: "1rem" }}
              onChange={(e) => handleSetVideoFile(e)}

            />
          </label>
        </div>
        <div className="ibox_div_videoUpload">
          <input
            type="submit"
            value="Upload"
            className="ibox_videoUpload btn_videoUpload"
            maxLength={30}
            onClick={() => uploadVideoFile()}

          />
        </div>

        <div className="loader ibox_div_uploadVid">
          <CircularProgressbar
            value={singleProgress}
            text={`${singleProgress}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255, 255, 255, ${singleProgress / 100})`,
              textColor: "#f88",
              trailColor: "#adff2f",
              backgroundColor: "#3e98c7",
            })} 
          />
          
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
