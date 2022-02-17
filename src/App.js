
import './App.css';
import Intro from "./components/Header";
import Navbar from "./components/Navbar";
import Education from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {useRef} from "react";

function App() {

 
  const contact = useRef();
  const aboutMe = useRef();
  const skills = useRef();
  const projects = useRef();

  const focusInput = () => {
    contact.current.focus();
  };


  let props = {
    contact: contact,
    aboutMe: aboutMe,
    skills: skills,
    project: projects,
    test: "test!",

  };

  return (
    <div>
      <Navbar props={props}/>
      <Education/>

      <Skills/>
      <Projects/>
      <Contact props={props}/>
      <Footer />
    </div>
  );
}

export default App;
