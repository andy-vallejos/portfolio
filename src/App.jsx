import { Nav, Header, Skills, About, Projects } from "./components/index";

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <main>
        <Skills></Skills>
        <Projects></Projects>
        <About></About>
      </main>
    </>
  );
}

export default App;
