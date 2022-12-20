import React from "react";
import SingleQuestionItem from "./SingleQuestionItem";
import { asked_questions } from "./Faq's";

const Faq = () => {
  return (
    <div>
      <div className="text-red-700 font-semibold text-center text-4xl pb-10">
        FAQ
      </div>
      <div className="md:mx-[10%]">
        {asked_questions.map((question) => {
          return <SingleQuestionItem qa={question} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
