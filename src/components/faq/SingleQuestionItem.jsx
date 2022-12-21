import React from "react";

const SingleQuestionItem = ({ qa }) => {
  return (
    <div
      className="bg-slate-100 text-center mx-3 p-6 my-4 space-y-2"
      data-aos="fade-up"
    >
      <p className="text-red-600 font-semibold">{qa.question}</p>
      <p className="text-sm font-bold lg:px-[15%] xl:px[20%]">{qa.answer}</p>
    </div>
  );
};

export default SingleQuestionItem;
