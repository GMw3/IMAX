import React, { useState } from "react";

const background = require("./images/bg.svg").default;
import EnteringSection from "./components/enteringSection";
import LandingSection from "./components/landingSection";
import Lore from "./components/lore";
import Navbar from "./components/navbar";
import NFT from "./components/NFT";
function App() {
  const [enter, setEnter] = useState(false);

  return (
    <>
      {enter ? (
        <div className="bg-background-img imax_bg">
          <Navbar />
          <LandingSection />
          <Lore />
          <NFT />
        </div>
      ) : (
        <EnteringSection setScreen={setEnter} screenValue={enter} />
      )}
    </>
  );
}

export default App;
