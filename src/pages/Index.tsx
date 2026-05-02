import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/clientes', { replace: true });
  }, [navigate]);

  return null;
};

export default Index;
