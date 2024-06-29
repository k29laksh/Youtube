import React from "react";
import "./Channel.css";
import { FaEdit, FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
function DescribeChanel({ setEditCreateChannelBtn, Cid }) {
  const channels = useSelector((state) => state?.channelReducers);
  console.log("all channels:", channels);
  console.log("current id:", Cid);
  const currentChannel = channels.filter((user) => user._id === Cid)[0];
  console.log("current channel:", currentChannel);
  const currentUser = useSelector((state) => state?.currentUserReducer);
  console.log("current user:", currentUser);
  // const currentChannel = {
  //   age: "2022-06-01T00:00:00.000Z",
  //   email: "zdeady",
  //   joinedOn: "2022-06-28T13:13:11.541Z",
  //   name: "ddd",
  //   tags: [],
  //   _id: "667ea2c620cf601d92dc5582",
  // };

  return (
    <div className="container3_chanel">
      <div className="chanelLogo_chanel">
        <b>
          {currentChannel ? (
            <>{currentChannel?.name.charAt(0).toUpperCase()}</>
          ) : (
            <>c</>
          )}
        </b>
      </div>
      <div className="description_chanel">
        <b>{currentChannel?.name}</b>
        <p>{currentChannel?.desc}</p>
      </div>
      {currentUser?.result._id === currentChannel?._id && (
        <>
          <p
            onClick={() => setEditCreateChannelBtn(true)}
            className="Editbtn_Chanel"
          >
            <FaEdit />
            <b>Edit Chanel</b>
          </p>
          <p className="Uploadbtn_Chanel">
            <FaUpload />
            <b>Upload Video</b>
          </p>
        </>
      )}
    </div>
  );
}

export default DescribeChanel;
