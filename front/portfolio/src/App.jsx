import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import Desarrollo from "./components/Desarrollo/Desarrollo";
import Proyectos from "./components/Proyectos/Proyectos";
import Tecnologies from "./components/Tecnologies/Tecnologies";
import "./App.css";


function App() {

  return (
    <>
      <Header />

      <main className="main" >
        <Home />
        <Desarrollo />  
        <Proyectos/>
        <Tecnologies/>
      </main>
 
    </>
  )
}

export default App
