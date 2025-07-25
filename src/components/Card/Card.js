import { useNavigate } from "react-router-dom";

const Card = ({ title, description, route }) => {
    const navigate = useNavigate();

    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            maxWidth: '300px',
            margin: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <h2 style={{ marginBottom: '10px' }}>{title}</h2>
            <p style={{ marginBottom: '20px' }}>{description}</p>
            <button
                onClick={() => navigate(route)}
                style={{
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Git
            </button>
        </div>
    );
};

export default Card;
