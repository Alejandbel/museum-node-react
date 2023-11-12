import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function LogoutPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const effect = async () => {
      await logout();
      navigate('/');
    };
    void effect();
  }, []);

  return null;
}

export default LogoutPage;
