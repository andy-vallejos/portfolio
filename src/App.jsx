import { Nav, Header, Skills, About, Projects } from "./components/index";

function App() {
  return (
    <>
      {/*  <p className="alert">Pagina en desarrollo...</p> */}
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
