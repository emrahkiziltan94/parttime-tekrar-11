import { Route, Redirect } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

export default function PrivateRoute({ children, ...rest }) {
  //const { isUserLoggedIn } = useAuth();
  const { value } = useLocalStorage('token', null);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        value ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
