import './ItemPilar.css';
interface ItemPilarProps {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

function ItemPilar({ icon, alt, title, description }: ItemPilarProps) {
  return (
    <div className="pilar-item">
      <div className="pilar-content">
        <img src={icon} alt={alt} />
      </div>
      <div className="pilar-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ItemPilar;
