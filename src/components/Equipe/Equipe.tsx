import Membro from "./components/Membro";
import { equipe } from "../../data/equipe";
import "./Equipe.css";

function Equipe() {
    return (
        <section id="equipe" className="equipe">
            <div className="equipe-container container">
                <h2>Quem está por trás da EduTrack</h2>
                <div className="equipe-membros">
                    {equipe.map((membro) => (
                        <Membro
                        key={membro.id}
                        name={membro.name}
                        position={membro.position}
                        description={membro.description}
                        bgColor={membro.bgColor}
                        textColor={membro.textColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Equipe;