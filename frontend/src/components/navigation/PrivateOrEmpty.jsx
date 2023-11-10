import { useAuth } from '../../hooks/useAuth';

/**
 * @param children
 * @param {UserRole[]} allowedRoles
 * @constructor
 */
function PrivateOrEmpty({ children, allowedRoles }) {
  const { currentUser } = useAuth();

  if (!currentUser || (allowedRoles && !allowedRoles.includes(currentUser.role))) {
    return null;
  }

  return children;
}

export default PrivateOrEmpty;
