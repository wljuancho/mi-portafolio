import "./App.css";
import Sobre from './components/Sobre'
import Tecnologias from "./components/Tecnologias";
import Proyecto from "./components/Proyecto";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";

function App() {
  const misProyectos = [
  {
    name: "Jank School",
    tecnologias: ["Java", "Python"],
    description: "Sistema de gestión escolar desarrollado para optimizar el registro de notas.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    url: "https://tu-sitio-demo.com"
  }
  ];
  const misTecnologias = [
   { name: 'HTML', level: 50 },
  { name: 'Python', level: 65 },
  { name: 'Java Script', level: 40 },
  { name: 'React', level: 20 }
  ]
  return (
    <div>
      <Navbar />

      <Sobre nombre="Juan Angel Quintero Roldan" descripcion="Desarrollador en formación con React y Python,
      apasionado por la tecnología.
      Me gusta crear aplicaciones web,
      estoy en constante aprendizaje y buscando crecer profesionalmente."/>

      <Tecnologias tecnolo={misTecnologias} />

      <Proyecto Proyectos={misProyectos} />
      <Contacto Telefono = {573012758519} Email="juanangelquinteroroldan82@gmail.com"
      Github="wljuancho"/>

      
    </div>
  );
}

export default App;