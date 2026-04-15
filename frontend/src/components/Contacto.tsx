import { Mail, Phone,  Send } from 'lucide-react';

type Props = {
  Telefono: number;
  Email: string;
  Github: string;
}

const Contacto = ({ Telefono, Email, Github }: Props) => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="section-subtitle">Get in touch</span>
          <h2 className="section-title">Hablemos de tu <br /><span>próximo proyecto.</span></h2>
          
          <div className="contact-methods">
            
            {/* ENLACE DE EMAIL */}
            <a href={`mailto:${Email}`} className="method-item">
              <div className="method-icon"><Mail size={20} /></div>
              <div>
                <span>Email</span>
                <p>{Email}</p>
              </div>
            </a>

            {/* ENLACE DE WHATSAPP - Asegúrate de incluir el 57 antes del número */}
            <a 
              href={`https://wa.me/57${Telefono}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="method-item"
            >
              <div className="method-icon"><Phone size={20} /></div>
              <div>
                <span>WhatsApp</span>
                <p>+{Telefono}</p>
              </div>
            </a>

            {/* ENLACE DE GITHUB */}
            <a 
              href={`https://github.com/${Github}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="method-item"
            >
              <div className="method-icon"></div>
              <div>
                <span>GitHub</span>
                <p>github.com/{Github}</p>
              </div>
            </a>

          </div>
        </div>

        {/* ... resto del formulario ... */}
      </div>
    </section>
  );
};

export default Contacto