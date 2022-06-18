import NavBar from "./Componets/FristCompoent";
import "./App.css";
import SecondContainer from "./Componets/SecondContainer";
import ThirdContainer from "./Componets/ThirdCompoent";
import Services from "./Componets/FourCompoent";
import Communications from "./Componets/Communications";
import Facilitation from "./Componets/Facilitation";
import Consultation from "./Componets/Consultation";
import Traning from "./Componets/Traning";
import OurTeam from "./Componets/OurTeam";
import OurProject from "./Componets/OURPROJECTS";
import OURCLIENTS from "./Componets/OurClinets";
import Footer from "./Componets/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <SecondContainer />
      <ThirdContainer />
      <Services />
      <Communications />
      <Facilitation />
      <Consultation />
      <Traning />
      <OurTeam />
      <OurProject />
      <OURCLIENTS />
      <Footer />
    </div>
  );
}

export default App;
