import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/clientes', { replace: true });
  }, [navigate]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Farmácia - Sistema de Gestão</h1>
      <p>Bem-vindo ao sistema de gestão farmacêutica.</p>
    </div>
  );
};

export default Index;
