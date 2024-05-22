import React from "react";

function Course({ ImgSrc, Detail }) {
  return (
    <div className="card rounded-sm w-72 bg-base-100 shadow-xl hover:scale-105 hover:ease-in-out transition my-5">
      <figure className="">
        <img src={`${ImgSrc}`} alt="" className="" />
      </figure>
      <div className="card-body items-center text-center">
        <p className="text-lg">{Detail}</p>
        <div className="card-actions my-2">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-600  to-purple-800 text-white">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
