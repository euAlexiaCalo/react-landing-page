import "./Form.css";

interface TextareaProps {
    label: string;
    placeholder: string;
    id: string;
    required: boolean;
}

function Textarea({ label, placeholder, id, required }: TextareaProps) {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <textarea placeholder={placeholder} id={id} name={id} required={required} />
        </div>
    )
}

export default Textarea;