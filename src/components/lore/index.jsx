import React from "react";

const lore_pic = require("../../images/lore/lore_img.webp");
import loreDetails from "../../content/lore";

const Lore = () => {
  return (
    <>
        <div className="flex justify-center" id="lore">
          <h1 className="text-red-900 mt-[10%] text-6xl border-b-4 px-5 border-red-500">
            LORE
          </h1>
        </div>

        <div class=" mx-auto overflow-hidden md:max-w-4xl">
          <div class="md:flex">
            <div class="p-8">
              
              <p class="mt-2 text-slate-500 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div class="md:shrink-0 lore-masking-image flex justify-center">
              <img class="h-48 w-full object-cover md:h-80 md:w-full " src={lore_pic} alt="" />
            </div>
          </div>
        </div>
    </>
  );
};

export default Lore;
