import React from "react";
import Course from "../Components/Course";

function Courses() {
  return (
    <div className="mb-10">
      <div className="font-bold text-4xl text-center mt-15 mb-10">
        Our Courses
      </div>
      <div className="flex flex-wrap justify-around mx-20">
        <Course
          ImgSrc={"https://www.nifafinearts.com/images/animation-sketching.jpg"}
          Detail={
            "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
          }
        />
        <Course
          ImgSrc={"https://www.nifafinearts.com/images/3mchc.jpg"}
          Detail={
            "1 to 3 Months Certificate Hobby Course (Regular and Weekend)"
          }
        />
        <Course
          ImgSrc={"https://www.nifafinearts.com/images/1ydfa.jpg"}
          Detail={"One Year Diploma in Fine Arts-Regular/Part Time-Level-3"}
        />
        <Course
          ImgSrc={"https://www.nifafinearts.com/images/2ydfa.jpg"}
          Detail={"Two years Advance Diploma in Fine Arts - Regular/Part time"}
        />
        <Course
          ImgSrc={"https://www.nifafinearts.com/images/entrance-prepration.jpg"}
          Detail={"Entrance Preparation For N.I.D"}
        />
        <Course
          ImgSrc={"https://www.nifafinearts.com/images/bfa.jpg"}
          Detail={"B.F.A from UGC Recognised University"}
        />
        <Course
          ImgSrc={"https://www.nifafinearts.com/images/ma.jpg"}
          Detail={"M.A in Painting from UGC Recognised University"}
        />
        <Course
          ImgSrc={
            "https://www.nifafinearts.com/images/entrance-prepration3.jpg"
          }
          Detail={"Entrance preparation for B.F.A"}
        />
      </div>
    </div>
  );
}

export default Courses;
