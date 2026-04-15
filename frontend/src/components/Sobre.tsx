type Props = {
    nombre: string;
    descripcion: string;
}

const Sobre = ({nombre, descripcion}: Props) => {
  return (
    <section id="sobre">
      <h1>Sobre mí</h1>
      <h2>{nombre}</h2><br></br>
      <p>{descripcion}</p>
    </section>
  )
}

export default Sobre