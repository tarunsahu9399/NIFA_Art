import React from "react";

function WelcomeNote() {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="font-bold text-4xl text-center">
        Welcome To National Institute of Fine Arts
      </div>
      <div className="px-20 py-8 text-center text-xl">
        National Institute of Fine Arts (NIFA) is a national center for
        education in arts, fostering the excellence of emerging and established
        artists and advancing art to create a more human world. National
        Institute of Fine Arts (NIFA) was established by MRS RENU KHERA in Delhi
        and NCR of Delhi on July 2005. Institute established another unit in
        Panna (M.P) which is affiliated to Raja Mansingh Music and Arts
        University (Gwalior). Its aim is to provide education and training to
        students on a wide spectrum of Fine Arts.
      </div>
      <div className="px-20 text-center text-xl">
        National Institute of Fine Arts is a place where the creative expression
        of individuals is nurtured and a sense of community flourishes. We seek
        to shape the global future of arts with an emphasis on excellence that
        allows its members to reach for the highest artistic standards as
        individuals while recognizing that the Art is one of the foundations of
        a healthy and creative society. This is a place where national and
        international leaders in the arts gather, teach, show and perform their
        work. The institute prides itself on its openness and on creating an
        environment that is safe, welcoming, and built on mutual respect.
      </div>

      <div className="px-20 py-8 text-center text-xl font-bold">
        National Institute of Fine Arts is a place where the creative expression
        of individuals is nurtured and a sense of community flourishes.
      </div>
      <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-600  to-purple-800 text-white">
        Read More
      </button>
    </div>
  );
}

export default WelcomeNote;
