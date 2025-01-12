import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Exp from "./components/Experience/Exp";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";

function App() {
  return <div className="App">
    <Navbar/>
    <Hero/>
    <About/>
    <Exp/>
    <Project/>
    <Contact/>
  </div>;
}

export default App;
