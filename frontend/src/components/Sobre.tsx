type Props = {
    nombre: string;
    descripcion: string;
}

const Sobre = ({nombre, descripcion}: Props) => {
  // Dividimos el nombre para aplicar el efecto de color tenue al apellido
  const nombreArray = nombre.split(' ');
  const primerNombre = nombreArray.slice(0, 2).join(' ');
  const apellidos = nombreArray.slice(2).join(' ');

  return (
    <section id="sobre" className="hero-section">
      <div className="hero-content">
        <span className="badge">Backend Developer</span>
        
        <h1>
          {primerNombre} <br />
          <span>{apellidos}</span>
        </h1>

        <p className="description">
          {descripcion}
        </p>

        <div className="hero-actions">
          <a href="#proyectos" className="btn-primary">Ver Proyectos</a>
          <a href="#contact" className="btn-secondary">Contacto</a>
        </div>
      </div>
    </section>
  )
}

export default Sobre;