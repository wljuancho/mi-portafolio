type Props = {
    Telefono: number
    Email: string
    Github: string
    
}

const Contacto = ({Telefono, Email, Github}: Props) => {
  return (
    <section id="contacto">
      <h2>Contacto</h2>

      <p><strong>📞 Teléfono:</strong> {Telefono}</p>

      <p>
        <strong>📧 Email:</strong>{" "}
        <a href={`mailto:${Email}`}>{Email}</a>
      </p>

      <p>
        <strong>🐙 GitHub:</strong>{" "}
        <a href={Github} target="_blank" rel="noreferrer">
          {Github}
        </a>
      </p>

      <a
        href={`https://wa.me/${Telefono}?text=Hola%20vi%20tu%20portafolio`}
        target="_blank"
        rel="noreferrer"
      >
        <button>Escribirme por WhatsApp</button>
      </a>
    </section>
  )
}

export default Contacto