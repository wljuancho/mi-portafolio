type Tech = {
  name: string;
  level: number; // Porcentaje de 0 a 100
}

type Props = {
  tecnolo: Tech[]
}

const Tecnologias = ({ tecnolo }: Props) => {
  return (
    <section id="tecnologias">
      <div className="tech-container">
        <h2 className="section-title">Tecnologías</h2>
        
        <div className="tech-grid">
          {tecnolo.map((tech, index) => (
            <div className="tech-item" key={index}>
              <div className="tech-info">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-percentage">{tech.level}%</span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tecnologias