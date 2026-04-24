import "./Button.css"

interface ButtonProps {
    label: string;
    onClick?: () => void;  // Função sem retorno que é chamada ao ser clicado
    type?: "button" | "submit" | "reset";
    filled: boolean;  // Indica se o botão está preenchido ou não
    border: boolean;  // Indica se o botão tem borda ou não
}

function Button({ label, onClick, type, filled, border }: ButtonProps) {
    return (
        <button
            className={`btnDefault ${filled ? "filled" : ""} ${border ? "border" : ""}`.trim()}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
}

export default Button;