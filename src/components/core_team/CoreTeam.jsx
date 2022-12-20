import React from "react";
import { CoreTeamDetails } from "./CoreTeamDetails";
import CoreTeamMember from "./CoreTeamMember";

const CoreTeam = () => {
  return (
    <div>
      <div className="text-red-700 font-semibold text-center text-4xl pb-10 pt-10">
        CORE TEAM
      </div>
      <div className="grid grid-cols-12 justify-items-center sm:mx-[10%] ">
        {CoreTeamDetails.map((member) => {
          return <CoreTeamMember member={member} />;
        })}
      </div>
    </div>
  );
};

export default CoreTeam;
