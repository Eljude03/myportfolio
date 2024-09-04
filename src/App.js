import Nabvar from "./Components/Nabvar";
import Home from "./Components/Home";
import About from "./Components/About";
import SocialLinks from "./Components/SocialLinks";
import Portfolio from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App bg-[#EDEDED] dark:bg-[#181818] dark:text-white">
      <Nabvar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
