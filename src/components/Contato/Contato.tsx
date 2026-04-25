import { VscMail } from "react-icons/vsc";
import { MdOutlinePhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import Input from "../Form/Input";
import Textarea from "../Form/Textarea";
import Button from "../Button/Button";
import "./Contato.css";

function Contato() {
    return (
        <section id="contato" className="contato">
            <div className="contato-container container">
                <div className="contato-info">
                    <h2>Vamos conversar?</h2>
                    <p>Agende uma demonstração gratuita e veja como a EduTrack pode revolucionar sua escola.</p>
                    <ul>
                        <li><VscMail /><p>contato@edutrack.com.br</p></li>
                        <li><MdOutlinePhone /><p>+55 (11) 4002-8922</p></li>
                        <li><GoLocation /><p>Av. Paulista, 1000 - São Paulo, SP</p></li>
                    </ul>
                    <p>Suporte técnico disponível 24/7 para escolas premium.</p>
                </div>

                <div className="contato-form">
                    <form>
                        <div>
                            <Input
                                label="Nome"
                                type="text"
                                placeholder="Seu nome completo"
                                id="name"
                                required
                            />
                            <Input
                                label="Telefone"
                                type="tel"
                                placeholder="(11) 99999-9999"
                                id="phone"
                                required={false}
                            />
                        </div>
                        <Input
                            label="E-mail" type="email" placeholder="seu@email.com"
                            id="email"
                            required
                        />
                        <Textarea
                            label="Mensagem"
                            placeholder="Como podemos ajudar?"
                            id="message"
                            required
                        />
                        <Button
                        label="Enviar Mensagem"
                        type="submit"
                        filled={true}
                        border={false} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contato;