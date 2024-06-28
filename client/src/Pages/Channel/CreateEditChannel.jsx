import React from "react";
import "./CreateEditChannel.css";

const CreateEditChannel = ({setEditCreateChannelBtn}) => {
  const currentUser = {
    result: {
      email: "lyz@mail.com",
      joinedOn: "2222-07-15T09:57:23.489Z",
    },
  };

  return (
    <div className="container_CreateEditChannel">
      <input type="submit" name="text" value={"X"} className="ibtn_x"                 onClick={() => setEditCreateChannelBtn(false)}
 />
      <div className="container2_CreateEditChannel">
        <h1>
          {" "}
          {currentUser?.result.name ? <>Edit</> : <>Create</>}
          Your Channel
        </h1>

        <input type="text" placeholder="Enter your channel name" className="ibox" name="text" />


        <textarea rows={15} placeholder={"Enter channel description"} className="ibox"></textarea>

        <input type="submit" value={"Submit"} className="ibtn" />
      </div>
    </div>
  );
};

export default CreateEditChannel;
