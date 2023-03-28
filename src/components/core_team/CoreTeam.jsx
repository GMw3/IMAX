import React from "react";

import { CoreTeamDetails } from "../../content/core_team";
import CoreTeamMember from "./CoreTeamMember";

const CoreTeam = () => {
  return (
    <div data-aos="fade-up" id="crew">
      <div className="text-red-700 font-semibold text-center text-4xl pb-10 pt-10">
        CORE TEAM
      </div>
      <div className="grid grid-cols-12 justify-items-center sm:mx-[10%] ">
        {CoreTeamDetails.map((member, index) => {
          return <CoreTeamMember member={member} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CoreTeam;
