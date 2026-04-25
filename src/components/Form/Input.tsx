import "./Form.css";

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
    required: boolean;
}

function Input({ label, type, placeholder, id, required }: InputProps) {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder} id={id} name={id} required={required} />
        </div>
    )
}

export default Input;