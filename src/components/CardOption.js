import './CardOption.css';
import { useNavigate } from 'react-router-dom';

function CardOption({ title, description, route, image }) {
  const navigate = useNavigate();

  return (
    <div className="card-option" onClick={() => navigate(route)}>
      <h2>{title}</h2>
      <div className='option-title-image'>
        {image && <img src={image} alt={title} className="card-image" />}
        <p>{description}</p>
      </div>
      
    </div>
  );
}

export default CardOption;
