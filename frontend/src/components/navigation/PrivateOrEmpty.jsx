import { useAuth } from '../../hooks/useAuth';

/**
 * @param children
 * @param {UserRole[]} allowedRoles
 * @constructor
 */
function PrivateOrEmpty({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
    return null;
  }

  return children;
}

export default PrivateOrEmpty;
