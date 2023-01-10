import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import Education from "./components/Education/Education";
import Proyectos from "./components/Proyectos/Proyectos";
import "./App.css";


function App() {

  return (
    <>
      <Header />

      <main className="main" >
        <Home />
        <Education />  
        <Proyectos/>
        {/* tecnologias*/}
      </main>
 
    </>
  )
}

export default App
