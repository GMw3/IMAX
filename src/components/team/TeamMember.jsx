import React from "react";

import { FaTwitterSquare } from "react-icons/fa";

const TeamMember = ({ member }) => {
  return (
    <div className="mt-4 lg:flex lg:justify-center">
      <div className="flex justify-center">
        <p>{member.name}</p>
        <span className="hidden lg:block px-2">/</span>
      </div>
      <div className="flex justify-center text-red-600">
        {member.skill}
      </div>
      <div className="flex justify-center lg:ml-1">
        <a href={member.social_link}>
          <FaTwitterSquare size={25} />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
