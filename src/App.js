import "./App.css";
import CoreTeam from "./components/core_team/CoreTeam";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Roadmap from "./components/roadmap/Roadmap";
import Team from "./components/team/Team";

function App() {
  return (
    <div className="App">
      <Roadmap />
      <CoreTeam />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
