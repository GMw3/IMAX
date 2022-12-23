import React from "react";

import { asked_questions } from "./Faq's";
import SingleQuestionItem from "./SingleQuestionItem";

const Faq = () => {
  return (
    <div data-aos="fade-up">
      <div className="text-red-700 font-semibold text-center text-4xl pb-10">
        FAQ
      </div>
      <div className="">
        {asked_questions.map((question, index) => {
          return <SingleQuestionItem qa={question} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
