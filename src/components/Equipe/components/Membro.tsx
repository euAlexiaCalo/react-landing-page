import "./Membro.css";
import { getInitials } from "../../../utils/stringUtils";

interface MembroProps {
  name: string;
  position: string;
  description: string;
  bgColor?: string;
  textColor?: string;
}

function Membro({ name, position, description, bgColor, textColor }: MembroProps) {

  const initial = getInitials(name);

  return (
    <div className="membro-item">
      <span
        className="membro-initial"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {initial}
      </span>
      <div className="membro-info">
        <h3 className="membro-name">{name}</h3>
        <p className="membro-position">{position}</p>
      </div>
      <p className="membro-description">{description}</p>
    </div>
  )
}

export default Membro;
