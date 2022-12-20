import React from "react";

import { FaTwitterSquare } from "react-icons/fa";

const CoreTeamMember = ({ member }) => {
  return (
    <div className="group col-span-6 lg:col-span-3">
      <div className="w-fit text-center mx-5 my-5 group-hover:scale-105 duration-100 shadow-2xl">
        <img src={member.img} alt="" />
        <div className="py-5">
          <p>{member.name}</p>
          <div className="hidden group-hover:block">
            <p className="text-red-500">{member.post}</p>
            <p className="text-red-400">{member.skill}</p>
            <div className="flex justify-center">
              <a href={member.social_link}>
                <FaTwitterSquare size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTeamMember;
