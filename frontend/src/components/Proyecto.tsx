type ProyectType = {
  name: string;
  tecnologias: string[];
  description: string;
  image: string;
  url: string; // Puede ser el repo de GitHub o la URL del sitio
}

type Props = {
  Proyectos: ProyectType[];
}

const Proyecto = ({ Proyectos }: Props) => {
  return (
    <section id="proyectos">
      <div className="section-header">
        <span className="section-subtitle">Portfolio</span>
        <h2 className="section-title">Proyectos Destacados</h2>
      </div>

      <div className="proyectos-container">
        {Proyectos.map((proyecto, index) => (
          <a 
            href={proyecto.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="proyecto-card" 
            key={index}
          >
            <div className="proyecto-image-wrapper">
              <img src={proyecto.image} alt={proyecto.name} className="proyecto-img" />
              <div className="proyecto-overlay">
                <span>Ver Proyecto</span>
              </div>
            </div>

            <div className="proyecto-content">
              <div className="proyecto-techs">
                {proyecto.tecnologias.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <h3>{proyecto.name}</h3>
              <p>{proyecto.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Proyecto;