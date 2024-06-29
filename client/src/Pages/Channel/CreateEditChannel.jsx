import React, { useState } from "react";
import "./CreateEditChannel.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { updateChannelData } from "../../actions/channelUser";

const CreateEditChannel = ({ setEditCreateChannelBtn }) => {
  // const currentUser = {
  //   result: {
  //     email: "lyz@mail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z",
  //   },
  // };

    const currentUser = useSelector((state) => state.currentUserReducer); 
  const dispatch = useDispatch();

  const [name, setName] = useState(currentUser?.result.name);
  const [desc, setDesc] = useState(currentUser?.result.desc);

  const handleSubmit = () => {
    if (!name) alert("Plz Enter Name !");
    else if (!desc) alert("Plz Enter description");
    else {
      dispatch(updateChannelData(currentUser?.result._id,{name:name,desc:desc}));
      setEditCreateChannelBtn(false);
      setTimeout(() => {
        dispatch(login({ email: currentUser?.result.email }));
      },5000);
    }
  };

  return (
    <div className="container_CreateEditChannel">
      <input
        type="submit"
        name="text"
        value={"X"}
        className="ibtn_x"
        onClick={() => setEditCreateChannelBtn(false)}
      />
      <div className="container2_CreateEditChannel">
        <h1>
          {" "}
          {currentUser?.result.name ? <>Edit</> : <>Create</>}
          Your Channel
        </h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your channel name"
          className="ibox"
          name="text"
        />

        <textarea
          rows={15}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder={"Enter channel description"}
          className="ibox"
        ></textarea>

        <input
          type="submit"
          onClick={handleSubmit}
          value={"Submit"}
          className="ibtn"
        />
      </div>
    </div>
  );
};

export default CreateEditChannel;
