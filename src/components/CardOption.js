import { useNavigate } from 'react-router-dom';

function CardOption({ title, description, route }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      style={{
        border: '2px solid #ccc',
        borderRadius: '12px',
        padding: '20px',
        width: '240px',
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CardOption;
