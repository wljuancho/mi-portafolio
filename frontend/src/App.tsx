import "./App.css";
import Sobre from './components/Sobre'
import Tecnologias from "./components/Tecnologias";
import Proyecto from "./components/Proyecto";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";

function App() {
  const proyectos= [
    {
      name:'juan',
      tecnologias: ['rect','js']
     },
     {
      name:'jank school',
      tecnologias: ['java','python']
     }
  ]
   
  return (
    <div>
      <Navbar />

      <Sobre nombre="Juan Angel Quintero Roldan" descripcion="Desarrollador en formación con React y Python,
      apasionado por la tecnología.
      Me gusta crear aplicaciones web,
      estoy en constante aprendizaje y buscando crecer profesionalmente."/>

      <Tecnologias tecnolo={['HTML','python','java']} />

      <Proyecto Proyectos={proyectos} />
      <Contacto Telefono = {3012758519} Email="juanangelquinteroroldan82@gmail.com"
      Github="wljuancho"/>
      
    </div>
  );
}

export default App;