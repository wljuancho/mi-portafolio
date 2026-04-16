const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Usamos tus iniciales para un toque más profesional */}
        <div className="nav-logo">
          JAQR<span>.</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#sobre">Sobre mí</a></li>
          <li><a href="#tecnologias">Tecnologas</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          
          <li><a href="#contact" className="nav-btn">Contacto</a></li>
      
        </ul>

        {/* El botón de contacto resaltado para mejorar la conversión */}
        
      </div>
    </nav>
  )
}

export default Navbar;