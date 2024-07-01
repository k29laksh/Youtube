import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./youtube.svg";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiUserCircleLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import Auth from "../../Pages/Auth/Auth";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const Navbar = ({ wdtToggle,setEditCreateChannelBtn }) => {
  const [AuthBtn, setAuthBtn] = useState(false);

  
  const currentUser = useSelector((state) => state.currentUserReducer);
  // console.log(currentUser);


  // const currentUser = {
  //   result: {
  //     email: "lyz@mail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z",
  //   },
  // };

  const dispatch = useDispatch();

  // const onSucess= (response)=>{
  //   const Email= response?.profileObj.email || "zdead0505@gmail.com";
  //   console.log(Email);
  //   dispatch(login({email:Email}))
  // }
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "750829065177-n2va0blt05pvl6eni7nkesk2321dkkbj.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  // const onSuccess = () => {
  //   const Email = "zdeady";
  //   console.log(Email);
  //   dispatch(login({ email: Email }));
  // };

  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    // console.log(Email)
    dispatch(login({ email: Email }));
    // setLoginPage(false);
  };

  const onFailure = (response) => {
    console.log("FAILED", response);
  };

  return (
    <>
      <div className="Container_Navbar">
        <div className="Burger_Logo_Navbar">
          <div className="burger" onClick={() => wdtToggle()}>
            <RxHamburgerMenu className="burger-item" />
          </div>
          <Link to="/" className="logo_div_Navbar">
            <img
              className="logo_div_Navbar_item"
              src={logo}
              width={40}
              alt=""
            />
            <p className="logo_title_navbar">YouTube</p>
          </Link>
        </div>

        <SearchBar />

        <RiVideoAddLine size={25} className="video_icon" />
        <div className="box_apps">
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
        </div>
        <IoMdNotificationsOutline size={25} className="bell_icon" />

        <div className="Auth_Conatiner_navbar">
          {currentUser ? (
            <div className="Chanel_logo_App" onClick={() => setAuthBtn(true)}>
              <p className="fstChar_logo_App">
                {currentUser?.result.name ? (
                  <>{currentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{currentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          ) : (
            <GoogleLogin
            clientId={
              "750829065177-n2va0blt05pvl6eni7nkesk2321dkkbj.apps.googleusercontent.com"
            }
            onSuccess={onSuccess}
            onFailure={onFailure}
            render={(renderProps) => (

              <p onClick={renderProps.onClick} className="Auth_Btn">
              <PiUserCircleLight size={25} />
              <span>Sign in</span>
            </p>

            )}
            />

            // <p onClick={() => onSuccess()} className="Auth_Btn">
            //   <PiUserCircleLight size={25} />
            //   <span>Sign in</span>
            // </p>
          )}
        </div>
      </div>
      {AuthBtn && <Auth setAuthBtn={setAuthBtn} User={currentUser} setEditCreateChannelBtn={setEditCreateChannelBtn} />}
    </>
  );
};

export default Navbar;
