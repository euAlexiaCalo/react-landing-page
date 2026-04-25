import { MdOutlineStar } from "react-icons/md";
import Button from "../Button/Button";
import Statistics from "./components/Statistics";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">Plataforma de Aprendizado do Futuro</span>
          <h1>
            Gestão de aprendizado inteligente para <span>escolas técnicas</span>
          </h1>
          <p>
            Centralize avaliações, presença e progresso dos alunos em uma
            interface intuitiva e potente. Desenvolvido para instituições que
            buscam excelência acadêmica.
          </p>
        </div>

        <div className="hero-buttons">
          <Button
            label="Explorar Funcionalidades"
            onClick={() => {}}
            type= "button"
            filled={true}
            border={false}
          />
          <Button
            label="Saiba mais"
            onClick={() => {}}
            type= "button"
            filled={false}
            border={true}
          />
        </div>

        <div className="hero-statistics">
            <Statistics data="+120" description="escolas técnicas" />
            <Statistics data="+48 mil" description="alunos ativos" />
            <Statistics data={<>4.9 <MdOutlineStar /></>} description="avaliação média" />
        </div>
      </div>
    </section>
  )
}

export default Hero;