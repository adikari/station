import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import PropTypes from 'prop-types';

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();

export const useAuth = () => useContext(Auth0Context);

export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        console.log('app state', appState);
        onRedirectCallback(appState);
      }

      const authenticated = await auth0FromHook.isAuthenticated();
      console.log('authenticated', authenticated);

      setIsAuthenticated(authenticated);

      if (isAuthenticated) {
        const foundUser = await auth0FromHook.getUser();
        setUser(foundUser);
      }

      setLoading(false);
    };

    initAuth0();
  }, []);

  const handleRedirectCallback = async () => {
    setLoading(true);

    await auth0Client.handleRedirectCallback();
    const foundUser = await auth0Client.getUser();

    setLoading(false);
    setIsAuthenticated(true);
    setUser(foundUser);
  };

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};

Auth0Provider.propTypes = {
  children: PropTypes.object,
  onRedirectCallback: PropTypes.function
};
