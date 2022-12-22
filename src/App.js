import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

const background = require("./images/Background/bg.svg").default;
import CoreTeam from "./components/core_team/CoreTeam";
import EnteringSection from "./components/enteringSection";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import LandingSection from "./components/landingSection";
import Lore from "./components/lore";
import Navbar from "./components/navbar";
import NFT from "./components/NFT";
import Roadmap from "./components/roadmap/Roadmap";
import SharedModal from "./components/SharedModal/SharedModal";
import Team from "./components/team/Team";

import "./App.css";

function App() {
  const [showVidModal, setShowVidModal] = useState(false);
  const [video_src, setVideo_src] = useState("");
  const [enter, setEnter] = useState(false);

  const enable_Modal = (vid_src) => {
    setVideo_src(vid_src);
    setShowVidModal(true);
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      {enter ? (
        <div className="bg-background-img">
          <Navbar />
          <LandingSection />
          <Lore />
          <NFT />
          <Roadmap enable_Modal={enable_Modal} />
          <CoreTeam />
          <Team />
          <Faq />
          <Footer />
          {showVidModal && (
            <SharedModal closeModal={setShowVidModal} video_src={video_src} />
          )}
        </div>
      ) : (
        <EnteringSection setScreen={setEnter} screenValue={enter} />
      )}
    </>
  );
}

export default App;
