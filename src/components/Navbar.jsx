import React from "react";
import {Link} from  "react-router-dom"; 

const appStyle = {
  fontFamily: "'Verdana', Sans-serif"
};

function Navbar() {
  return (
    <>
      <div style={appStyle} className="navbar bg-red-500">
        <div dir="ltr" className="navbar-start bg-red-100 p-3">
          <ul className="flex ps-[20%] gap-[100%] bg-red-100  ">
            <a className=" pl-8 text-xl bg-red-100 text-red-500 cursor-pointer">About</a>
            <a className=" text-xl bg-red-100 text-red-500 cursor-pointer">Blog</a>
          </ul>
        </div>
        <div className="navbar-center bg-red-100 rounded-full p-5 m-[-1rem] overflow-hidden">
          <Link to="/" className=" text-3xl text-red-500 object-cover cursor-pointer"><img src="./src/assets/Logo.png" className="w-[10rem] mix-blend-darken " alt="" /></Link>
        </div>
        <div className="navbar-end bg-red-100 p-2" dir="ltr">
          <ul className="flex pe-[20%] bg-red-100 cursor-pointer">
            <Link to="/Products" className=" text-xl bg-red-100  text-red-500 cursor-pointer">Products</Link>
            <Link className="pl-[10rem]"><img src="./src/assets/avatar.png" alt="" /></Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
