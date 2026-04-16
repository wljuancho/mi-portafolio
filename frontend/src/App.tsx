import "./App.css";
import Sobre from './components/Sobre'
import Tecnologias from "./components/Tecnologias";
import Proyecto from "./components/Proyecto";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";

function App() {
  
  
  const misTecnologias = [
  { name: 'HTML', level: 50 },
  { name: 'Python', level: 65 },
  { name: 'Java', level: 40 },
  { name: 'React', level: 30 }
  ]
  return (
    <div>
      <Navbar />

      <Sobre nombre="Juan Angel Quintero Roldan" descripcion="Desarrollador en formación con React y Python,
      apasionado por la tecnología.
      Me gusta crear aplicaciones web,
      estoy en constante aprendizaje y buscando crecer profesionalmente."/>

      <Tecnologias tecnolo={misTecnologias} />

     
      <Contacto Telefono = {573012758519} Email="juanangelquinteroroldan82@gmail.com"
      Github="wljuancho"/>
      
    </div>
  );
}

export default App;