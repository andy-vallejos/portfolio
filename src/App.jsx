import Certifications from "./components/Certifications";
import {
  Nav,
  Hero,
  AboutMe,
  Experience,
  TechStack,
  Contact,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="">
      <Nav />
      <main>
        <Hero />
        <AboutMe />
        <Certifications />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
