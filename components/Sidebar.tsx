import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import Discover from "./Discover";
import Footer from "./Footer";
// import GoogleLogin from 'react-login-google'

const Sidebar = () => {
  const [showSidebar, setShowsidebar] = useState(true);
  let userProfile = false;
  return (
    <div className={`flex-row sm:flex-column ${showSidebar && "border-r-2 sm:border-r-0"}`}>
      <div className="block sm:hidden p-4 sm:p-0" onClick={() => setShowsidebar((prev) => !prev)}>
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <>
          <div>
            <div className="text-red-500 py-4 hover:text-red-300 sm:border-b-2 sm:flex sm:items-center">
              <AiFillHome className="mx-auto sm:mx-0" />{" "}
              <p className="hidden sm:block pl-4">For You</p>
            </div>
            {!userProfile && (
              <p className="m-auto py-5 hidden sm:block">Log in to like and comment on videos</p>
            )}
          </div>
          <button className="hidden sm:block hover:bg-red-500 text-red-500 hover:text-white border-red-500 font-bold border-2 h-[2.5rem] w-full">
            Log in
          </button>
          <Discover />
          <Footer />
        </>
      )}

      {/* <GoogleLogin clientId="" onSuccess={() => {}} onFailure={() => {}} cookiePolicy='single_host_origin'/> */}
    </div>
  );
};

export default Sidebar;
