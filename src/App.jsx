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
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
