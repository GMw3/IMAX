import React from "react";
import trailer from "../../videos/roadmap_hd.mp4";

const Roadmap = () => {
  return (
    <div className="mb-14" data-aos="fade-up">
      <div className="text-red-700 font-semibold text-center text-4xl pb-14 pt-10">
        ROADMAP
      </div>

      <video autoPlay loop muted className=" w-[100%] px-10 xl:px-[20%]">
        <source src={trailer} type="video/mp4" />
      </video>
    </div>
  );
};

export default Roadmap;
