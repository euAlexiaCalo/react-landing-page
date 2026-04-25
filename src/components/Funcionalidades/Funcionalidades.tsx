import ItemFuncionalidade from "./components/ItemFuncionalidade";
import { funcionalidades } from "../../data/funcionalidades";
import "./Funcionalidades.css";

function Funcionalidades() {
  return (
    <section id="funcionalidades" className="funcionalidades">
      <div className="funcionalidades-container container">
        <div className="funcionalidades-content">
          <h2>Por que escolher a EduTrack</h2>
          <p>
            Soluções completas desenhadas para o ecossistema de educação técnica
            profissionalizante.
          </p>
        </div>
        <div className="funcionalidades-content">
          {funcionalidades.map((funcionalidade) => (
            <ItemFuncionalidade
              key={funcionalidade.id}
              icon={funcionalidade.icon}
              title={funcionalidade.title}
              description={funcionalidade.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Funcionalidades;