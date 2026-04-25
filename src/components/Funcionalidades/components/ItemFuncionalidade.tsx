import "./ItemFuncionalidade.css";

interface ItemFuncionalidadeProps {
  icon: string;
  title: string;
  description: string;
}

function ItemFuncionalidade({ icon, title, description }: ItemFuncionalidadeProps) {
    return (
        <article className="funcionalidade-item">
            <span className="funcionalidade-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}

export default ItemFuncionalidade;