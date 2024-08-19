import React from "react";
import MainFooter from "../Components/MainFooter";
import MainHeader from "../Components/MainHeader";
import { Link } from "react-router-dom";
import Slideshow from "../Components/Slideshow";

function Main() {
  return (
    <div className="MainDiv  bg-black min-h-screen">
      <MainHeader />

      <div className="poster w-full flex items-center justify-center bg-black">
        <Link to={"/movies"}>
          <img
            src="/moviePoster/batman.jpeg"
            alt="batman"
            style={{ maxWidth: "100%", maxHeight: "800px", height: "auto" }}
          />
        </Link>
      </div>
      <Slideshow />

      <MainFooter />
    </div>
  );
}

export default Main;
