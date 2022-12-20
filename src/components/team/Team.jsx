import React from "react";
import TeamMember from "./TeamMember";
import { TeamDetails } from "./TeamDetails";

const Team = () => {
  return (
    <div>
      <div className="text-red-700 font-semibold text-center text-4xl pb-10 pt-10">
        TEAM
      </div>
      <div className="mb-10">
        {TeamDetails.map((member) => {
          return <TeamMember member={member} />;
        })}
      </div>
      <div className="text-red-700 font-semibold text-center text-4xl pb-4">
        Developer
      </div>
      <div className="flex-col mb-16">
        <div className="flex justify-center">
          Web Developer | Designer | Visual Effects
        </div>
        <div className="flex justify-center">Warren N.</div>
      </div>
    </div>
  );
};

export default Team;
