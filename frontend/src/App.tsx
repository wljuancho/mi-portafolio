import "./App.css";
import Sobre from './components/Sobre'
import Tecnologias from "./components/Tecnologias";
import Proyecto from "./components/Proyecto";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";

function App() {
  const misProyectos = [
  {
    name: "FinTech App",
    tecnologias: ["React", "Firebase"],
    description: "Plataforma para gestión de gastos personales con gráficos en tiempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    url: "https://github.com/tu-usuario/proyecto1"
  },
  {
    name: "Jank School",
    tecnologias: ["Java", "Python"],
    description: "Sistema de gestión escolar desarrollado para optimizar el registro de notas.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    url: "https://tu-sitio-demo.com"
  }
  ];
  const misTecnologias = [
  { name: 'HTML', level: 90 },
  { name: 'Python', level: 75 },
  { name: 'Java', level: 70 },
  { name: 'React', level: 85 }
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