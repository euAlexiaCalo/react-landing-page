import "./Navbar.css";
import Button from "../Button/Button";

function showMessage() {
    alert("Botão clicado!");
}

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <a href="#hero" className="navbar-logo">EduTrack</a>
                <ul className="navbar-menu">
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#funcionalidades">Funcionalidades</a></li>
                    <li><a href="#equipe">Equipe</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
                <div className="navbar-buttons">
                    <Button
                        label="Login"
                        onClick={showMessage}
                        type="button"
                        filled={false}
                        border={false} />
                    <Button
                        label="Começar agora"
                        onClick={showMessage}
                        type="button"
                        filled={true}
                        border={false} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;