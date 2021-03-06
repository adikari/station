import React from 'react';
import { useAuth } from 'context/auth';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default NavBar;
