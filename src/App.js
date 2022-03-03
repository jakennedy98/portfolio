
import './App.css';
import Navbar from "./components/Navbar";
import Education from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {useRef} from "react";
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Jacob Kennedy Portfolio</title>
        <meta name="description" content="Jacob Kennedy Portfolio" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
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
