import React from "react";

const lore_pic = require("../../images/lore/lore_img.webp");
const Lore = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-[25%] mt-[10%] flex-wrap md:flex-row">
        <div className="flex">
          <h1 className="text-red-900 mt-[10%] text-6xl border-b-4 px-5 border-red-500">
            LORE
          </h1>
        </div>
        <div className="flex justify-center md:flex-nowrap flex-wrap">
          <div className="flex flex-col p-3 flex-wrap">
            <span className="w-[500px] p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quaerat iste alias nam dignissimos quae necessitatibus illo cumque
              saepe itaque repellat totam facilis iusto, temporibus blanditiis
              eius ratione? Cupiditate, tenetur.
            </span>
            <span className="w-[500px] p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quaerat iste alias nam dignissimos quae necessitatibus illo cumque
              saepe itaque repellat totam facilis iusto, temporibus blanditiis
              eius ratione? Cupiditate, tenetur.
            </span>
            <span className="w-[500px] p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quaerat iste alias nam dignissimos quae necessitatibus illo cumque
              saepe itaque repellat totam facilis iusto, temporibus blanditiis
              eius ratione? Cupiditate, tenetur.
            </span>
          </div>
          <div className="flex w-full lore-masking-image ">
            <img src={lore_pic} alt="/" className="bg-black p-20"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lore;
