import './CardOption.css';
import { useNavigate, Link } from 'react-router-dom';

function CardOption({ title, description, route, image }) {

  return (
    <Link to={route} className="card-option" role="button">
      <h2>{title}</h2>
      <div className='option-title-image'>
        {image && <img src={image} alt={title} className="card-image" />}
        <p>{description}</p>
      </div>
      
    </Link>
  );
}

export default CardOption;
