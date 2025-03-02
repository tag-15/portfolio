import "./App.css";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Skills />
    </>
  );
}

export default App;
