
import './App.css';
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Intro />
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
