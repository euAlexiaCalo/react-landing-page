import ItemPilar from "./components/ItemPilar.tsx";
import { pilares } from "../../data/pilares";
import "./Sobre.css";

function Sobre() {
    return (
        <section id="sobre" className="sobre">
            <div className="sobre-container container">
                <article className="sobre-content">
                    <h4 className="sobre-tag">Sobre a EduTrack</h4>
                    <h2>Tecnologia a serviço da educação de qualidade</h2>
                    <p>
                        Nossa missão é transformar a maneira como escolas técnicas operam,
                        eliminando burocracias e fornecendo dados em tempo real para
                        decisões pedagógicas precisas.
                    </p>
                    <p>
                        Acreditamos que o professor deve focar no ensino, enquanto nossa
                        tecnologia cuida da infraestrutura de dados e acompanhamento do
                        discente.
                    </p>
                </article>
                <article className="sobre-content">
                    <h3>Os 4 pilares</h3>
                    <div className="pilares">
                        {pilares.map((pilar) => (
                            <ItemPilar
                                key={pilar.id}
                                icon={pilar.icon}
                                alt={pilar.alt}
                                title={pilar.title}
                                description={pilar.description}
                            />
                        ))}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Sobre