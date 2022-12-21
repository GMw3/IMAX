import { useEffect, useState } from "react";

import CoreTeam from "./components/core_team/CoreTeam";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Roadmap from "./components/roadmap/Roadmap";
import SharedModal from "./components/SharedModal/SharedModal";
import Team from "./components/team/Team";

import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [showVidModal, setShowVidModal] = useState(false);
  const [video_src, setVideo_src] = useState("");

  const enable_Modal = (vid_src) => {
    setVideo_src(vid_src);
    setShowVidModal(true);
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="App">
      <Roadmap enable_Modal={enable_Modal} />
      <CoreTeam />
      <Team />
      <Faq />
      <Footer />
      {showVidModal && (
        <SharedModal closeModal={setShowVidModal} video_src={video_src} />
      )}
    </div>
  );
}

export default App;
