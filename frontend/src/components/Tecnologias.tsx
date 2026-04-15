
type Props = {
    tecnolo: string[]
}

const Tecnologias = ({tecnolo}: Props) => {
  return (
    <section id="tecnologias">
        <h1>Tecnologías</h1>
        <ul>
        {tecnolo.map((tecth, index) =>(
            <li key={index}>{tecth}</li>
        ))}
        </ul>
      </section>
  )
}

export default Tecnologias