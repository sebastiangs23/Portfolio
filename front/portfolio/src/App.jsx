import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import Education from "./components/Education/Education";
import Proyectos from "./components/Proyectos/Proyectos";
import Tecnologies from "./components/Tecnologies/Tecnologies";
import "./App.css";


function App() {

  return (
    <>
      <Header />

      <main className="main" >
        <Home />
        <Education />  
        <Proyectos/>
        <Tecnologies/>
      </main>
 
    </>
  )
}

export default App
