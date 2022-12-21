import React from "react";

import roadmap_vid from "../../videos/roadmap_hd.mp4";

const Roadmap = ({ enable_Modal }) => {
  return (
    <div className="mb-14" data-aos="fade-up">
      <div className="text-red-700 font-semibold text-center   text-4xl pb-14 pt-10">
        ROADMAP
      </div>
      <div className="flex justify-center masking-image">
        <video
          autoPlay
          loop
          muted
          className="w-[60%] masking-image"
          onClick={() => enable_Modal(roadmap_vid)}
        >
          <source src={roadmap_vid} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Roadmap;
