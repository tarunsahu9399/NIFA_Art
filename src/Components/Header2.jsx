import React from "react";

function Header2() {
  return (
    <>
      <div className="flex flex-wrap justify-evenly items-center bg-slate-100">
        <div>
          <img
            src="https://www.nifafinearts.com/images/nifa-new-logo.png"
            alt=""
            className="h-20"
          />
        </div>
        <div className="md:flex hidden ">
          <span>Home</span>
          <span className="mx-4">About</span>
          <span className="mx-4">Courses</span>
          <span className="mx-4">Activities</span>
          <span className="mx-4">Admission</span>
          <span className="mx-4">Art Gallery</span>
          <span className="mx-4">Franchise</span>
          <span className="mx-4">Online Class</span>
          <span className="mx-4">Videos</span>
          <span className="mx-4">Pay Fee</span>
          <span className="mx-4">Contact</span>
        </div>
      </div>
    </>
  );
}

export default Header2;
