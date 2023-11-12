import { useAuth } from '../../hooks/useAuth';

function OnlyPublic({ children }) {
  const { user } = useAuth();

  if (user) {
    return null;
  }

  return children;
}

export default OnlyPublic;
