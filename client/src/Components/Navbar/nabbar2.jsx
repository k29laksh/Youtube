import React,{useEffect} from "react";
import "./Navbar.css";
import logo from "./logo1.ico";
import SearchBar from "./SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import {GoogleLogin} from "react-google-login";
import {gapi} from "gapi-script";
import { useDispatch } from "react-redux";
import {login} from "../../actions/auth";

export default function Navbar({toggleDrawer}) {
  const CurrentUser = null;
    // const CurrentUser = {
    //   result:{
    //     email:"abc@gmail.com",
    //     joinedOn:"2005-01-18",
    //   },
    // };

    useEffect(()=>{
      function start(){
        gapi.client.init({
          clientId : "949231543355-brpikn5a4c1iqj923apm4105f3b3llvk.apps.googleusercontent.com",
          scope : "email"
        })
      }
      gapi.load("client:auth2",start);
    },
    []);


    const dispatch = useDispatch()
    const onSuccess=(response)=>{
      const Email = response?.profileObj.email;
      console.log(Email);
      dispatch(login({email:Email}))
    }

    const onFailure=(response)=>{
      console.log("Failed",response);

    }


  return (
    <div className="Container_Navbar">
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={() => toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to={'/'} className="logo_div_Navbar">
          <img src={logo} alt="" />
          <p className="logo_title_Navbar">YouTube Clone</p>
        </Link>
      </div>
      <SearchBar />
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
      <div className="apps_Box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
      </div>
      <IoMdNotificationsOutline className={"vid_bell_Navbar"} />
      <div className="Auth_cont_Navbar">
        {CurrentUser ? (
          <>
          <div className="Chanel_Logo_App">
            <p className="fstChar_Logo_App">
              {
                CurrentUser?.result.name ? (
                  <>
                  {CurrentUser?.result.name.charAt(0).toUpperCase()}
                  </>
                ): (<>
                    {CurrentUser?.result.email.charAt(0).toUpperCase()}
                </>)
              }
            </p>
          </div>
          </>
        ) : (
          <>
          <GoogleLogin
          clientId="949231543355-brpikn5a4c1iqj923apm4105f3b3llvk.apps.googleusercontent.com"
          onSuccess={onSuccess}
          onFailure={onFailure}
          
          />
            <p className="Auth_Btn">
              <BiUserCircle size={22} />
              <b>Sign in</b>
            </p>
          </>
        )}
      </div>
    </div>
  );
}


