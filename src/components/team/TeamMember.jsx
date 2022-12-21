import React from "react";

import { FaTwitterSquare } from "react-icons/fa";

const TeamMember = ({ member }) => {
  return (
    <div className="mt-4 lg:flex lg:justify-center">
      <div className="flex justify-center">
        <p data-aos="fade-left">{member.name}</p>
        <span className="hidden lg:block px-2">/</span>
      </div>
      <div className="flex justify-center text-red-600" data-aos="fade-right">
        {member.skill}
      </div>
      <div className="flex justify-center lg:ml-1" data-aos="fade-left">
        <a href={member.social_link}>
          <FaTwitterSquare size={25} />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
