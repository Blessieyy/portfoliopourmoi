import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Exp from "./components/Experience/Exp";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import ProjectTabs from "./components/Project/ProjectTabs";
import Timeline from "./TimeLine/Timeline";

function App() {
  return <div className="App">
    <Navbar/>
    <Hero/>
    <About/>
    <Timeline />
    <Exp/>
    <ProjectTabs/>
    <Contact/>
  </div>;
}

export default App;
