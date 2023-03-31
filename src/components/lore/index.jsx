import React from "react";

import {loreDetails} from "../../content/lore";

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
              
              <p class="mt-2 text-slate-500 text-lg">{loreDetails.paragraph}</p>
            </div>
            <div class="md:shrink-0 lore-masking-image flex justify-center">
              <img class="h-48 w-full object-cover md:h-80 md:w-full " src={loreDetails.img} alt="" />
            </div>
          </div>
        </div>
    </>
  );
};

export default Lore;
