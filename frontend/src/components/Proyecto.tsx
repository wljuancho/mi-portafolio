
type ProyectType = {
    name: string;
    tecnologias: string[];
}
type Props = {
    Proyectos: ProyectType[];
}

const Proyecto = ({Proyectos}: Props) => {
  return (
    <section id="proyectos">
        <h1>Proyectos</h1>
        {Proyectos.map((proyecto, index)=>(
            <div className="proyecto" key={index}>
                <h3>{proyecto.name}</h3>
                <p>Echo con:</p>

                <ul>
                    {proyecto.tecnologias.map((techt, i)=>
                    <li key = {i}>{techt}</li>)}
                </ul>
            </div>
        ))}
      </section>
  )
}

export default Proyecto