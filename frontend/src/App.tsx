import "./App.css";
import Sobre from './components/Sobre'

function App() {
  return (
    <div>

      <nav>
        <h2>Mi Portafolio</h2>
        <ul>
          <li><a href="#sobre">Sobre mí</a></li>
          <li><a href="#tecnologias">Tecnologías</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <Sobre nombre="Juan Angel Quintero Roldan" descripcion="Desarrollador en formación con React y Python
      "/>

      <section id="tecnologias">
        <h1>Tecnologías</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
        </ul>
      </section>

      <section id="proyectos">
        <h1>Proyectos</h1>

        <div className="proyecto">
          <h3>App de Tareas</h3>
          <p>Hecha con React</p>
        </div>

      </section>

      <section id="contacto">
        <h1>Contacto</h1>

        <form>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensaje"></textarea>
          <button>Enviar</button>
        </form>

      </section>

    </div>
  );
}

export default App;