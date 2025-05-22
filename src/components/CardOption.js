import './CardOption.css';
import { useNavigate } from 'react-router-dom';

function CardOption({ title, description, route, image }) {
  const navigate = useNavigate();

  return (
    <div className="card-option" onClick={() => navigate(route)}>
      {image && <img src={image} alt={title} className="card-image" />}
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="card-button">Try it now</button>
    </div>
  );
}

export default CardOption;
